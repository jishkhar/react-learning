import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5)

  const addValue = () => {
    if(counter < 20){
      setCounter(counter + 1)
    }
  }

  const remValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Counter : {counter}</h1>

      <button onClick={addValue}>Increase Value</button>
      <br />
      <button onClick={remValue}>Decrease Value</button>

      <p>Footer : {counter}</p>
    </>
  )
}

export default App
