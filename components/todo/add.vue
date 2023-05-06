<script setup lang="ts">
import { useTodoStore } from '~/stores/todo';
import { PlusIcon } from '@heroicons/vue/20/solid'

const todo = ref('')
const { createTodoItem } = useTodoStore()
</script>

<template>
  <!-- Footer -->
  <footer class="fixed bottom-10 left-[290px] right-10">
    <div class="flex rounded-md shadow-sm bg-gray-900/50 space-x-2 py-1.5">
      <button class="flex select-none items-center pl-3 text-gray-300 sm:text-sm">
        <PlusIcon class="h-5 w-5" aria-hidden="true" />
      </button>
      <input type="text" name="username" id="username" autocomplete="username" @keydown.enter="createTodoItem(todo)" v-model="todo"
        class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        placeholder="Add new task" />
    </div>
  </footer>
</template>