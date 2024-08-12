import { useState } from 'react'


function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 0;   This variable will never be propagated into the UI, it just gets updated and sits idle (doing nothing).

  const addValue = () => {
    // counter = counter + 1;
    setCounter(counter+1)
  }

  const remValue = () => {
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Simple Counter</h1>
      <h2>counter Value : {counter}</h2>

      <button onClick={addValue}>Increase Value {counter}</button> 
      <br />
      <button onClick={remValue}>Decrease Value{counter}</button>
    </>
  )
}

export default App
