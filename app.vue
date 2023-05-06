<script setup>
import '~/assets/scss/main.scss'
</script>

<template>
  <div class="overflow-hidden bg-transparent min-h-screen w-full relative text-white">
    <Head>
      <Meta property="title" name="title" content="Banana Todo" />
      <Meta property="description" name="description" content="A to-do list" />
    </Head>
    <NuxtPage/>
  </div>
</template>