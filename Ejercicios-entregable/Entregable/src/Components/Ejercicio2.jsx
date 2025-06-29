import React, { useState } from 'react'

export const BotonDinamico = () => {

const [mensaje, setMensaje] = useState(" ")
const mensajes = ["boca", "river", "central", "talleres"]

function MensajeAleatorio() {
    const random = Math.floor(Math.random() * mensajes.length);
    setMensaje(mensajes[random]);
    console.log("mensaje generado:", mensaje[random]);
    
}
    return(
        <div>
            <p>El mejor equipo es... {mensaje}</p>
        <button onClick={MensajeAleatorio}>cambiar</button>
        </div>
    )
}
