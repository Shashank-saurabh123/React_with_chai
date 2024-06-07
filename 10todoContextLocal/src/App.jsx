import { useState,useEffect } from 'react'
import './App.css'
import { Todoprovider } from './contexts'
import TodoForm from './components/Todoform'
import TodoItem from './components/Todoitem'

function App() {
  
const [todos,setTodos]=useState([]) // todos is array which cosists of objects inside it
const addTodo = (todo) => {
  setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
}
  // each todo is object in itself
  // const updateTodo=(id,todo)=>{
  //   setTodos((oldTodo)=>oldTodo.map((prevpresenttodo)=>
  //     (prevpresenttodo.id===id ? todo:prevpresenttodo)))
  // }
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))
  }

const deleteTodo=(id)=>{
 setTodos((prev)=>prev.filter((todo)=>todo.id!=id))
}
 
const toggleComplete=(id)=>{
 setTodos((prev)=>prev.map((prevTodo)=>
  prevTodo.id===id?{...prevTodo,
    completed:!prevTodo.completed}:prevTodo))
}

// localstorage ki kahani

// taking values from localstorage
 useEffect(()=>{
  const todos= JSON.parse(localStorage.getItem("todos"))
  
  if(todos && todos.length>0)
    {
      setTodos(todos)
    }
 },[])

// now we have to store in todos in our localstorage as well

useEffect(()=>{
 localStorage.setItem("todos",JSON.stringify(todos))
},[todos])


return (
  <Todoprovider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
              <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                  <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                  <div className="mb-4">
                      {/* Todo form goes here */} 
                      <TodoForm />
                  </div>
                  <div className="flex flex-wrap gap-y-3">
                      {/*Loop and Add TodoItem here */}
                      {todos.map((todo) => (
                        <div key={todo.id}
                        className='w-full'
                        >
                          <TodoItem todo={todo} />
                        </div>
                      ))}
                  </div>
              </div>
          </div>
  </Todoprovider>
)
}

export default App