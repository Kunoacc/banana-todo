import { Todo, TodoFilters, TodoList } from "~/interfaces/todo.interface";
import { createLoadableStore } from "./utils/createLoadableStore";
import { processTodo } from "~/helpers/processTodos";

const storeFactory = (context: ReturnType<ReturnType<typeof createLoadableStore>>) => {
  const { $api } = useNuxtApp()

  const todoLists = ref<TodoList[]>([])

  const selectedTodoListIndex = ref<number | null>(0)
  const selectedTodoList = computed(() => todoLists.value[selectedTodoListIndex.value as number])

  const selectedTodoItemIndex = ref<number | null>(null)
  const selectedTodoItem = computed(() => selectedTodoList.value?.todos[selectedTodoItemIndex.value as number])

  function fetchTodoLists() {
    // TODO: create a way to fetch these from an API and link them to the to-do items
    todoLists.value = [
      {
        id: 1,
        name: 'Work',
        todos: [],
        total: null
      },
      {
        id: 2,
        name: 'Personal',
        todos: [],
        total: null
      },
      {
        id: 3,
        name: 'Shopping',
        todos: [],
        total: null
      }
    ]
  }

  function setActiveTodoItem(todoIndex?: number) {
    selectedTodoItemIndex.value = todoIndex ?? null
  }

  function setActiveTodoList(todoListIndex?: number) {
    selectedTodoListIndex.value = todoListIndex ?? null
  }

  function resetTodoItems(todoListIndex: number) {
    todoLists.value[todoListIndex].todos = []
  }

  async function fetchUserTodoItems(userId: string, filters: TodoFilters = {}) {
    const response = await context.withLoading(async () => await $api.todo.getAll(userId, filters))
    const orderedTodoItems = processTodo([
      ...(selectedTodoList.value?.todos || []),
      ...(response.parsedBody?.todos as Todo[])
    ]);
    todoLists.value[selectedTodoListIndex.value as number].todos = orderedTodoItems
    todoLists.value[selectedTodoListIndex.value as number].total = response.parsedBody?.total as number
  }

  async function createTodoItem(userId: string, todo: string) {
    const response = await context.withLoading(async () => await $api.todo.create({
      todo,
      userId,
      completed: false
    }))
    todoLists.value[selectedTodoListIndex.value as number].todos.push(response.parsedBody as Todo)
  }

  async function updateTodoItem(todo: Todo) {
    const response = await context.withLoading(async () => await $api.todo.update(todo))
    const index = todoLists.value[selectedTodoListIndex.value as number].todos.findIndex((item) => item.id === todo.id)
    todoLists.value[selectedTodoListIndex.value as number].todos[index] = response.parsedBody as Todo
  }

  async function deleteTodoItem(todoId: number) {
    await context.withLoading(async () => await $api.todo.delete(todoId))
    const index = todoLists.value[selectedTodoListIndex.value as number].todos.findIndex((item) => item.id === todoId)
    todoLists.value[selectedTodoListIndex.value as number].todos.splice(index, 1)
  }

  onMounted(() => fetchTodoLists())

  return {
    todoLists,
    selectedTodoList,
    selectedTodoItem,
    selectedTodoListIndex,
    selectedTodoItemIndex,
    setActiveTodoItem,
    setActiveTodoList,
    resetTodoItems,
    fetchUserTodoItems,
    createTodoItem,
    updateTodoItem,
    deleteTodoItem
  }
}

export const useTodoStore = createLoadableStore<ReturnType<typeof storeFactory>>('todo', storeFactory)