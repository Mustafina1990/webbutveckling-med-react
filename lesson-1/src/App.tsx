import './App.css'
import { useState } from 'react';

function App() {
  //let counter = 0;
  const [counter, setCounter] = useState(0);
  const [msg, setMsg] = useState('Hi mom!');

  const handleBtnClick = () => {
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>01-react-basics</h1>

      <p>Counter: {counter}</p>

      <button onClick={handleBtnClick}>Click me!</button>

      <hr />

      <p>{msg}</p>

      <button onClick={() => setMsg("Hi dad!")}>Hi dad!</button>
      
    </>
  )
}

export default App
