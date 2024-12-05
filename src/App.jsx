import { useState } from 'react'
import Grid1 from './Grid1'
import './assets/Grid1.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Grid1 />
    </>
  )
}

export default App
