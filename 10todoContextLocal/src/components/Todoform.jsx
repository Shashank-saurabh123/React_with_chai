import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoForm() {
    const [todo,setTodo]=useState("")
  const {addTodo}=useTodo() // we extracted addTodo from useTodo

  const add=(e)=>{
    e.preventDefault()

    if(!todo)return

   // addTodo({id:Date.now(),todo:todo,completed:false })
 // we can write it in another way
 addTodo({todo,completed:false }) // state and variable same ho to ek hi se kaam chal jayega, hence only one todo is needed

 setTodo("")
}



    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
               value={todo}// called as wiring
               onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;



