import { useState } from "react"

export const AddTodo = ({onAdd}) => {

    const [text, setText] = useState("")
    const handleSubmit = (event) =>{
        event.preventDefault()
        if(text){
            onAdd(text)
            setText("")
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={text}
            onChange={(event)=>setText(event.target.value)} 
            placeholder="Nueva tarea..."
            />
        <button type="submit">Agregar</button>

        </form>
        </>
    )
}