const fs = require('fs')
const os = require('os')
const path = require('path')
const chalk = require('chalk')
 
const savePass = (password) => {
    fs.open(path.join(__dirname, './', 'generatedPasswords.txt'), 'a', 666, (e, id) =>{
        fs.write(id, password + os.EOL, null, 'utf-8', () =>{
            fs.close(id, () => {
                console.log(chalk.yellowBright('The generated passwordd has been saved in the specified file'))
            })
        })
    })
}

module.exports = savePass