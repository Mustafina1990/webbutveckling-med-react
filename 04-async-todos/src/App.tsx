import axios from "axios";
import { useEffect, useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoCounter from "./components/TodoCounter";
import TodoList from "./components/TodoList";
import type { Todo } from "./types/Todo.types";
import "./assets/scss/App.scss";
import { createTodo, deleteTodo, getTodos } from "./services/TodoAPI";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
	const [todos, setTodos] = useState<Todo[] | null>(null);

	const handleAddTodo = async (title: string) => {
    try {

      const newTodo = await createTodo({
        title,
        completed: false,
      });

      setTodos(prevTodos => [...prevTodos ?? [], newTodo]);
    }
    catch (err) {
      if(err instanceof Error) {
        setError("Could not create todo: " + err.message);
      } else {
        setError("Could not create todo: " + String(err));
      }
      throw err;
    }
	}

	const handleDeleteTodo = async (id: number) => {
    try {
      await deleteTodo(id);
      const updatedTodos = await getTodos();
      setTodos(updatedTodos);
    } catch (err) {
      if(err instanceof Error) {
        setError("Could not delete todo: " + err.message);
      } else {
        setError("Could not delete todo: " + String(err));
      }
		}
	}

	const handleToggleTodo = (_id: number) => {

	}

  useEffect(() => {
    const controller = new AbortController();

    const getData = async () => {
      try {
        const data = await getTodos(controller.signal);
        setTodos(data);
      }
      catch (err) {
        if (axios.isCancel(err)) return;
        setError("Failed to fetch todos");
      }
      setIsLoading(false);
    }
    getData();

    return () => controller.abort();
  }, []);

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
        <p className="text-danger">Error: {error}</p>
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