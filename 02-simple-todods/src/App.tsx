import { useState } from 'react'
import AddTodo from './components/AddTodo'
import { type Todo } from './types/Todo'
import './App.css'

function App() {

   const [todos, setTodos] = useState<Todo[]>([
      { id: 1, title: "Learn React", completed: false },
      { id: 2, title: "Learn TypeScript", completed: false },
      { id: 3, title: "Learn Redux", completed: false },
    ])

    

    const handleAddTodo = (title: string) => {
      const newTodo: Todo = {
        id: Math.max(0, ...todos.map(todo => todo.id)) + 1,
        title,
        completed: false,
      }
      setTodos([...todos, newTodo]);
    }

  return (
    <>
   <div className="App">
    <h1 className="app-title">Todo List</h1>

    <AddTodo onAddTodo={handleAddTodo} />
  
    <ul className="todo-list">
      {todos.map( todo => {
        return (
          <>
            {!todo.completed && (
              <li className="todo-item" key={todo.id}>{todo.title}
                <div className="todo-item-actions">
                  <button className="toggle-button" onClick={() => {
                    const updatedTodos = todos.map(t => t.id === todo.id ? { ...t, completed: !t.completed } : t);
                    setTodos(updatedTodos);
                    setCompletedTodos(updatedTodos.filter(t => t.completed));
                  }}>
                    Toggle
                  </button>
                  <button className="delete-button" onClick={() => {
                    setTodos(todos.filter(t => t.id !== todo.id));
                  }}>
                    Delete
                  </button>
                </div>
              </li>
            )}
            {todo.completed && (
                <li className="todo-completed-item" key={todo.id}>{todo.title}</li>
              )}
          </>
        )
      })}
    </ul>

    {todos.length === completedTodos.length && (
      <h2>You are a productivity master! All todos completed!</h2>
    )}

   
   </div>
    </>
  )
}

export default App
