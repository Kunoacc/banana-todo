<script lang="ts" setup>
import { darkenColor } from '~/helpers/darkenColor';
import { generateBgSvg } from '~/helpers/generateBgSvg';
import { useAppStore } from '~/stores/app';

const props = defineProps<{
  activeTheme?: Record<string, string>
}>()

const { colorPalettes } = useAppStore()

const activeTheme = computed(() => props.activeTheme ?? colorPalettes[0])

const darkerColor = computed(() => darkenColor(activeTheme.value.primary))

const svgDataUri = computed(() => {
  const svgContent = generateBgSvg(activeTheme.value.primary, darkerColor.value);
  return `url("data:image/svg+xml,${encodeURIComponent(svgContent)}")`
})

</script>

<template>
  <div :style="{backgroundImage: svgDataUri}" class="transition-all duration-500 ease-in-out bg-cover bg-no-repeat"></div>

</template>