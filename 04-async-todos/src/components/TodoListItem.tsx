import type { Todo } from "../types/Todo.types";


interface TodoListItemProps {
	onDelete: (id: number) => void;
	onToggle: (todo: Todo) => void;
	todo: Todo;
}

const TodoListItem = ({ onDelete, onToggle, todo }: TodoListItemProps) => {
	return (
		<li className={todo.completed ? "completed" : ""}>
			<span className="todo-title">{todo.title}</span>

			<div>
				<button
					onClick={() => onToggle(todo)}
					className="btn btn-sm btn-outline-warning"
				>Toggle</button>

				<button
					onClick={() => onDelete(todo.id)}
					className="btn btn-sm btn-outline-danger"
				>Delete</button>
			</div>
		</li>
	)
}

export default TodoListItem;