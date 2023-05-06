<script setup lang="ts">
import { Todo } from '~/interfaces/todo.interface';

const props = defineProps<{
  todo: Todo,
  updateTodo: (todo: Todo) => void
}>()

const { $toast } = useNuxtApp()

const { todo, updateTodo } = toRefs(props)

const localTodo = ref(todo.value)

const localUpdateTodo = async () => {
  try {
    await updateTodo.value(localTodo.value)
    $toast.success('Todo updated successfully')
  } catch (error) {
    $toast.error('Failed to update todo')
    localTodo.value = todo.value
  }
}
</script>

<template>
  <div class="px-4 py-2.5 bg-gray-900/50 rounded">
    <div class="flex items-center gap-x-3">
      <input id="push-everything" name="push-notifications" type="checkbox" :checked="localTodo.completed" :v-model="localTodo.completed"
        class="h-4 w-4 border-gray-300 text-primary rounded bg-transparent focus:ring-0" />
      <input type="text" class="bg-transparent text-sm font-medium leading-6 text-gray-200 focus:ring-0 border-0 w-full"
        v-model="localTodo.todo" @keypress.enter="localUpdateTodo" v-if="!localTodo.completed"/>
      <p v-else class="bg-transparent text-sm font-medium leading-6 text-gray-200 line-through px-3">{{ localTodo.todo }}</p>
    </div>
  </div>
</template>