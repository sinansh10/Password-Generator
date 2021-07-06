#!/usr/bin/env node
const program = require('commander')
const chalk = require('chalk')
const clip = require('clipboardy')
const createPass = require('./createPass')
const savePass = require('./savePass')

program.version('1.0.0').description('A Basic CLI Password Generator')

program
    .option('-l, --length <numeric>', 'Required length of the password', '10')
    .option('-s, --save', 'Save the passwords to a txt file')
    .option('-!s, --no-symbols', 'Generate a password without special symbols')
    .option('-!n, --no-numbers', 'Generate a password without numbers')
    .parse()


const {length, save, numbers, symbols} = program.opts()

//Generate
const genPass = createPass(length, numbers, symbols)

//Save
if(save) {
    savePass(genPass)
}

//Copy
clip.writeSync(genPass)

//Log
console.log(chalk.blue('The Generated Password is : ') + chalk.greenBright(genPass))
