import { useState } from 'react'
// import Grid1 from './Grid1'
// import Grid2 from './Grid2'
import Grid3 from './Grid3'
// import './assets/Grid1.css'
// import './assets/Grid2.css'
import './assets/Grid3.css'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Grid3 />
    </>
  )
}

export default App
