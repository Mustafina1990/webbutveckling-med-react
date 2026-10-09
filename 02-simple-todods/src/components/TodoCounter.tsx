const TodoCounter = () => {

    const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

    return (
         <p>{completedTodos.length} of {todos.length} todos completed.</p>
    )
}

export default TodoCounter