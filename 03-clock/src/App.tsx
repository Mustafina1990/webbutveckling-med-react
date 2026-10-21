import { useState, useEffect } from 'react'
import './App.css'
import Container from './components/Container'

function App() {
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    console.log("useEffect called");

     setInterval(() => {
    const now = new Date().toLocaleTimeString();
    console.log("Tick..", now);
    setTime(now);
  }, 1000);
  }, [time]);

 

  return (
    <>
      <Container className="center-xy">
        <div id="clock">
          {time}
        </div>
      </Container>
    </>
  )
}

export default App
