<script lang="ts" setup>
import { MagnifyingGlassCircleIcon, QueueListIcon, PlusCircleIcon, ChevronDownIcon, PlusIcon } from '@heroicons/vue/20/solid'
</script>

<template>
  <div class="flex flex-grow w-full h-full flex-row absolute">

    <Head>
      <Title>Todo</Title>
    </Head>

    <aside
      class="w-[250px] bg-black bg-opacity-50 backdrop-blur-lg rounded-r-lg h-full absolute py-5 flex flex-col space-y-4">
      <!-- User Avatar Dropdown -->
      <div class="flex flex-row space-x-4 px-5">
        <img src="https://api.multiavatar.com/Nelson Atuonwu.png" class="h-12 w-12 rounded-full" alt="" />
        <div class="flex flex-col">
          <p>Nelson Atuonwu</p>
          <p class="text-gray-300 text-xs">nellyatuonwu@gmail.com</p>
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

        <div class="flex flex-row justify-between bg-gray-400/25 px-5 py-1.5">
          <div class="flex space-x-1 items-center">
            <QueueListIcon class="h-4 w-4" />
            <p class="text-gray-300">To Do</p>
          </div>
          <p class="text-gray-300">3</p>
        </div>

        <div class="flex flex-row justify-between px-5 py-1.5">
          <div class="flex space-x-1 items-center">
            <QueueListIcon class="h-4 w-4" />
            <p class="text-gray-300">To Do</p>
          </div>
          <p class="text-gray-300">3</p>
        </div>

        <div class="flex flex-row justify-between px-5 py-1.5">
          <div class="flex space-x-1 items-center">
            <QueueListIcon class="h-4 w-4" />
            <p class="text-gray-300">To Do</p>
          </div>
          <p class="text-gray-300">3</p>
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


    <main class="px-10 py-10 h-full left-0 flex-grow ml-[250px]">
      <!-- Navbar -->
      <LayoutHeader />

      <!-- Main Content -->
      <div class="w-full grid grid-cols-1 gap-y-px mt-10">
        <div class="px-4 py-2.5 bg-gray-900/50 rounded">
          <div class="flex items-center gap-x-3">
            <input id="push-everything" name="push-notifications" type="checkbox"
              class="h-4 w-4 border-gray-300 text-primary rounded bg-transparent focus:ring-0" />
            <input type="text" class="bg-transparent text-sm font-medium leading-6 text-gray-200 focus:ring-0 border-0" value="Everything"/>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <footer class="fixed bottom-10 left-[290px] right-10">
        <div class="flex rounded-md shadow-sm bg-gray-900/50 space-x-2 py-1.5">
          <button class="flex select-none items-center pl-3 text-gray-300 sm:text-sm">
            <PlusIcon class="h-5 w-5" aria-hidden="true" />
          </button>
          <input type="text" name="username" id="username" autocomplete="username"
            class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Add new task" />
        </div>
      </footer>
    </main>
  </div>
</template>