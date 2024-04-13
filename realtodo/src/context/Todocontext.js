import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todo: "Hello every body",
            complete: false
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id,todo)=>{},
    toggleComplete : (id)=>{},
    deleteTodo: (id)=>{}
})

export const useTodo = ()=>{
    return useContext(TodoContext);
}
export const TodoProvider = TodoContext.Provider