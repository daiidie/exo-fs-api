const fs = require('fs')

let nbLine = 10

//check command line
if (process.argv.length < 3 || process.argv.length > 5) {
    console.log('Usage : node tail.js file.txt\nOr : node tail.js -n file.txt\nOr : node tail.js -n NUMBER file.txt')
    process.exit(1)
}
//if the command have just 3 arguments :
if(process.argv.length === 3){

     //check if file exist
    if (!fs.existsSync(process.argv[2])) {
        console.log(`Sorry ${process.argv[2]} doesn't exist`)
        process.exit(1)
    }
    //check if the file is a file
    const stats = fs.statSync(process.argv[2])
    if (!stats.isFile(process.argv[2])) {
        console.log(`${process.argv[2]} is not a file`)
        process.exit(1)
    }
    const txt = fs.readFileSync(process.argv[2], 'utf-8') //read file
    const lastLines = txt.split('\n').slice(-nbLine).join('\n') // array of line with slice -10 with join
    console.log(lastLines) // result
}
//check 4 arguments
if(process.argv.length === 4){
    console.log('Usage : node tail.js -n NUMBER file.txt')
    process.exit(1)
}
//if the command have 5 arguments :

//check argument is valid
if(process.argv.length === 5){
    if(process.argv[2] !== '-n'){
        console.log('Usage : node tail.js -n NUMBER file.txt')
        process.exit(1)
    }
    if(process.argv[2] === '-n'){
        //check if file exist
        if (!fs.existsSync(process.argv[4])) {
        console.log(`Sorry ${process.argv[4]} doesn't exist`)
        process.exit(1)
    }
    //check if the number is a number
    if(!isNaN(process.argv[3])){
        console.log('Usage : node tail.js -n NUMBER file.txt')
        process.exit(1)
    }
    nbLine = Number(process.argv[3])
    //check if the file is a file
    const stats = fs.statSync(process.argv[4])
    if (!stats.isFile(process.argv[4])) {
        console.log(`${process.argv[4]} is not a file`)
        process.exit(1)
    }
    const txt = fs.readFileSync(process.argv[4], 'utf-8') //read file
    const lastLines2 = txt.split('\n').slice(-nbLine).join('\n') // array of line with slice -10
    console.log(lastLines2)
    }
}