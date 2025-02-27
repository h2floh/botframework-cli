/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

const fileExtEnum = require('../utils/helpers').FileExtTypeEnum
const luParser = require('../lufile/luParser')
const SectionOperator = require('../lufile/sectionOperator')
const LUSectionTypes = require('../utils/enums/lusectiontypes')
const LUResource = require('../lufile/luResource')
const DiagnosticSeverity = require('../lufile/diagnostic').DiagnosticSeverity
const fileHelper = require('../../utils/filehelper')
const exception = require('../utils/exception')
const retCode = require('../utils/enums/CLI-errors')
const prebuiltEntityTypes = require('../utils/enums/luisbuiltintypes').consolidatedList
const LuisBuilderVerbose = require('./../luis/luisCollate')
const Luis = require('./../luis/luis')
const qnaBuilderVerbose = require('./../qna/qnamaker/kbCollate')
const NEWLINE = require('os').EOL
const path = require('path')
const QNA_GENERIC_SOURCE = "custom editorial"
const MAX_QUESTIONS_PER_ANSWER = 1000

module.exports = {
  /**
   * Do cross training among lu files
   * @param {any[]} luContents the lu content array whose element includes path and content
   * @param {any[]} qnaContents the qna content array whose element includes path and content
   * @param {any} configObject cross train config json object
   * @param {any} options some optional parameters including configId, intentName, verbose, importResolver, trainingOpt
   * @returns {Map<string, LUResource>} map of file id and luResource
   * @throws {exception} throws errors
   */
  crossTrain: async function (luContents, qnaContents, configObject, options = {}) {
    try {
      const importResolver = options.importResolver

      const crossTrainConfig = fileHelper.getConfigObject(
        configObject,
        options.intentName || '_Interruption',
        options.verbose || true,
        options.trainingOpt || {inner: true, intra: true})

      let {luObjectArray, qnaObjectArray} = pretreatment(luContents, qnaContents)
      const {rootIds, triggerRules, intentName, verbose, trainingOpt} = crossTrainConfig

      // parse lu content to LUResource object
      let {fileIdToResourceMap: luFileIdToResourceMap, allEmpty: allLuEmpty} = await parseAndValidateContent(luObjectArray, verbose, importResolver, fileExtEnum.LUFile)

      // parse qna content to LUResource object
      let {fileIdToResourceMap: qnaFileIdToResourceMap, allEmpty: allQnAEmpty} = await parseAndValidateContent(qnaObjectArray, verbose, importResolver, fileExtEnum.QnAFile)

      if (!allLuEmpty && trainingOpt.intra) {
        // construct resource tree to build the father-children relationship among lu files
        let resources = constructResoureTree(luFileIdToResourceMap, triggerRules)

        // do lu cross training from roots. One root one core training
        for (const rootObjectId of rootIds) {
          if (resources.some(r => r.id.toLowerCase() === rootObjectId.toLowerCase())) {
            // do cross training for each root at top level
            const result = luCrossTrain(rootObjectId, resources, qnaFileIdToResourceMap, intentName)
            for (const res of result) {
              luFileIdToResourceMap.set(res.id, res.content)
            }
          } else {
            throw (new exception(retCode.errorCode.INVALID_INPUT, `Sorry, root lu file '${rootObjectId}' does not exist`))
          }
        }
      }

      if (!allQnAEmpty && trainingOpt.inner) {
        // do qna cross training with lu files
        qnaCrossTrain(qnaFileIdToResourceMap, luFileIdToResourceMap, intentName, allLuEmpty)
      }

      return { luResult: luFileIdToResourceMap, qnaResult: qnaFileIdToResourceMap }
    } catch (err) {
      throw (err)
    }
  }
}

/**
 * Contruct resource tree to build the father-children relationship among lu files
 * @param {Map<string, LUResource>} fileIdToLuResourceMap Map of file id and luResource
 * @param {any} triggerRules trigger rules object that indicate the triggering rules from root to dest lu files
 * @returns {any[]} object array of LUResource with id and children properties 
 * @throws {exception} throws errors
 */
const constructResoureTree = function (fileIdToLuResourceMap, triggerRules) {
  let resources = []
  let fileIdsFromInput = Array.from(fileIdToLuResourceMap.keys())
  let lowerCasefileIdsFromInput = Array.from(fileIdToLuResourceMap.keys()).map(x => x.toLowerCase())
  let triggerKeys = Object.keys(triggerRules)
  let lowerCaseTriggerKeys = triggerKeys.map(x => x.toLowerCase())

  for (const fileId of fileIdsFromInput) {
    let luResource = fileIdToLuResourceMap.get(fileId)
    let resource = {
      id: fileId,
      content: luResource,
      children: []
    }

    if (!lowerCaseTriggerKeys.includes(fileId.toLowerCase())) {
      resources.push(resource)
      continue
    }

    let intents = []
    for (const section of luResource.Sections) {
      if (section.SectionType === LUSectionTypes.SIMPLEINTENTSECTION
        || section.SectionType === LUSectionTypes.NESTEDINTENTSECTION) {
        intents.push(section)
      }
    }

    const intentToDestLuFiles = triggerRules[triggerKeys.find(k => k.toLowerCase() === fileId.toLowerCase())]
    for (const triggerIntent of Object.keys(intentToDestLuFiles)) {
      if (triggerIntent !== '' && !intents.some(i => i.Name === triggerIntent)) {
        throw (new exception(retCode.errorCode.INVALID_INPUT, `Sorry, trigger intent '${triggerIntent}' is not found in lu file: ${fileId}`))
      }

      let destLuFiles = intentToDestLuFiles[triggerIntent]
      if (typeof destLuFiles === 'string') destLuFiles = [destLuFiles]

      if (destLuFiles.length > 0) {
        destLuFiles.forEach(destLuFile => {
          if (destLuFile !== '' && !lowerCasefileIdsFromInput.includes(destLuFile.toLowerCase())) {
            throw (new exception(retCode.errorCode.INVALID_INPUT, `Sorry, lu file '${destLuFile}' is not found`))
          } else {
            resource.children.push({
              target: fileIdsFromInput.find(x => x.toLowerCase() === destLuFile.toLowerCase()) || '',
              intent: triggerIntent
            })
          }
        })
      } else {
        resource.children.push({
          target: '',
          intent: triggerIntent
        })
      }
    }

    resources.push(resource)
  }

  return resources
}

/**
 * Lu cross training core function. Do lu cross training from a root to its children once.
 * @param {string} rootResourceId the root resource object id
 * @param {any[]} resources all lu resource object list
 * @param {any[]} qnaFileToResourceMap map of qna file id and resource
 * @param {string} intentName interruption intent name
 * @returns {any[]} updated resource objects
 */
const luCrossTrain = function (rootResourceId, resources, qnaFileToResourceMap, intentName) {
  const idToResourceMap = new Map()
  for (const resource of resources) {
    idToResourceMap.set(resource.id, resource)
  }

  // Parse resources
  let rootResource = resources.filter(r => r.id.toLowerCase() === rootResourceId.toLowerCase())[0]
  rootResource.visited = true
  mergeRootInterruptionToLeaves(rootResource, idToResourceMap, qnaFileToResourceMap, intentName)
  
  return Array.from(idToResourceMap.values())
}

const mergeRootInterruptionToLeaves = function (rootResource, result, qnaFileToResourceMap, intentName) {
  if (rootResource.children === undefined || rootResource.length <= 0) return

  rootResource.content = removeDupUtterances(rootResource.content)

  mergeBrothersInterruption(rootResource, result, intentName)
  for (const child of rootResource.children) {
    let childResource = result.get(child.target)
    if (childResource && childResource.visited === undefined) {
      const rootQnaFileId = Array.from(qnaFileToResourceMap.keys()).find(x => x.toLowerCase() === rootResource.id.toLowerCase())
      const rootQnaResource = qnaFileToResourceMap.get(rootQnaFileId)
      const newChildResource = mergeFatherInterruptionToChild(rootResource, rootQnaResource, childResource, intentName)
      result.set(child.target, newChildResource)
      newChildResource.visited = true
      mergeRootInterruptionToLeaves(newChildResource, result, qnaFileToResourceMap, intentName)
    }
  }
}

const mergeBrothersInterruption = function (resource, result, intentName) {
  let children = resource.children
  for (const child of children) {
    const triggerIntent = child.intent
    const destLuFile = child.target
    let intentsWithSameTarget = []
    if (destLuFile !== '') intentsWithSameTarget = children.filter(c => c.target === destLuFile && c.intent !== '').map(x => x.intent)

    const brotherSections = resource.content.Sections.filter(s => s.Name !== triggerIntent
      && s.Name !== intentName
      && (s.SectionType === LUSectionTypes.SIMPLEINTENTSECTION || s.SectionType === LUSectionTypes.NESTEDINTENTSECTION)
      && children.some(brotherChild => brotherChild.intent === s.Name)
      && !intentsWithSameTarget.some(intent => intent === s.Name))

    let brotherUtterances = []
    brotherSections.forEach(s => {
      if (s.SectionType === LUSectionTypes.SIMPLEINTENTSECTION) {
        brotherUtterances = brotherUtterances.concat(s.UtteranceAndEntitiesMap.map(u => u.utterance).filter(i => !patternWithPrebuiltEntity(i)))
      } else {
        s.SimpleIntentSections.forEach(section => {
          brotherUtterances = brotherUtterances.concat(section.UtteranceAndEntitiesMap.map(u => u.utterance).filter(i => !patternWithPrebuiltEntity(i)))
        })
      }
    })

    let targetResource = result.get(child.target)

    // Merge direct brother's utterances
    if (targetResource) {
      targetResource = mergeInterruptionIntent(brotherUtterances, targetResource, intentName)
      result.set(targetResource.id, targetResource)
    }
  }
}

const mergeFatherInterruptionToChild = function (fatherResource, fatherQnaResource, childResource, intentName) {
  let fatherUtterances = []

  // extract father existing interruption utterances
  const fatherInterruptions = fatherResource.content.Sections.filter(s => s.Name === intentName)
  if (fatherInterruptions && fatherInterruptions.length > 0) {
    const fatherInterruption = fatherInterruptions[0]
    fatherUtterances = fatherUtterances.concat(fatherInterruption.UtteranceAndEntitiesMap.map(u => u.utterance))
  }

  // extract corresponding qna questions from father
  let questions = []
  if (fatherQnaResource) {
    const qnaSections = fatherQnaResource.Sections.filter(s => s.SectionType === LUSectionTypes.QNASECTION)
    qnaSections.forEach(q => questions = questions.concat(q.Questions))
  }

  fatherUtterances = fatherUtterances.concat(questions)
  if (fatherUtterances.length > 0) {
    childResource = mergeInterruptionIntent(fatherUtterances, childResource, intentName)
  }

  return childResource
}

const mergeInterruptionIntent = function (fromUtterances, toResource, intentName) {
  // remove duplicated utterances in fromUtterances
  const dedupFromUtterances = Array.from(new Set(fromUtterances))
  let existingUtterances = extractIntentUtterances(toResource.content).map(u => u.toLowerCase())
  const toInterruptions = toResource.content.Sections.filter(section => section.Name === intentName)
  if (toInterruptions && toInterruptions.length > 0) {
    const toInterruption = toInterruptions[0]
    // construct new content here
    let newFileContent = ''
    dedupFromUtterances.forEach(utterance => {
      if (!existingUtterances.includes(utterance.toLowerCase())) {
        newFileContent += '- ' + utterance + NEWLINE
      }
    })

    if (newFileContent === '') return toResource

    const existingContent = `# ${toInterruption.Name}${NEWLINE}${toInterruption.Body}`
    newFileContent = existingContent + NEWLINE + newFileContent
    let lines = newFileContent.split(/\r?\n/)
    let newLines = []
    lines.forEach(line => {
      if (line.trim().startsWith('-')) {
        newLines.push('- ' + line.trim().slice(1).trim())
      } else if (line.trim().startsWith('##')) {
        newLines.push('## ' + line.trim().slice(2).trim())
      } else if (line.trim().startsWith('#')) {
        newLines.push('# ' + line.trim().slice(1).trim())
      }
    })

    newFileContent = newLines.join(NEWLINE)

    // update section here
    toResource.content = new SectionOperator(toResource.content).updateSection(toInterruption.Id, newFileContent)
  } else {
    // construct new content here
    const dedupUtterances = dedupFromUtterances.filter(u => !existingUtterances.includes(u.toLowerCase()))
    if (dedupUtterances && dedupUtterances.length > 0) {
      let newFileContent = `${NEWLINE}> Source: cross training. Please do not edit these directly!${NEWLINE}# ${intentName}${NEWLINE}- `
      newFileContent += dedupUtterances.join(`${NEWLINE}- `)

      // add section here
      // not add the interruption intent if original file is empty
      // here empty means there are no model related sections exception information section
      if (toResource.content.Sections.filter(s => s.SectionType !== LUSectionTypes.MODELINFOSECTION).length > 0) {
        toResource.content = new SectionOperator(toResource.content).addSection(newFileContent)
      }
    }
  }

  return toResource
}

const removeDupUtterances = function (resource) {
  let newResource = resource
  resource.Sections.forEach(s => {
    if (s.SectionType === LUSectionTypes.SIMPLEINTENTSECTION) {
      const intentUtterances = s.UtteranceAndEntitiesMap.map(u => u.utterance)
      const dedupedUtterances = Array.from(new Set(intentUtterances))
      if (intentUtterances.length > dedupedUtterances.length) {
        const intentContent = dedupedUtterances.join(NEWLINE + '- ')
        const newSectionContent = `# ${s.Name}${NEWLINE}- ${intentContent}`
        newResource = new SectionOperator(newResource).updateSection(s.Id, newSectionContent)
      }
    }
  })

  return newResource
}

const extractIntentUtterances = function(resource, intentName) {
  const intentSections = resource.Sections.filter(s => s.SectionType === LUSectionTypes.SIMPLEINTENTSECTION || s.SectionType === LUSectionTypes.NESTEDINTENTSECTION)

  let intentUtterances = []
  if (intentName && intentName !== '') {
    const specificSections = intentSections.filter(s => s.Name === intentName)
    if (specificSections.length > 0) {
      intentUtterances = intentUtterances.concat(specificSections[0].UtteranceAndEntitiesMap.map(u => u.utterance))
    }
  } else {
    intentSections.forEach(s => {
      if (s.SectionType === LUSectionTypes.SIMPLEINTENTSECTION) {
        intentUtterances = intentUtterances.concat(s.UtteranceAndEntitiesMap.map(u => u.utterance))
      } else {
        s.SimpleIntentSections.forEach(section => {
          intentUtterances = intentUtterances.concat(section.UtteranceAndEntitiesMap.map(u => u.utterance))
        })
      }
  })}

  return intentUtterances
}

/**
 * do qna cross training with lu files
 * @param {Map<string, LUResource>} qnaFileIdToResourceMap map of qna file id and resource
 * @param {Map<string, LUResource>} luFileIdToResourceMap map of lu file id and resource
 * @param {string} interruptionIntentName interruption intent name
 * @param {boolean} allLuEmpty indicate if all lu files are section empty
 * @throws {exception} throws errors
 */
const qnaCrossTrain = function (qnaFileIdToResourceMap, luFileIdToResourceMap, interruptionIntentName, allLuEmpty) {
  try {
    for (const qnaObjectId of Array.from(qnaFileIdToResourceMap.keys())) {
      let fileName = path.basename(qnaObjectId, path.extname(qnaObjectId))
      const culture = fileHelper.getQnACultureFromPath(qnaObjectId)
      fileName = culture ? fileName.substring(0, fileName.length - culture.length - 1) : fileName

      const luObjectId = Array.from(luFileIdToResourceMap.keys()).find(x => x.toLowerCase() === qnaObjectId.toLowerCase())
      if (luObjectId) {
        const { luResource, qnaResource } = qnaCrossTrainCore(luFileIdToResourceMap.get(luObjectId), qnaFileIdToResourceMap.get(qnaObjectId), fileName, interruptionIntentName, allLuEmpty)
        luFileIdToResourceMap.set(luObjectId, luResource)
        qnaFileIdToResourceMap.set(qnaObjectId, qnaResource)
      } else {
        let qnaResource = qnaAddMetaData(qnaFileIdToResourceMap.get(qnaObjectId), fileName)
        qnaFileIdToResourceMap.set(qnaObjectId, qnaResource)
      }
    }
  } catch (err) {
    throw (err)
  }
}

/**
 * qna cross training core function
 * @param {LUResource} luResource the lu resource
 * @param {LUResource} qnaResource the qna resource
 * @param {string} fileName file name
 * @param {string} interruptionIntentName interruption intent name
 * @param {boolean} allLuEmpty indicate if all lu files are section empty
 * @returns {luResource: LUResource, qnaResource: LUResource} cross trained lu resource and qna resource
 */
const qnaCrossTrainCore = function (luResource, qnaResource, fileName, interruptionIntentName, allLuEmpty) {
  let trainedLuResource = luResource
  let trainedQnaResource = qnaResource

  // extract questions
  const qnaSections = qnaResource.Sections.filter(s => s.SectionType === LUSectionTypes.QNASECTION)
  let questions = []
  qnaSections.forEach(q => questions = questions.concat(q.Questions))
  
  // remove dups of questions themselves
  questions = Array.from(new Set(questions))

  // extract lu utterances of all intents
  let utterances = extractIntentUtterances(luResource)
  utterances = Array.from(new Set(utterances))

  // extract lu utterances of interruption intent
  let utterancesOfInterruption = extractIntentUtterances(luResource, interruptionIntentName)

  // extract lu utterances except interruption
  let utterancesOfLocalIntents = utterances.filter(u => !utterancesOfInterruption.includes(u)).map(u => u.toLowerCase())

  // remove questions which are duplicated with local lu utterances
  let dedupedQuestions = questions.filter(q => !utterancesOfLocalIntents.includes(q.toLowerCase()))

  // update interruption intent if there are duplications with questions
  let dedupedQuestionsOfLowerCase = dedupedQuestions.map(u => u.toLowerCase())
  if (utterancesOfInterruption.some(u => dedupedQuestionsOfLowerCase.includes(u.toLowerCase()))) {
    utterancesOfInterruption = utterancesOfInterruption.filter(u => !dedupedQuestionsOfLowerCase.includes(u.toLowerCase()))

    // get section id
    const sectionId = trainedLuResource.Sections.filter(s => s.Name === interruptionIntentName)[0].Id

    // construct updated interruption intent content
    utterancesOfInterruption = utterancesOfInterruption.map(u => '- '.concat(u))
    let updatedSectionContent = utterancesOfInterruption.join(NEWLINE)
    if (updatedSectionContent && updatedSectionContent !== '') {
      trainedLuResource = new SectionOperator(trainedLuResource).updateSection(sectionId, `# ${interruptionIntentName}${NEWLINE}${updatedSectionContent}`)
    }
  }

  // construct questions content
  dedupedQuestions = dedupedQuestions.map(q => '- '.concat(q)).filter(i => !patternWithPrebuiltEntity(i) && !questionWithBrackets(i))
  let questionsContent = dedupedQuestions.join(NEWLINE)

  // cross training comments
  const crossTrainingComments = '> Source: cross training. Please do not edit these directly!'

  // add questions from qna file to corresponding lu file with intent named DeferToRecognizer_QnA_${fileName}
  if (!allLuEmpty && questionsContent && questionsContent !== '') {
    const questionsToUtterances = `${NEWLINE}${crossTrainingComments}${NEWLINE}# DeferToRecognizer_QnA_${fileName}${NEWLINE}${questionsContent}`
    trainedLuResource = new SectionOperator(trainedLuResource).addSection(questionsToUtterances)
  }

  // update qna filters
  trainedQnaResource = qnaAddMetaData(qnaResource, fileName)

  // remove utterances with curly brackets
  const utterancesWithoutPatterns = utterances.filter(i => /{([^}]+)}/g.exec(i) === null)

  // remove utterances which are duplicated with local qna questions
  let questionsOfLowerCase = questions.map(q => q.toLowerCase())
  let dedupedUtterances = utterancesWithoutPatterns.filter(u => !questionsOfLowerCase.includes(u.toLowerCase()))

  // add utterances from lu file to corresponding qna file with question set to all utterances
  // split large QA pair to multiple smaller ones to overcome the limit that the maximum number of questions per answer is 300
  while (dedupedUtterances.length > 0) {
    let subDedupedUtterances = dedupedUtterances.splice(0, MAX_QUESTIONS_PER_ANSWER)
    // construct new question content for qna resource
    let utterancesContent = subDedupedUtterances.join(NEWLINE + '- ')
    let utterancesToQuestion = `${NEWLINE}${crossTrainingComments}${NEWLINE}> !# @qna.pair.source = crosstrained${NEWLINE}${NEWLINE}# ? ${utterancesContent}${NEWLINE}${NEWLINE}**Filters:**${NEWLINE}- dialogName=${fileName}${NEWLINE}${NEWLINE}\`\`\`${NEWLINE}intent=DeferToRecognizer_LUIS_${fileName}${NEWLINE}\`\`\``
    trainedQnaResource = new SectionOperator(trainedQnaResource).addSection(utterancesToQuestion)
  }

  return { luResource: trainedLuResource, qnaResource: trainedQnaResource }
}

const qnaAddMetaData = function (qnaResource, fileName) {
  let resultQnaResource = qnaResource
  // extract qna sections
  const qnaSections = qnaResource.Sections.filter(s => s.SectionType === LUSectionTypes.QNASECTION)

  // update qna filters
  let qnaSectionContents = []
  for (const qnaSection of qnaSections) {
    qnaSection.FilterPairs.push({ key: 'dialogName', value: fileName })
    let qnaSectionContent = ''
    if (qnaSection.source !== QNA_GENERIC_SOURCE) {
      qnaSectionContent += `> !# @qna.pair.source = ${qnaSection.source}${NEWLINE}${NEWLINE}`
    }

    if (qnaSection.QAPairId) {
      qnaSectionContent += `<a id = "${qnaSection.QAPairId}"></a>${NEWLINE}${NEWLINE}`
    }

    qnaSectionContent += `# ? ${Array.from(new Set(qnaSection.Questions)).join(NEWLINE + '- ')}${NEWLINE}${NEWLINE}**Filters:**${NEWLINE}- ${qnaSection.FilterPairs.map(f => f.key + '=' + f.value).join(NEWLINE + '- ')}${NEWLINE}${NEWLINE}\`\`\`${NEWLINE}${qnaSection.Answer}${NEWLINE}\`\`\``
    
    if (qnaSection.promptsText && qnaSection.promptsText.length > 0) {
      qnaSectionContent += `${NEWLINE}${NEWLINE}**Prompts:**${NEWLINE}- ${qnaSection.promptsText.join(NEWLINE + '- ')}`
    }

    qnaSectionContents.push(qnaSectionContent)
  }

  let qnaContents = qnaSectionContents.join(NEWLINE + NEWLINE)
  if (qnaContents && qnaContents !== '') {
    const modelInfoSections = qnaResource.Sections.filter(s => s.SectionType === LUSectionTypes.MODELINFOSECTION)
    const modelInforContent = modelInfoSections.map(m => m.ModelInfo).join(NEWLINE)
    if (modelInforContent && modelInforContent !== '') qnaContents = NEWLINE + qnaContents

    resultQnaResource = new SectionOperator(new LUResource([], modelInforContent, [])).addSection(qnaContents)
  }

  return resultQnaResource
}

/**
 * Parse and validate lu or qna object array to convert to LUResource object dict
 * @param {luObject[]} objectArray the lu or qna object list to be parsed
 * @param {boolean} verbose indicate to enable log messages or not
 * @param {any} importResolver import Resolver when resolving import files
 * @param {any} fileExt file extension to indicate the file is .lu or .qna format 
 * @returns {Map<string, LUResource>} map of file id and luResource
 * @throws {exception} throws errors
 */
const parseAndValidateContent = async function (objectArray, verbose, importResolver, fileExt) {
  let fileIdToResourceMap = new Map()
  let allEmpty = true
  for (const object of objectArray) {    
    let fileContent = object.content
    let objectId = object.id
    if (object.content && object.content !== '') {
      if (fileExt === fileExtEnum.LUFile) {
        if (!object.id.endsWith(fileExtEnum.LUFile)) object.id += fileExtEnum.LUFile
        let result = await LuisBuilderVerbose.build([object], verbose, undefined, importResolver)
        let luisObj = new Luis(result)
        fileContent = luisObj.parseToLuContent()
      } else {
        if (!object.id.endsWith(fileExtEnum.QnAFile)) object.id += fileExtEnum.QnAFile
        let result = await qnaBuilderVerbose.build([object], verbose, importResolver)
        fileContent = result.parseToQnAContent()
      }
    }

    let resource = luParser.parse(fileContent)

    if (resource.Sections.filter(s => s.SectionType !== LUSectionTypes.MODELINFOSECTION).length > 0) allEmpty = false

    if (resource.Errors && resource.Errors.length > 0) {
      if (verbose) {
        var warns = resource.Errors.filter(error => (error && error.Severity && error.Severity === DiagnosticSeverity.WARN))
        if (warns.length > 0) {
          process.stdout.write(warns.map(warn => warn.toString()).join(NEWLINE).concat(NEWLINE))
        }
      }

      var errors = resource.Errors.filter(error => (error && error.Severity && error.Severity === DiagnosticSeverity.ERROR))
      if (errors.length > 0) {
        throw (new exception(retCode.errorCode.INVALID_INPUT_FILE, `Invlid file ${object.Id}: ${errors.map(error => error.toString()).join(NEWLINE)}`))
      }
    }

    fileIdToResourceMap.set(objectId, resource)
  }

  return {fileIdToResourceMap, allEmpty}
}

const pretreatment = function (luContents, qnaContents) {
   // Parse lu and qna objects
   let luObjectArray = fileHelper.getParsedObjects(luContents, fileExtEnum.LUFile)
   let qnaObjectArray = fileHelper.getParsedObjects(qnaContents, fileExtEnum.QnAFile)

   return {luObjectArray, qnaObjectArray}
}

const patternWithPrebuiltEntity = function (utterance) {
  let patternAnyEntity
  let matchedEntity = /{([^}]+)}/g.exec(utterance)

  if (matchedEntity !== null) {
    patternAnyEntity = matchedEntity[1].trim()

    if (patternAnyEntity && patternAnyEntity.startsWith('@')) {
      patternAnyEntity = patternAnyEntity.slice(1).trim()
    }

    let patternAnyEntityWithRole = patternAnyEntity.split(':')
    if (patternAnyEntityWithRole.length > 1) {
      patternAnyEntity = patternAnyEntityWithRole[0].trim()
    }

    if (prebuiltEntityTypes.includes(patternAnyEntity)) {
      return true
    }
  }

  return false
}

const questionWithBrackets = function (question) {
  let matched = /\([^\)]*\)/g.exec(question)

  return matched !== null
}