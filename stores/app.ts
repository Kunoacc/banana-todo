import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  
  const colorPalettes = ref([
    {
      "primary": "#4A8AA2",
      "secondary": "#A24A7E",
      "error": "#A24A4A",
      "warning": "#A2A24A",
      "success": "#4AA250",
      "info": "#4AA2A2"
    },
    {
      "primary": "#AA7C39",
      "secondary": "#397CAA",
      "error": "#AA3939",
      "warning": "#AAA639",
      "success": "#39AA3C",
      "info": "#39AAA6"
    },
    {
      "primary": "#A2784E",
      "secondary": "#4E7CA2",
      "error": "#A24E4E",
      "warning": "#A2A24E",
      "success": "#4EA24E",
      "info": "#4EA2A2"
    },
    {
      "primary": "#5687A1",
      "secondary": "#A65688",
      "error": "#A65656",
      "warning": "#A6A156",
      "success": "#56A65C",
      "info": "#56A6A1"
    }
  ])

  const activePalette = ref(colorPalettes.value[0] as (typeof colorPalettes.value)[number] | null);

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