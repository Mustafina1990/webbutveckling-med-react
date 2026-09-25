import { useState } from 'react';
import './assets/scss/App.scss';

function App() {
  //let counter = 0;
  const [counter, setCounter] = useState(0);
  const [msg, setMsg] = useState('Hi mom!');

  const handleBtnClick = () => {
    setCounter(counter + 1);
  }

  return (
    <div className="container py-2">
      <h1>01-react-basics</h1>

      <p>Counter: {counter}</p>

      <button className="btn btn-primary" onClick={handleBtnClick}>Click me!</button>

      <hr />

      <p>{msg}</p>

      <button className="btn btn-secondary" onClick={() => setMsg("Hi dad!")}>Hi dad!</button>
      
    </div>
  )
}

export default App
