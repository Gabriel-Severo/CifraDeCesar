function handleDecifrar(msg, key){
    let cifrado = ''
    for (letter of msg){
        let letterAscii = letter.charCodeAt(0)
        if (letterAscii >= 97 && letterAscii <= 122){
            letterAscii -= key
            if (letterAscii < 97){
                letterAscii = 122 - (96 - letterAscii)
                cifrado += String.charCodeAt(letterAscii)
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
        const response = handleDecifrar(message, key)
        return res.json({'response':response})
    }
}