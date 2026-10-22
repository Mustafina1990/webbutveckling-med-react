import { useState, useEffect } from 'react'
import './App.css'
//import Clock from './components/Clock'
import ClassClock from './components/ClassClock'

function App() {
  const [showClock, setShowClock] = useState(false);

 

  return (
    <>
      <div className="center-xy">
        <button onClick={() => setShowClock(!showClock)}>Show/Hide Clock</button>
        {showClock && <ClassClock />}
      </div>
    </>
  )
}

export default App
