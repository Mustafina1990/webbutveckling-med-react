import { useState } from 'react'
import AddTodo from './components/AddTodo'
import { type Todo } from './types/Todo'
import './App.css'
import TodoCounter from './components/TodoCounter'
import TodoItem from './components/TodoItem'

function App() {

   const [todos, setTodos] = useState<Todo[]>([
      { id: 1, title: "Learn React", completed: false },
      { id: 2, title: "Learn TypeScript", completed: false },
      { id: 3, title: "Learn Redux", completed: false },
    ])

    const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

    const handleAddTodo = (title: string) => {
      const newTodo: Todo = {
        id: Math.max(0, ...todos.map(todo => todo.id)) + 1,
        title,
        completed: false,
      }
      setTodos([...todos, newTodo]);
    }

    const handleDeleteTodo = (id: number) => {
      setTodos(todos.filter(todo => todo.id !== id));
    }

    const handleToggleTodo = (id: number) => {
      const updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      setTodos(updatedTodos);
      setCompletedTodos(updatedTodos.filter(todo => todo.completed));
    }

  return (
    <>
   <div className="App">
    <h1 className="app-title">Todo List</h1>

    <AddTodo onAddTodo={handleAddTodo} />

    <h2>Will do list</h2>

    <ul className="todo-list">
      {todos.map( todo => {
        return (
          <>
            {!todo.completed && (
             <TodoItem 
             todo={todo} 
             onToggleTodo={handleToggleTodo} 
             onDeleteTodo={handleDeleteTodo} 
             key={todo.id} />
            )}
          </>
        )
      })}
    </ul>

     <h2>Completed todos</h2>

     <ul className="todo-list">
      {todos.map(todo => todo.completed && (
        <li className="todo-completed-item" key={todo.id}>{todo.title}</li>
      ))}
     </ul>

    {todos.length === completedTodos.length && (
      <h2>You are a productivity master! All todos completed!</h2>
    )}

    <TodoCounter completed={completedTodos.length} total={todos.length} />
   
   </div>
    </>
  )
}

export default App
