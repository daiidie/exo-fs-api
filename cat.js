const fs = require('fs')
const filename = process.argv[2]

if (process.argv.length !== 3) {
  console.log(`use a valid input`)
  process.exit(1)
}

else if (!fs.existsSync(filename)) {
  console.log('This file does not exists.')
  process.exit(1)

} else {
 
  console.log(fs.readFileSync(`${process.argv[2]}`, "utf8"));
  }; 

    

