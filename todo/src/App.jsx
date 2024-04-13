import { useEffect, useState } from 'react'
import './App.css'
// import { TodoProvider } from './context/TodoContext'
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo)=>{
    setTodos((prev)=> [{id: Date.now() ,...todo},...prev])
  }
  const updateTodo = (id,todo)=>{
    setTodos((prev)=> prev.map((previd)=> previd.id === id? todo: previd) )
  }
  const deleteTodo = (id) => {
    setTodos((prev)=> prev.filter((prevTo)=> prevTo.id !== id))
  }
  const toggleCompleted = (id)=>{
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id? {...prevTodo, completed: !prevTodo.completed}: prevTodo ))
  }

  useEffect(()=>{
  const todos = JSON.parse( localStorage.getItem("todos"));
  if(todos && todos.length > 0){
    setTodos(todos)
  }
  },[])
  useEffect(()=>{
   localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
        <> 
   {/* //  <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleCompleted}}> */}
   <h1>To-do List</h1>
   <div>
    <h1>Todo Form</h1>
   <TodoForm addTodo={addTodo} />
   </div>
     
   {todos.map((todoe) => (
                          <div key={todoe.id}
                          className='w-full'
                          >
                            <TodoItem todo={todoe} updateTodo={updateTodo}  deleteTodo={deleteTodo} toggleCompleted={toggleCompleted} />
                          </div>
                        ))}
      {/* //  </TodoProvider> */}
         </>

  )
}

export default App
