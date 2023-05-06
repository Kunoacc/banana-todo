<script lang="ts" setup>
import { User } from '~/interfaces/user.interface';
import { useAppStore } from '~/stores/app';
import { useTodoStore } from '~/stores/todo';

definePageMeta({
  middleware: 'auth',
})

const { data } = useAuth()
const app = useAppStore()
const todo = useTodoStore()

const user = data.value?.user as User

onMounted(() => {
  todo.fetchUserTodoItems()
})
</script>

<template>
  <SharedBg class="z-0 absolute inset-0 opacity-75" :active-theme="app.activePalette"/>
  <div class="flex flex-grow w-full h-full flex-row absolute">
    <Head>
      <Title>Todo</Title>
    </Head>
    <LayoutSidebar :user="user"/>

    <main class="px-10 py-10 h-full left-0 flex-grow ml-[250px]">
      <!-- Navbar -->
      <LayoutHeader />

      <!-- Main Content -->
      <div class="w-full grid grid-cols-1 gap-y-px mt-10">
        <TodoItem/>
      </div>

      <TodoAdd/>
    </main>
  </div>
</template>