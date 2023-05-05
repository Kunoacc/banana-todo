<script lang="ts" setup>
import { MagnifyingGlassCircleIcon, QueueListIcon, PlusCircleIcon, ChevronDownIcon, PlusIcon } from '@heroicons/vue/20/solid'
</script>

<template>
  <div class="flex flex-grow w-full h-full flex-row absolute">

    <Head>
      <Title>Todo</Title>
    </Head>

    <LayoutSidebar/>

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