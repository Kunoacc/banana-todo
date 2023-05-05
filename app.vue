<script setup>
import '~/assets/scss/main.scss'
import { useAppStore } from './stores/app';

const app = useAppStore()

</script>

<template>
  <div class="overflow-hidden bg-transparent min-h-screen w-full relative text-white">
    <Head>
      <Meta property="title" name="title" content="Banana Todo" />
      <Meta property="description" name="description" content="A to-do list" />
    </Head>
    <SharedBg class="z-0 absolute inset-0 opacity-75" :active-theme="app.activePalette"/>
    <NuxtPage/>
  </div>
</template>