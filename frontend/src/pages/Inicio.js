import React from 'react'

export default function Inicio(){
    return (
        <div className="container">
            <input type="text" name="texto"/>
            <input type="submit" value="Cifrar"/>
            <input type="text" name="key"/>
            <input type="submit" value="Decifrar"/>
            <input type="text" name="resultado"/>
        </div>
    )
}