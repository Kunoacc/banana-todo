<script lang="ts" setup>
import { darkenColor } from '~/helpers/darkenColor';
import { generateBgSvg } from '~/helpers/generateBgSvg';

const props = defineProps<{
  activeTheme: Record<string, string>
}>()

const darkerColor = computed(() => darkenColor(props.activeTheme.primary))

const svgDataUri = computed(() => {
  const svgContent = generateBgSvg(props.activeTheme.primary, darkerColor.value);
  return `url("data:image/svg+xml,${encodeURIComponent(svgContent)}")`
})

</script>

<template>
  <div :style="{backgroundImage: svgDataUri}" class="transition-all duration-500 ease-in-out bg-cover bg-no-repeat"></div>

</template>