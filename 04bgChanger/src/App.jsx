import { useState } from "react"


function App() {
  const [color,setcolor]=useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
<div className="fixed  flex flex-wrap 
justify-center bottom-12 inset-x-0 px-2">
  <div className="flex flex-wrap justify-center
  gap-3 shadow-lg bg-white px-3 py-2
  rounded-3xl">

    <button 
    onClick={()=>setcolor("green")} // onclick expect function not function value
                        // and we have to send parameters in that function that'swhy callback we have used
  
    className="outline-none px-4 py-1
    rounded-full text-white shadow-lg"
    style={{backgroundColor:"green"}}>green
    </button>
    <button
      onClick={()=>setcolor("red")}  
    className="outline-none px-4 py-1
    rounded-full text-white shadow-lg"
    style={{backgroundColor:"red"}}>red
    </button>

    <button
      onClick={()=>setcolor("orange")}  
    className="outline-none px-4 py-1
    rounded-full text-white shadow-lg"
    style={{backgroundColor:"orange"}}>orange
    </button>

    <button 
     onClick={()=>setcolor("blue")} 
    className="outline-none px-4 py-1
    rounded-full text-white shadow-lg"
    style={{backgroundColor:"blue"}}>blue
    </button>
    <button
     onClick={()=>setcolor("purple")} 
    className="outline-none px-4 py-1
    rounded-full text-white shadow-lg"
    style={{backgroundColor:"purple"}}>purple
    </button>
    <button 
     onClick={()=>setcolor("black")} 
    className="outline-none px-4 py-1
    rounded-full text-white shadow-lg"
    style={{backgroundColor:"black"}}>black
    </button>
  </div>
  </div>
 
      </div>
    </>
  )
}

export default App
