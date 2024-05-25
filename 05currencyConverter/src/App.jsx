import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
 const [password,setPassword]= useState("")

//  useCallback takes function and all the dependecies that can affect
// that function by any chance,only for cashing purpose not similar to useeffect

//useref hook
// for using this useRef hook we need to make a variable

const passwoordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed)str+="0123456789"
    if(charAllowed)str+="!@#$%^&*-_+=[]{}~`"
  
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
     }
    setPassword(pass)
      
  }  ,[length,numberAllowed,charAllowed,setPassword]) // it is only for memoization purpose


const copyPasswordToClipboard=useCallback(()=>{
  passwoordRef.current?.select()  // to show the proper text that copied
 passwoordRef.current?.setSelectionRange(0,100) 
  window.navigator.clipboard.writeText(password)
},[password])


  // useEffect doesn't require any variable to store,
  //it asks a call back and a dependecy array on which it depend

  useEffect(()=>{passwordGenerator()},[length,
  numberAllowed,charAllowed,passwordGenerator])


  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
    <h1 className="text-white text-center my-3">Password Generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
       
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwoordRef}
            
        />
        <button
         onClick={copyPasswordToClipboard} // clipboard is a function
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >
          copy
      </button>
    </div>

    <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setlength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
        </div>

      <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            // event propagation using callback
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
    </div>
     </div>
      
   
  )
}

export default App
