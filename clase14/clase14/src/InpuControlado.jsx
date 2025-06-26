import { useState } from "react"

export const InputControlado = () => {
    const [texto, setTexto] =useState ("")

    function handleText (e){
        setTexto(e.target.value)
    }
    return(
        <div>
            <input onChange={handleText} type="text" />
            <p>{texto} </p>
        </div>
    )
}