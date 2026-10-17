

const TodoCounter = (props: { completed: number; total: number }) => {

    return (
         <p>{props.completed} of {props.total} {props.total === 1 ? "todo" : "todos"} completed.</p>
    )
}

export default TodoCounter