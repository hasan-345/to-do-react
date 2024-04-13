import { useEffect, useState } from 'react'
import './App.css'
import Todoform from './components/Todoform'
import TodoItems from './components/TodoItems'
import { TodoContext, TodoProvider } from './context/Todocontext'

function App() {
   
   const [todos,setTodos] = useState([]);


   const addTodo= (todo)=>{
      setTodos((prev)=> [{id:Date.now(),todo:todo,complete: false},...prev])
   }
  const updateTodo = (id,todo)=>{
    setTodos((prev)=> prev.map((prevTo)=> prevTo.id === id? todo:prevTo ))
  }
  const deleteTodo = (id)=>{
   setTodos((prev)=> prev.filter((prevTodo)=> prevTodo.id !== id))
  }
  const toggleComplete = (id)=>{
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id? {...prevTodo,complete: !prevTodo.complete}: prevTodo) )
  }
  
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length > 0){
      setTodos(todos);
    }
  },[])

  useEffect(()=>{
   localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  return (
    <TodoProvider value={{addTodo,deleteTodo,toggleComplete,todos,updateTodo}}>
  <div className='container'>
       <h1 className='m-4'>Todo List</h1>
    <Todoform/>
    {todos.map((todo)=>(
      <div className='itemsCont' key={todo.id}>
        <TodoItems todo={todo} />
      </div>
    ))}
  </div>
  </TodoProvider>
  )
}

export default App
