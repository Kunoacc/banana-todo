<script setup lang="ts">
import { MagnifyingGlassCircleIcon, QueueListIcon, PlusCircleIcon } from '@heroicons/vue/20/solid'
import { TodoList } from '~/interfaces/todo.interface';
import { User } from '~/interfaces/user.interface';

const props = defineProps<{
  user: User,
  todoLists?: TodoList[],
  selectedTodoList?: number
}>()

const { user } = toRefs(props)

</script>

<template>
  <aside
    class="w-[250px] bg-black bg-opacity-50 backdrop-blur-lg rounded-r-lg h-full absolute py-5 flex flex-col space-y-4">
    <!-- User Avatar Dropdown -->
    <div class="flex flex-row space-x-4 px-5">
      <img :src=" user?.image || `https://api.multiavatar.com/${user?.firstName}.png`" class="h-12 w-12 rounded-full" alt="" />
      <div class="flex flex-col">
        <p>{{ user?.firstName }} {{ user?.lastName }}</p>
        <p class="text-gray-300 text-xs">{{ user?.email }}</p>
      </div>
    </div>

    <!-- Search Box -->
    <div class="mt-2 px-5">
      <div
        class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary sm:max-w-md">
        <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
          <MagnifyingGlassCircleIcon class="h-5 w-5" aria-hidden="true" />
        </span>
        <input type="text" name="username" id="username" autocomplete="username"
          class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder="Search" />
      </div>
    </div>

    <!-- To do Lists-->
    <div class="flex flex-col space-y-2">

      <div :class="[
        'flex flex-row justify-between bg-opacity-20 px-5 py-1.5',
        {'bg-primary': index === selectedTodoList}
        ]" v-for="(todo, index) in todoLists">
        <div class="flex space-x-1 items-center">
          <QueueListIcon class="h-4 w-4" />
          <p class="text-gray-300">{{ todo.name }}</p>
        </div>
        <p class="text-gray-300">{{ todo.total }}</p>
      </div>
    </div>

    <!-- New List Button -->
    <div class="flex flex-row flex-grow items-end px-5">
      <button class="bg-transparent text-white rounded-md px-2 py-1 h-min flex space-x-2 items-center">
        <PlusCircleIcon class="w-4 h-4" />
        <span>New List</span>
      </button>
    </div>
  </aside>
</template>