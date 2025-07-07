export const TodoItem = ({ task, onDelete, onCompleted }) => {
    const styleCompleted = {textDecoration: task.completed ? "line-through" : "none"}
 
    return (
        <div>
            <li style={styleCompleted}>
                {task.completed ? "✅" : ""} {task.text}
                <button onClick={()=> onCompleted(task.id)}>
                    {task.completed ? "desmarcar" : "completar"}
                </button>
                <button onClick={()=> onDelete(task.id)}>Eliminar</button>

            </li>
        </div>
        )
}