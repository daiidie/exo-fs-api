const fs = require('fs')

// check if command line is well 
if (process.argv.length !== 4) {
  console.log('error')
  process.exit(1)
}

// check if the path exist
if (!fs.existsSync(process.argv[2])) {
  console.log(`Désoler ${process.argv[2]} n\'existe pas`)
  process.exit(1)
}

//check if the value is a file or a directory (you choose)
const stats = fs.statSync(process.argv[2])

if (!stats.isFile(process.argv[2])) {
  console.log(`${process.argv[2]} n\'est pas un fichier`)
  process.exit(1)
}

else {
  fs.copyFileSync(process.argv[2], process.argv[3])
}

fs.readdirSync(__dirname).forEach(file => {
  console.log(file);
});