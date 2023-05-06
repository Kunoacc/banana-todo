import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  
  const colorPalettes = ref([
    {
      "primary": "#4A8AA2",
      "secondary": "#E8675A",
      "error": "#E84A4A",
      "warning": "#F0C419",
      "success": "#4EBB67",
      "info": "#8B62D9"
    },
    {
      "primary": "#DE8A43",
      "secondary": "#4E7CA2",
      "error": "#CC4E4E",
      "warning": "#D9BD4C",
      "success": "#5EA45E",
      "info": "#5E9BD9"
    },
    {
      "primary": "#6C7DA6",
      "secondary": "#A26C7D",
      "error": "#A64D4D",
      "warning": "#D1A64D",
      "success": "#4DA66D",
      "info": "#4DA6A6"
    },
    {
      "primary": "#D96A9F",
      "secondary": "#6AD9A0",
      "error": "#D94646",
      "warning": "#E0D946",
      "success": "#46D977",
      "info": "#4697D9"
    }
  ])

  const activePalette = ref(colorPalettes.value[0] as (typeof colorPalettes.value)[number]);

  const setActivePalette = (paletteIndex: number) => {
    const palette = colorPalettes.value[paletteIndex];
    activePalette.value = palette;
    for (const [key, value] of Object.entries(palette)) {
      document.documentElement.style.setProperty(`--${key}`, value);
    }
  }

  onMounted(() => setActivePalette(0))

  return {
    colorPalettes,
    activePalette,
    setActivePalette
  }
})