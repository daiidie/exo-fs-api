const tab = [process.argv[2], process.argv[3], process.argv[4]]

if (process.argv.length !== 5) {
  console.log(`use only 3 words`)
  process.exit(1)
}
else {
tab.forEach((elem) => {
  process.stdout.write
  (elem + " ")
})
}
