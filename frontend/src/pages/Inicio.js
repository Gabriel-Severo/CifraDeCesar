import React, {useState} from 'react'
import './Inicio.css'
import api from '../services/api'
export default function Inicio(){
    const [message, setMessage] = useState('')
    const [key, setKey] = useState('')
    const [result, setResult] = useState('')
    async function handleDecifrar(){
        const response = await api.post('/decifrar', {
            message: message,
            key: key
        })
        setResult(response.data.response)
    }
    function handleCifrar(){
        console.log('Cifrar')
    }
    return (
        <div className="container">
            <form onSubmit={e => {e.preventDefault()}}>
                <textarea type="text" rows="10" cols="30" name="texto" value={message} onChange={e => {setMessage(e.target.value)}}/>
                <div className="acoes">
                    <input type="submit" value="Cifrar" onClick={handleCifrar}/>
                    <input type="number" name="key" placeholder="KEY" autoComplete="off" value={key} onChange={e => {setKey(e.target.value)}}/>
                    <input type="submit" value="Decifrar" onClick={handleDecifrar}/>
                </div>
                <textarea type="text" rows="10" cols="30" name="resultado" defaultValue={result}/>
            </form>
        </div>
    )
}