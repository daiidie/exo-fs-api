const fs = require('fs')
const tab = [process.argv[2], process.argv[3], process.argv[4]]


if (process.argv.length !== 5) {
  console.log("hun hun")
  process.exit(1)
}
for (const elem of tab) {
  if (!fs.existsSync(elem)) {
  console.log(`Désoler ${elem} n\'existe pas`)
  process.exit(1)
}

}

tab.forEach((elem) => {
      console.log(fs.readFileSync(elem, "utf8"))
    })
    