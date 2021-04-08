import {expect, test} from '@oclif/test'
const fs = require('fs-extra')
const path = require('path') 
const NEWLINE = require('os').EOL

const compareLuFiles = async function(file1: string, file2: string) {
  let result = await fs.readFile(path.join(__dirname, file1))
  let fixtureFile = await fs.readFile(path.join(__dirname, file2))
  result = result.toString().replace(/\r\n/g, "\n")
  fixtureFile = fixtureFile.toString().replace(/\r\n/g, "\n")
  return result === fixtureFile
}

const parseJsonFiles = async function(file1: string, file2: string) {
  let result = await fs.readJson(path.join(__dirname, file1))
  let fixtureFile = await fs.readJson(path.join(__dirname, file2))
  result = sanitizeExampleJson(JSON.stringify(result))
  fixtureFile = sanitizeExampleJson(JSON.stringify(fixtureFile))
  return [JSON.parse(result), JSON.parse(fixtureFile)]
}

function sanitizeExampleJson(fileContent: string) {
  let escapedExampleNewLine = JSON.stringify('\r\n').replace(/"/g, '').replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  let escapedNewLine = JSON.stringify(NEWLINE).replace(/"/g, '');
  return fileContent.replace(new RegExp(escapedExampleNewLine, 'g'), escapedNewLine);
}

describe('qnamaker:merge', () => {

  before(async function(){
    await fs.mkdirp(path.join(__dirname, './results/'))
  })

  after(async function(){
    await fs.remove(path.join(__dirname, './../../../results/'))
  })

  test
  .stdout()
  .command(['qnamaker:merge', '--in', `${path.join(__dirname, './../../fixtures/testcases/merge/1')}`, '--out', './results/MergeCase1.json'])
  .it('qnamaker:merge successfully merges unsorted qnaids', async (ctx) => {
    expect(await compareLuFiles('./../../../results/MergeCase1.json', './../../fixtures/verified/merge/MergeCase1.exp')).to.be.true
  })

})