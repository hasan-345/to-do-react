import React, { useState } from 'react'
import './todo.css'
import { useTodo } from '../context/Todocontext'
function TodoItems({todo}) {
  const {toggleComplete,updateTodo,deleteTodo} = useTodo();
  const [isTodoEditable,setIstodoeditable] = useState(false);
  const [todoMsg,setTodoMsg] = useState(todo.todo) 
  const edit = ()=>{
    updateTodo(todo.id,{...todo,todo: todoMsg});
   setIstodoeditable(false)
  }
  const toggleCompleted = ()=>{
    toggleComplete(todo.id);
  }
  const [cla,setCla] = useState(false);
  return (
    <div className={`todoitems ${cla? "animations":""}`}>
      <div className='box'>
        <label className='check'>
        <input type="checkbox" checked={todo.complete} onChange={toggleCompleted} />
        <span className="checkmark"></span>
        </label>
        <input type="text" className={`${todo.complete? "underline":""}`} readOnly={!isTodoEditable} value={todoMsg} onChange={(e)=> setTodoMsg(e.target.value)} />
      </div>
      <div className='box'>
      <button type="button" class={`btn btn-${isTodoEditable?"primary":"secondary"}`} onClick={()=>{
        if(isTodoEditable){
          edit()
        }else{
          setIstodoeditable((prev)=> !prev);
        }
      }} disabled={todo.complete} >  {isTodoEditable? "save":"edit"} </button>
        <button type="button" className="btn btn-danger"
        onClick={()=>{
          setCla((prev)=> !prev)
         setTimeout(()=>{
          deleteTodo(todo.id)
         },300) 
        }}
        >Delete</button>
      </div>
    </div>
  )
}

export default TodoItems