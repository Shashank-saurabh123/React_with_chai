import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-4
     rounded-xl mb-4'>Tailwind props</h1>
     <Card username="liya" btntxt="click me"/> 

       {/* // if we want to pass object and array we have to declare first and after that pass in {}
                                     // check the git hub code */}
     <Card  username="julie"  btntxt="visit me"/>
    
    </>
  )
}

export default App
