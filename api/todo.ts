import { ClientDelete, ClientGet, ClientPatch, ClientPost } from "~/helpers/http";
import { PartialTodo, Todo, TodoList, TodoListFilters } from "~/interfaces/todo.interface";

export const todo = (get: ClientGet, post: ClientPost, patch: ClientPatch, del: ClientDelete) => ({
  async getAll(userId: string | number, filters: TodoListFilters) {
    return await get<TodoList>(`/todos/user/${userId}`, filters);
  },

  async create(todo: PartialTodo) { 
    return await post<Todo, PartialTodo>('/todos/add', todo);
  },

  async update(todo: PartialTodo) {
    return await patch<Todo, PartialTodo>(`/todos/${todo?.id}`, todo);
  },

  async delete(todoId: string | number) {
    return await del<Todo>(`/todos/${todoId}`);
  }
});