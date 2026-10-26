import { useState } from "react";

interface AddTodoFormProps {
	onAddTodo: (title: string) => Promise<void>;
}

const AddTodoForm = ({ onAddTodo }: AddTodoFormProps) => {
	const [isPending, setIsPending] = useState(false);
	const [inputTitle, setInputTitle] = useState("");
	const trimmedInputTitle = inputTitle.trim();

	const handleSubmit = async (e: React.SubmitEvent) => {
		e.preventDefault();

		// 🙋 Tell parent that someone wants to create a new todo with the title
		setIsPending(true);
		await onAddTodo(trimmedInputTitle);

		// Clear input field and reset pending state
		setInputTitle("");
		setIsPending(false);
	}

	return (
		<form onSubmit={handleSubmit} className="mb-3">
			<div className="input-group">
				<input
					aria-label="New todo title"
					onChange={e => setInputTitle(e.target.value)}
					placeholder="Learn about GTD"
					value={inputTitle}
					required
				/>

				<button
					className="btn btn-success"
					disabled={trimmedInputTitle.length < 3 || isPending}
					type="submit"
				>Create 👶🏻</button>
			</div>

			{trimmedInputTitle.length > 0 && trimmedInputTitle.length < 3 && (
				<div className="text-danger text-small">That's too short todo to do, better do it right away!</div>
			)}
		</form>
	)
}

export default AddTodoForm;