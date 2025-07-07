import { TodoItem } from "./TodoItem";

export const TodoList = ({tasks, onDelete, onCompleted}) => {
  return (
    <div>
        <ul>
            {tasks.map(task => (
                <TodoItem key={task.id} task={task} onDelete={onDelete}
                onCompleted={onCompleted}/>
            ))}
        </ul>
    </div>
  )
}