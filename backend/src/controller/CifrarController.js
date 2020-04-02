function handleCifrar(msg, key){
    let cifrado = ''
    for (letter of msg){
        let letterAscii = letter.charCodeAt(0)
        if (letterAscii >= 97 && letterAscii <= 122){
            letterAscii += key
            if (letterAscii > 122){
                letterAscii = 96 + (122 - letterAscii)
                cifrado += String.fromCharCode(letterAscii)
            }else{
                cifrado += String.fromCharCode(letterAscii)
            }
        }else{
            cifrado += letter
        }
    }
    return cifrado
}

module.exports = {
    async index(req, res){
        const {message, key} = req.body
        const response = handleCifrar(message, key)
        res.json({'response': response})
    }
}