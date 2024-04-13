import React, { useState } from 'react'
import './todo.css'
import { useTodo } from '../context/Todocontext'
function Todoform() {
  const {addTodo} = useTodo()
  const [todo,setTodo] = useState("");
  const add = (e)=>{
    e.preventDefault();

    if(todo !== ""){
      addTodo(todo);
      setTodo("")
    }else{
      alert("Please write something");
    }
  }
  return (
    <div className='formDiv'>
     <form onSubmit={add} >
        <input type="text" placeholder='Enter' value={todo} onChange={(e)=> setTodo(e.target.value)} />
        <button className='btn-primary'>Add</button>
     </form>
    </div>
  )
}

export default Todoform