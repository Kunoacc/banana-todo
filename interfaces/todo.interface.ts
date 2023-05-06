import { ApiResponsePlural } from "./api/response.interface";

export interface Todo {
  id: number | string;
  todo: string;
  completed?: boolean;
  userId?: number | string;
}

export interface PartialTodo {
  id?: number | string;
  todo?: string;
  completed?: boolean;
  userId?: number | string;
}

export interface TodoFilters {
  limit?: number;
  offset?: number;
  skip?: number;
}

export interface TodoList {
  todos: Todo[];
  id: number | string;
  name: string;
  total: number;
}

export interface Todos extends ApiResponsePlural<'todos', Todo[]> { }