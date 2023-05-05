import { ApiResponsePlural } from "./api/response.interface";

export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export interface TodoList extends ApiResponsePlural<{todos: Todo[]}> {}