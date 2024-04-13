import { useEffect, useState } from 'react'
import './App.css'
import Todoform from './components/Todoform'
import TodoItems from './components/TodoItems'
import { TodoContext, TodoProvider } from './context/Todocontext'

function App() {
   
   const [todos,setTodos] = useState([]);//it is array in which we will store all objects of individual todo items
  
  //these all functions
   const addTodo= (todo)=>{ // we add id to make each item unique and todo is value and complete means checked or not
      setTodos((prev)=> [{id:Date.now(),todo:todo,complete: false},...prev]) //it is called when we click add button
   } // it means we have acces of previous value we will use previous value and further add new objects
  const updateTodo = (id,todo)=>{ // where todo means that value which is used to update value ok please don't understand value of original
    setTodos((prev)=> prev.map((prevTo)=> prevTo.id === id? todo:prevTo ))
  }
  const deleteTodo = (id)=>{  //it means that filter gets those value which does not match with given id and make new object
   setTodos((prev)=> prev.filter((prevTodo)=> prevTodo.id !== id))
  }
  const toggleComplete = (id)=>{
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id? {...prevTodo,complete: !prevTodo.complete}: prevTodo) )
  }
  
  useEffect(()=>{  //JSON.parse means to convert string to js objects
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length > 0){
      setTodos(todos);
    }
  },[])

  useEffect(()=>{ //JSON.parse means to convert js objects to string 
   localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
 // i hope you understood if you are not understand then you don't worry if you see code again and again then you finally understand whole code
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
