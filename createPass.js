const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = '!@#$%^&*-_+-='


const createPass = (length = '10', hasNum = true, hasSym = true) => {
    let characters = letters
    hasNum ? (characters += numbers) : ''
    hasSym ? (characters += symbols) : ''

    return generate(length, characters)  
}

const generate = (length, characters) => {
    let password = ''
    for(let i = 0; i < length; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return password
}



module.exports = createPass