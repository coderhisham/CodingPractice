import { useState } from 'react'
import './App.css'



function App() {

  let [counter, setCounter] = useState(0);

  const addValue = ()=>{
    setCounter(counter+1)
  }

  const subValue = ()=>{
    if(counter>0){
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>Simple Counter</h1>
      <h3>Counter Value: {counter}</h3>
      
      <button onClick={subValue}>Sub Value</button>
      <button onClick={addValue}>Add Value</button>
     
    </>
  )
}

export default App
