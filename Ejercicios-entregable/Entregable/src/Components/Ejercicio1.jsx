import React, { useState } from 'react'

export const ColorAleatorio = () => {

    const [color, setColor] = useState("none")
    const colores = ["green", "red", "blue"]

    function CambiarColor() {
        const random = Math.floor(Math.random() * colores.length);
        setColor(colores[random]);
    }


  return (
    <div>
    <h2 style={{backgroundColor:color}}>Ejercicio1</h2>
    <button onClick={CambiarColor} >Cambio</button>
    </div>
  )
}
