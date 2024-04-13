import React, { useState } from 'react'
// import { useTodo } from '../context/TodoContext';

function TodoForm({addTodo}) {
    const [todo,setTodo] = useState("");
    // const {addTodo} = useTodo();

    const add = (e)=>{
        e.preventDefault();

        if(!todo) return  

        addTodo({todo:todo,completed: false})
        setTodo("")
        //id:1,todo: hello ky hak, completed : false
    }
  return (
    <div>

   <form onSubmit={add}>
    <input type="text" placeholder='Enter todo list' value={todo} onChange={(e)=> setTodo(e.target.value)} />
    <button className='primary'>Add</button>
   </form>


    </div>
  )
}

export default TodoForm