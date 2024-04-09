import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // useState gives a variable and function in the form of array
let [counter,shashanksetCounter]= useState(10)

// let counter=10;  
 
 const AddValue= ()=>{
  counter=counter+1;
  if(counter<=20){
  shashanksetCounter(counter)
  }
  console.log("value added",counter);

 }
// function AddValue(){
//   console.log("value added",Math.random()*1000);
// }
const RemoveValue=()=>{
  if(counter>0){
 shashanksetCounter(counter-1)
  }
}
  
  return (
    <>
     <h1>chai aur React</h1>
     <h2>Counter value:{counter}</h2>
     <button onClick={AddValue}>Add value</button>
     <br />
     <button onClick={RemoveValue}>Remove value</button>
     <p>fotter:{counter}</p>
     
     
    </>
  )
}

export default App
