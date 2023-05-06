import { Todo } from "~/interfaces/todo.interface";

export const processTodo = (todos: Todo[]): Todo[] => {
  const uniqueEntries = new Map();

  for (const todo of todos) {
    if (!uniqueEntries.has(todo.id)) {
      uniqueEntries.set(todo.id, todo);
    }
  }

  return Array.from(uniqueEntries.values()).sort((a, b) => (b?.id as number) - (a?.id as number));
}