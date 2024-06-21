import { createSlice,nanoid } from "@reduxjs/toolkit";

// nanoid generates unique ids

const initialState= {
    todos:[{id:1,text:"hello world"}]
}

export const todoSlice= createSlice({
    name:'todo', // name is from redux side
    initialState,
    reducers:{
        addTodo:(state,action)=>{
          const todo={
            id:nanoid(),
            text:action.payload
          }
          state.todos.push(todo)
        }, // remove ke liye jo id di hai usse match mat karo
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>
            todo.id!==action.payload)
        }
    },// reducers stores props and func
})
//whenever we write addTodo function we will get two things
// one is state and other is action.
// state gives info about my current state while action provides me an id to do further processing



export const {addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer







