import { useEffect, useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoCounter from "./components/TodoCounter";
import TodoList from "./components/TodoList";
import type { Todo } from "./types/Todo.types";
import "./assets/scss/App.scss";
import { createTodo, fetchTodos, getTodos } from "./services/TodoAPI";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
	const [todos, setTodos] = useState<Todo[] | null>(null);

	const handleAddTodo = async (title: string) => {
    await createTodo({
      title,
      completed: false,
    })
	}

	const handleDeleteTodo = (_id: number) => {

	}

	const handleToggleTodo = (_id: number) => {

	}

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getTodos();
        setTodos(data);
      }
      catch {
        setError(new Error("Failed to fetch todos"));
      }
      setIsLoading(false);
    }
    getData();
  }, [isLoading]);

	// Derive list of completed/incompleted todos from the `todos` state
	const finishedTodos = todos?.filter(todo => todo.completed) ?? [];
	const notFinishedTodos = todos?.filter(todo => !todo.completed) ?? [];

	return (
		<div className="py-2">
			<h1>Simple Todos</h1>

			<AddTodoForm
				onAddTodo={handleAddTodo}
			/>

      {error && (
        <p className="text-danger">Error: {error.message}</p>
      )}

			{isLoading ? (
				<p>Loading todos...</p>
			) : !isLoading && todos && todos.length > 0 ? (
				<>
					<h2 className="h5 mb-2">💪🏻 Stuff I got to do</h2>
					<TodoList
						onDelete={handleDeleteTodo}
						onToggle={handleToggleTodo}
						todos={notFinishedTodos}
					>
					</TodoList>

					<h2 className="h5 mb-2">🥺 Stuff I've done</h2>
					<TodoList
						onDelete={handleDeleteTodo}
						onToggle={handleToggleTodo}
						todos={finishedTodos}
					>
					</TodoList>

					<TodoCounter
						completed={finishedTodos.length}
						total={todos.length}
					 />
				</>
			) : !error && (
				<p>You ain't got no todos to do, time to party!!111 Untz untz untz 🥳!</p>
			)}

		</div>
	);
}

export default App;