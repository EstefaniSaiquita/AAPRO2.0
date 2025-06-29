//Crea un componente con un select que camibe el color del fondo al elegir una opcion
import React, { useState } from 'react'

export const ColorPreferido = () => {

    const [color, setColor] = useState ("#FFFFFF")

    const HandleSelect = (event) => setColor(event.target.value)
    
                                            
return (
    <div style ={{background: color}} >
        <select onChange={HandleSelect}>
            <option value="#74ACDF">celeste</option>
            <option value="#FFFFFF">blanco</option>
            <option value="#FF0000">rojo</option>
            <option value="#28A745">verde</option>
        </select>
    </div>
    )
}


