import type { Todo } from "../types/Todo";

interface TodoItemProps {
    todo: Todo;
    onToggleTodo: (id: number) => void;
    onDeleteTodo: (id: number) => void;
}

const TodoItem = ({ todo, onToggleTodo, onDeleteTodo }: TodoItemProps) => {
    return (
        <li className="todo-item">{todo.title}
            <div className="todo-item-actions">
              <button className="toggle-button" onClick={() => onToggleTodo(todo.id)}>
                Toggle
              </button>
              <button className="delete-button" onClick={() => onDeleteTodo(todo.id)}>
                Delete
              </button>
            </div>
        </li>
    )
}

export default TodoItem