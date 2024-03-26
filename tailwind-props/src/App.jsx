import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
  username: "kumar",
  age: 22
  }

  let newArr = [1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-4 mb-4'>tailwind test</h1>
      <Card username = "chai" btnText='Click this shit' />
    </>
  )
}

export default App
