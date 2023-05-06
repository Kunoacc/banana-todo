<script lang="ts" setup>
import { useAppStore } from '~/stores/app';

definePageMeta({
  middleware: 'auth',
})

const app = useAppStore()
</script>

<template>
  <SharedBg class="z-0 absolute inset-0 opacity-75" :active-theme="app.activePalette"/>
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

      <TodoAdd/>
    </main>
  </div>
</template>