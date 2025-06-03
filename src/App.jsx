import { useState } from 'react'
import './App.css'



// Count = Tagadējais skailis, setCount = nākamis kas bus.
function App() {
  const [count, setCount] = useState(0)

// noņem vienu
  function decCount() {
      setCount(prevCount => prevCount - 1)
  }

// pieliek vienu
  function ineCount() {
      setCount(prevCount => prevCount + 1)
  }

  return (
  <>
    
  <button onClick={decCount}>-</button>
   <span>{count}</span>
  <button onClick={ineCount}>+</button>
    
    
  </>
  )
}

export default App
