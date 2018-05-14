const csv = require('csvtojson')
const fs = require('fs')

let csvFile

if (process.argv[2]) {
  csvFile = process.argv[2]
} else {
  console.log('I need a csv file as an argument :(')
  process.exit(9)
}

let ecsaTeam = []
let advisors = []
csv()
  .fromFile(csvFile)
  .on('json', jsonObj => {
    if (jsonObj.mainCategory === 'ECSA network') {
      ecsaTeam.push(jsonObj)
    } else if (jsonObj.mainCategory === 'Advisors') {
        let relevantObjectIndex = search(jsonObj.subCategory, 'advisorType', advisors)
        console.log(relevantObjectIndex)
        if (!Number.isInteger(relevantObjectIndex)) {
          const newAdvisorType = {
            'advisorType': jsonObj.subCategory,
            'advisors': [jsonObj]
          }
          advisors.push(newAdvisorType)
        } else {
          advisors[relevantObjectIndex].advisors.push(jsonObj)
        }
    }
  })
  .on('done', err => {
    if (err) throw err;
    const finalObject = {
      'ecsaTeam': ecsaTeam,
      'advisors': advisors
    }
    console.log(advisors)
    console.log(`I found ${ecsaTeam.length} ECSA team members and ${advisors.length} Advisor categories`)
    const stringJson = JSON.stringify(finalObject)
    fs.writeFile('../src/assets/team.json', stringJson, 'utf8', err => {
      if (err) throw err;
      console.log('and I saved a json file in \'../src/assets/team.json\'')
      process.exit()
    })
  })

  function search(nameKey, prop, array){
    let searchResult = false
    for (var i=0; i < array.length; i++) {
        if (array[i][prop]=== nameKey) {
            searchResult = i
        } else {
          searchResult = false
        }
    }
    return searchResult
}