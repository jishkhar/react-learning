import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-pink-400 rounded-lg p-2 mb-5' >Tailwind Test</h1>

      <Card name="Jishnu" btnText="Click Here" />
      <Card name="Khargharia" btnText="dfscvwhuif"/>
    </>
  )
}

export default App
