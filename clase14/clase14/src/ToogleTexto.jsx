import { useState } from "react"

export const ToogleTexto = () => {
    const [visible, setVisible] = useState(true)

    const handleVisible = () => {
        setVisible(!visible) //o(invisible)
    }

    return (
        <>
        <button onClick={handleVisible}> {visible ? "ocultar" : "mostrar"} </button>
        {visible ? <h2>texto</h2> : null }
        {visible && <h2>texto</h2> }

        </>
    )
}