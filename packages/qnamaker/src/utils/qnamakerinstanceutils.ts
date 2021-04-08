/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

export function sortQnA(qnaInstance: any) {
  qnaInstance.qnaList.forEach((pair: any) => {
    pair.questions.sort(sortComparers.compareFn)
  })
  qnaInstance.qnaList.sort(sortComparers.compareQn)
}

export function sortAlterations(alterationsInstance: any) {
  alterationsInstance.wordAlterations.forEach((word: any) => {
    word.alterations.sort(sortComparers.compareFn)
  })
  alterationsInstance.wordAlterations.sort(sortComparers.compareAltName)
}

export function sortQnAId(qnaInstance: any) {
  qnaInstance.qnaList.forEach((pair: any) => {
    pair.questions.sort(sortComparers.compareFn)
  })
  qnaInstance.qnaList.sort(sortComparers.compareId)
}

function mergeQuestions(questionList: any) {
    questionList.sort()
    let resultquestionList: string[] = []
    let index: any
    let currentQuestion = ''

    for(index in questionList) {
      if (currentQuestion != questionList[index]) {
        currentQuestion = questionList[index]
        resultquestionList.push(questionList[index])
      }
    }
    return resultquestionList
}

export function mergeQnA(qnaInstance: any) {
  // need a sorted list by qids and questions need to be sorted too
  sortQnAId(qnaInstance)
  // console.log(qnaInstance)
  let resultqnaList: any[] = []
  let index: any
  let currentId = -1
  let currentElement = -1

  for(index in qnaInstance.qnaList) {
    // console.log(index)
    if (currentId != qnaInstance.qnaList[index].id) {
      // new qid
      currentId = qnaInstance.qnaList[index].id
      currentElement = resultqnaList.push(qnaInstance.qnaList[index]) -1
    } else {
      // existing qid 
      // merge questions
      resultqnaList[currentElement].questions = 
        mergeQuestions(resultqnaList[currentElement].questions.concat(qnaInstance.qnaList[index].questions))
    }
  }
  // assign new qnaList to qnaInstance
  qnaInstance.qnaList = resultqnaList
  // console.log(qnaInstance)
}

const sortComparers = {
  compareAltName : (a: any, b: any) => {
    return compareString(a.alterations[0].toUpperCase(), b.alterations[0].toUpperCase())
  },    
  compareFn : (a: any, b: any) => {
    return compareString(a.toUpperCase(), b.toUpperCase())
  },    
  compareQn : (a: any, b: any) => {
    return compareString(a.questions[0].toUpperCase(), b.questions[0].toUpperCase())
  },
  compareId : (a: any, b: any) => {
    return compareString(a.id, b.id)
  },
}

function compareString (a: string, b: string) {
  if (a < b) {
    return -1
  }

  if (a > b) {
    return 1
  }

  return 0
}
