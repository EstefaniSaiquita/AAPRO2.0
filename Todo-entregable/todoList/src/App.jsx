import './App.css'
import { AddTodo } from './components/AddTodo'
import { useState } from 'react'
import { TodoList } from './components/TodoList'

function App() {

 const [tasks,setTasks]= useState(
  [
    { id: 1, text: "ESTUDIAR MAS REACT", completed: false },
    { id: 2, text: "Hacer una To-Do List", completed: true},
    { id: 3, text: "ESTUDIAR MAS REACT!!!", completed: false },
  ]
 )


  const deleteTask = (idElegido) => {
    setTasks(tasks.filter(task => task.id !==
      idElegido))
  }
    //el toggle es como un swich
  const toggleCompletado = (idElegido) =>{
    setTasks(tasks.map(task =>
      task.id === idElegido
      ? {... task, completed: !task.completed} : task
    ))
  }

  const addTask = (text ) =>{
    const newTask = {
      id: Date.now(),
      text: text,
      completado: false
    }

  setTasks([...tasks, newTask])
  }


  return (
    <>
      <h1 style={{ textAlign: "center" }}>TO-DO List</h1>
      <AddTodo onAdd={addTask}/>
      <TodoList
      tasks={tasks}
      onDelete={deleteTask}
      onCompleted={toggleCompletado}
      />

    </>
  )
}

export default App