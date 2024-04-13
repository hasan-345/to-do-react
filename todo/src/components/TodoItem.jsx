import React, { useState } from 'react'
import './todo.css'
// import { useTodo } from '../context/TodoContext'
function TodoItem({todo,updateTodo,deleteTodo,toggleCompleted}) {

//    const {updateTodo,deleteTodo,toggleCompleted} = useTodo()
  const [todoMsg,setTodoMsg] = useState(todo.todo)
   const [istodoeditable,setTodoEdit] = useState(false);

  //id:1 , todo: "hello",completed: false;

   const editTodo = ()=>{
    updateTodo(todo.id,{...todo,todo: todoMsg})
    setTodoEdit(false)
   }
   const toggleComplete = ()=>{
    toggleCompleted(todo.id)
   }
  return (
    <div>
        <div className={`container bg-${todo.completed? "green":"red"}`}>
            <div>
                <input type="checkbox" checked={todo.completed} onChange={toggleComplete} />
           <input type="text" readOnly={!istodoeditable} value={todoMsg} onChange={(e)=> setTodoMsg(e.target.value)} />
            </div>
            <div className="icons">
                <button onClick={()=>{
                    if(todo.completed);

                    if(istodoeditable){
                        editTodo();
                    }else{
                        setTodoEdit((prev)=> !prev)
                    }}} disabled={todo.completed} > {istodoeditable? "save":"edit"}  </button>
                <button 
                 onClick={()=> deleteTodo(todo.id) }
                  >delete</button>
            </div>
        </div>
    </div>
  )
}

export default TodoItem