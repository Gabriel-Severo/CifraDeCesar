import React from 'react'
import './Inicio.css'
export default function Inicio(){
    return (
        <div className="container">
            <form>
                <textarea type="text" rows="10" cols="30" name="texto"/>
                <div className="acoes">
                    <input type="submit" value="Cifrar"/>
                    <input type="number" name="key" placeholder="KEY" autocomplete="off"/>
                    <input type="submit" value="Decifrar"/>
                </div>
                <textarea type="text" rows="10" cols="30" name="resultado"/>
            </form>
        </div>
    )
}