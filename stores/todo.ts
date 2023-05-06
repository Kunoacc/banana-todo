import { Todo, TodoListFilters } from "~/interfaces/todo.interface";
import { createLoadableStore } from "./utils/createLoadableStore";
import { User } from "~/interfaces/user.interface";

const storeFactory = (context: ReturnType<ReturnType<typeof createLoadableStore>>) => {
  const { $api } = useNuxtApp()
  const { data } = useAuth()

  const todoItems = ref<Todo[]>([])
  const selectedTodoItem = ref<Todo | null>(null)

  function setActiveTodoItem(todoIndex: number) {
    selectedTodoItem.value = todoItems.value[todoIndex]
  }

  async function fetchUserTodoItems(filters: TodoListFilters) {
    await context.withLoading(async () => {
      const response = await $api.todo.getAll((data.value?.user as User)?.id || '0', filters)
      todoItems.value = response.parsedBody?.data?.todos as Todo[]
    })
  }

  async function createTodoItem(todo: string) {
    await context.withLoading(async () => {
      const response = await $api.todo.create({
        todo,
        userId: (data.value?.user as User)?.id as string || '0',
        completed: false
      })
      todoItems.value.push(response.parsedBody as Todo)
    })
  }

  async function updateTodoItem(todo: Todo) {
    await context.withLoading(async () => {
      const response = await $api.todo.update(todo)
      const index = todoItems.value.findIndex((item) => item.id === todo.id)
      todoItems.value[index] = response.parsedBody as Todo
    })
  }

  async function deleteTodoItem(todoId: number) {
    await context.withLoading(async () => {
      await $api.todo.delete(todoId)
      const index = todoItems.value.findIndex((item) => item.id === todoId)
      todoItems.value.splice(index, 1)
    })
  }

  return {
    todoItems,
    selectedTodoItem,
    fetchUserTodoItems,
    createTodoItem,
    updateTodoItem,
    deleteTodoItem,
    setActiveTodoItem
  }
}

export const useTodoStore = createLoadableStore<ReturnType<typeof storeFactory>>('todo', storeFactory)