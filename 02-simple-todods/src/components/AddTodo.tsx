import { useState } from "react";

interface AddTodoProps {
    onAddTodo: (title: string) => void;
}

const AddTodo = ({ onAddTodo }: AddTodoProps) => {

    const [titleInput, setTitleInput] = useState<string>("")

    const handleSubmit = (e: React.SubmitEvent) => {
      
        e.preventDefault();

        onAddTodo(titleInput);
        
        setTitleInput("");
    }
    return (
        <>
            <form className="todo-input-container" onSubmit={handleSubmit}>
                <input className="todo-input" type="text" value={titleInput} onChange={(e) => setTitleInput(e.target.value)} placeholder="Add a new todo..." />
                <button className="add-button" type="submit">Add</button>
            </form>
        </>
    )
}

export default AddTodo