import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import Navbar from './page/navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
    </>
  )
}

export default App
