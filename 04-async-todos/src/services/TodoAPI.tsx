import type { Todo } from "../types/Todo.types";

export const fetchTodos = async () => {
    const res = await fetch("http://localhost:3000/todos");
    if (!res.ok) {
      throw new Error("Failed to fetch todos");
    }
    return await res.json() as Todo[];
}