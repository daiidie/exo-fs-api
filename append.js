const fs = require('fs');
const chalk = require('chalk');

// check if command line is well
if (process.argv.length < 3) {
  console.log(chalk.red('Parametres insuffisant'));
  process.exit(1);
}

// if file is a file and if that exist
process.argv.slice(2, -1).forEach((el) => {
  //.slice 2, -1  argv array tranche de argv2 au dernier el
  if (!fs.existsSync(el)) {
    console.log(chalk.blue(`warning : ${el} n'existe pas.`));
    process.exit(1);
  }
  const stats = fs.statSync(el);
  if (!stats.isFile()) {
    console.log(chalk.blue(`warning : ${el} pas un fichier.`));
    process.exit(1);
  }
});

let contentFile = '';
//length -1 pour select le dernier
for (let i = 2; i < process.argv.length - 1; ++i) {
  contentFile += fs.readFileSync(process.argv[i], 'utf-8') + '\n';
}
const last = process.argv[process.argv.length - 1];
fs.writeFileSync(last, contentFile);