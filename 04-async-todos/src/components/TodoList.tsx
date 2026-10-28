import type { Todo } from "../types/Todo.types";
import TodoListItem from "./TodoListItem";

interface TodoListProps {
	onDelete: (id: number) => void;
	onToggle: (todo: Todo) => void;
	todos: Todo[];
}

const TodoList = ({ onDelete, onToggle, todos }: TodoListProps) => {
	return (
		<ul className="todolist mb-3">
			{todos.map(todo => (
				<TodoListItem
					onDelete={onDelete}
					onToggle={onToggle}
					key={todo.id}
					todo={todo}
				/>
			))}
		</ul>
	)
}

export default TodoList;