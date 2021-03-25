const fs = require('fs')
const tab = [process.argv[2], process.argv[3], process.argv[4], process.argv[5]]


// check if command line is well 
if (process.argv.length !== 6) {
  console.log('naaah')
  process.exit(1)
}

for (const elem of tab) {
  if (!fs.existsSync(elem)) {
  console.log(`Désoler ${elem} n\'existe pas`)
  process.exit(1)
}

else {
  fs.appendFile(process.argv[5], process.argv[2], process.argv[3], process.argv[4], function (err) {
    if (err) throw err;
    console.log('Fichier mis à jour !');
 })
}
}
