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
let advisorCategories = []
csv()
  .fromFile(csvFile)
  .on('json', jsonObj => {
    if (jsonObj.mainCategory === 'ECSA network') {
      ecsaTeam.push(jsonObj)
    } else if (jsonObj.mainCategory === 'Advisors') {
      advisors.push(jsonObj)
      if (!advisorCategories.includes(jsonObj.subCategory)) {
        advisorCategories.push(jsonObj.subCategory)
      }
    }
  })
  .on('done', err => {
    if (err) throw err;
    const finalObject = {
      'ecsaTeam': ecsaTeam,
      'advisors': advisors,
      'categories': advisorCategories
    }
    console.log(`I found ${ecsaTeam.length} ECSA team members and ${advisors.length} Advisors in ${advisorCategories.length} sub categories`)
    const stringJson = JSON.stringify(finalObject)
    fs.writeFile('../src/assets/team.json', stringJson, 'utf8', err => {
      if (err) throw err;
      console.log('and I saved a json file in \'../src/assets/team.json\'')
      process.exit()
    })
  })
