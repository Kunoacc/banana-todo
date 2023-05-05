import api from "./api";

declare module '#app' {
  interface NuxtApp {
    $api: ReturnType<typeof api>
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $api: ReturnType<typeof api>
  }
}