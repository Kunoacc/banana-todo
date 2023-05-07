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
const {
  selectedTodoListIndex,
  todoLists,
  selectedTodoList,
  setActiveTodoList,
  updateTodoItem,
  createTodoItem
} = toRefs(todo)


const user = data.value?.user as User

onMounted(() => {
  todo.fetchUserTodoItems(user?.id as string)
})

watch(selectedTodoList, () => todo.fetchUserTodoItems(user?.id as string))
</script>

<template>
  <SharedBg class="z-0 absolute inset-0 opacity-75" :active-theme="app.activePalette"/>
  <div class="flex flex-grow w-full h-full flex-row absolute">
    <Head>
      <Title>Todo</Title>
    </Head>
    <LayoutSidebar 
      :user="user" 
      :selected-todo-list="(selectedTodoListIndex as number)" 
      :select-todo-list="setActiveTodoList"
      :todo-lists="todoLists"/>

    <main class="px-10 py-10 h-full left-0 flex-grow ml-[250px]">
      <!-- Navbar -->
      <LayoutHeader :title="selectedTodoList?.name" />

      <!-- Main Content -->
      <div class="w-full flex flex-col gap-y-px mt-10 overflow-y-scroll h-[calc(100%-140px)] mb-16">
        <TodoItem 
          v-for="(todo, index) in selectedTodoList?.todos || []"
          :todo="todo"
          :update-todo="updateTodoItem"
          :key="index"
          />
      </div>

      <TodoAdd :user="user" :create-todo="createTodoItem"/>
    </main>
  </div>
</template>