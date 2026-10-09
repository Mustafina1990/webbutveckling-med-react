

const TodoCounter = (props: { completed: number; total: number }) => {

    return (
         <p>{props.completed} of {props.total} todos completed.</p>
    )
}

export default TodoCounter