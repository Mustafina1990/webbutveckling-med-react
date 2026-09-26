import { useState } from 'react';
import './assets/scss/App.scss';

interface Todo {
  id: number;
  title: string;
  likes: number;
}

function App() {
  //let counter = 0;
  const [counter, setCounter] = useState(0);
  const [msg, setMsg] = useState('Hi mom!');
  const [posts, setPosts] = useState<Todo[]>([
    { id: 1, title: "Reackt Rocks", likes: 1324 },
    { id: 2, title: "Learning React", likes: 256 },
    { id: 3, title: "Advanced React Patterns", likes: 512 }
  ]);

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

      <hr />

      <h2>Posts</h2>
      <ul>
        {posts.map(post => <li key={post.id}>{post.title} ({post.likes} likes)</li>)}
      </ul>
      
    </div>
  )
}

export default App
