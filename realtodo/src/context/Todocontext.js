import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos:[ // this is object in which we store all info about todo items
        {
            id: 1,
            todo: "Hello every body",
            complete: false
        }
    ], //this is context api in which we set all values of to do list
    addTodo: (todo)=>{}, // it is addtodo function which is used to add todo items where parameters todo means value of input
    updateTodo: (id,todo)=>{},
    toggleComplete : (id)=>{},
    deleteTodo: (id)=>{}
})

export const useTodo = ()=>{
    return useContext(TodoContext);
}
export const TodoProvider = TodoContext.Provider
