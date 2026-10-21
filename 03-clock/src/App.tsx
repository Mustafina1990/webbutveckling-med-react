import { useState, useEffect } from 'react'
import './App.css'
import Container from './components/Container'
import Clock from './components/Clock'

function App() {
  const [showClock, setShowClock] = useState(false);

 

  return (
    <>
      <Container className="center-xy">
        <button onClick={() => setShowClock(!showClock)}>Show/Hide Clock</button>
        {showClock && <Clock />}
      </Container>
    </>
  )
}

export default App
