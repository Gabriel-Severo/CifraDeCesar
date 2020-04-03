function handleCifrar(msg, key){
    let cifrado = ''
    for (letter of msg){
        let letterAscii = letter.charCodeAt(0)
        if (letterAscii >= 97 && letterAscii <= 122){
            letterAscii += parseInt(key)
            if (letterAscii > 122){
                console.log(letterAscii)
                letterAscii = 96 + (letterAscii - 122)
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
        return res.json({'response':response})
    }
}