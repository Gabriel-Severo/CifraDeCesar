function handleDecifrar(msg, key){
    let decifrado = ''
    for (letter of msg){
        let letterAscii = letter.charCodeAt(0)
        if (letterAscii >= 97 && letterAscii <= 122){
            letterAscii -= key
            if (letterAscii < 97){
                letterAscii = 122 - (96 - letterAscii)
                decifrado += String.charCodeAt(letterAscii)
            }else{
                decifrado += String.fromCharCode(letterAscii)
            }
        }else{
            decifrado += letter
        }
    }
    return decifrado
}
module.exports = {
    async index(req, res){
        const {message, key} = req.body
        const response = handleDecifrar(message, key)
        return res.json({'response':response})
    }
}