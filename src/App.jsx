import { useEffect, useState } from 'react'
import "./styles.css"
import { Todoform } from './Todoform'
import { Todolist } from './Todolist'

export default function App() {
  const [todos , setTodos] = useState(()=>{
    const local = localStorage.getItem("Items")
    if(local == null) return []

    return JSON.parse(local)
  })

  useEffect(()=>{
    localStorage.setItem("Items", JSON.stringify(todos))
  },[todos])

  function addTodo(title){
    setTodos((todos)=>{
      return [...todos , {
          id : crypto.randomUUID(),
          title,
          completed : false
      }]
    })
  }

  function handleCheck(id,checked){
    setTodos((todos)=>{
      return todos.map((currentTodo => {
        if(currentTodo.id==id){
          return {...currentTodo, completed: checked}
        }
        return currentTodo
      }))
    })
  }

  function deleteTodo(id){
    setTodos((todos)=>{
      return todos.filter(todo => todo.id!==id)
    })
  }

  return(
    <>
      <Todoform addTodo={addTodo} />
      <h1>To do list</h1>
      <Todolist todos={todos} handleCheck={handleCheck} deleteTodo={deleteTodo}/>
    </>
  )  
}

