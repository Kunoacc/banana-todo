<script lang="ts" setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ChevronDownIcon, CheckCircleIcon } from '@heroicons/vue/20/solid'
import { useAppStore } from '~/stores/app';

const props = defineProps<{
  title?: string
}>()

const appState = useAppStore()

const handleThemeChange = (index: number) => {
  appState.setActivePalette(index)
}

</script>

<template>
  <nav class="w-full flex justify-between">
    <h1 class="text-gray-900/50 font-bold text-2xl">{{ props.title ?? 'Todo' }}</h1>
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gray-900/50 px-3 py-2 text-sm font-semibold text-gray-200 shadow-sm">
          Change Theme
          <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </MenuButton>
      </div>

      <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <MenuItems
          class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div class="p-6 grid grid-cols-3 gap-6">
            <MenuItem v-for="(palette, index) in appState.colorPalettes" :key="index"
              @click="handleThemeChange(index)">
              <a href="#" class="w-12 h-12 rounded-lg border-gray-600 border flex items-center justify-center" :style="{ backgroundColor: palette.primary }">
                <div v-if="palette.primary === appState.activePalette?.primary" class="w-8 h-8 rounded items-center justify-center flex bg-black/30">
                  <CheckCircleIcon class="w-4 h-4" />
                </div>
              </a>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </nav>
</template>