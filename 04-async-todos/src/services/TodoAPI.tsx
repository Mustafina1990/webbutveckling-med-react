import axios from "axios";
import type { CreateTodoPayload, Todo } from "../types/Todo.types";

/**
 *  get all Todods
*/
export const getTodos = async () => {
  const res = await axios.get<Todo[]>("http://localhost:3000/todos");
  return res.data;
}

/**
 * Create a Todo
 */
export const createTodo = async (payload: CreateTodoPayload) => {
  const res = await axios.post<Todo>("http://localhost:3000/todos", payload);
  return res.data;
};

export const fetchTodos = async () => {
  const res = await fetch("http://localhost:3000/todos");
  if (!res.ok) {
    throw new Error("Failed to fetch todos");
  }
  return await res.json() as Todo[];
}