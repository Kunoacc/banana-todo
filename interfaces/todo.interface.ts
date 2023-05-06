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

export interface TodoListFilters {
  limit?: number;
  offset?: number;
  skip?: number;
}

export interface TodoList extends ApiResponsePlural<'todos', Todo[]> {}