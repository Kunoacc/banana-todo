import { ClientDelete, ClientGet, ClientPatch, ClientPost } from "~/helpers/http";
import { Todo, TodoList, TodoListFilters } from "~/interfaces/todo.interface";

export const todo = (get: ClientGet, post: ClientPost, patch: ClientPatch, del: ClientDelete) => ({
  async getAll(userId: string | number, filters: TodoListFilters) {
    return await get<TodoList>(`/todos/user/${userId}`, filters);
  },

  async create(todo: Todo) { 
    return await post<Todo, Todo>('/todos/add', todo);
  },

  async update(todo: Todo) {
    return await patch<Todo, Todo>(`/todos/${todo?.id}`, todo);
  },

  async delete(todoId: string | number) {
    return await del<Todo>(`/todos/${todoId}`);
  }
});