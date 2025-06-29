//Crea un boton que cuente cuantas veces fue presionado y muestre el conteo en pantalla
import React, { useState } from 'react'

export const  Contador = () => {
    const [contador, setContador] = useState(0)
    
    const contar = () => {
        setContador(contador + 1)
    } 

    const resetContador = () => {
        setContador(0)
    }

    const restarContador = () => {
        setContador(contador - 1)
    }

  return (
    <div>
        <p>Clicks: {contador}</p>
        <button onClick={contar}>Contar Click</button>
        <button onClick={restarContador}>Restar</button>
        <button onClick={resetContador}>Resetear</button>
    </div>
  )
}
