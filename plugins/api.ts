import apiInstance from "~/api";
import { post, patch, get, del } from "~/helpers/http";

export default defineNuxtPlugin((nuxtApp) => {
  const { status, data, signOut } = useAuth();
  // @ts-ignore
  const token = ref<string | null>(data?.value?.token || null);

  watchEffect(() => {
    switch (status.value) {
      case 'authenticated':
        // @ts-ignore
        token.value = data.value?.token || null;
        break;
      case 'unauthenticated':
        token.value = null;
        // signOut();
        break;
      case 'loading':
        break;
      default:
        break;
    }

    if (data.value?.expires && Date.now() > Date.parse(data.value?.expires as string)) {
      token.value = null;
      signOut();
    }
  })

  const apiPost = <T, E>(path: string, body?: E, isBase: boolean = true) => post<T, E>(path, body, isBase,
    new Headers({
    ...(token && { Authorization: `Bearer ${token}` })
  })
  )

  const apiGet = <T>(path: string, filters?: Record<string, any>, isBase: boolean = true) => get<T>(path, filters, isBase,
    new Headers({
    ...(token && { Authorization: `Bearer ${token}` })
  })
  )

  const apiPatch = <T, E>(path: string, body?: E, isBase: boolean = true) => patch<T, E>(path, body, isBase,
    new Headers({
      ...(token && { Authorization: `Bearer ${token}` })
    })
  )

  const apiDelete = <T>(path: string, isBase: boolean = true) => del<T>(path, isBase,
    new Headers({
      ...(token && { Authorization: `Bearer ${token}` })
    })
  )

  const api = apiInstance(
    <T>(path: any, filters?: Record<string, any>, isBase: boolean = true) => apiGet<T>(path, filters, isBase),
    <T, E>(path: any, body?: E, isBase: boolean = true) => apiPost<T, E>(path, body, isBase),
    <T, E>(path: any, body?: E, isBase: boolean = true) => apiPatch<T, E>(path, body, isBase),
    <T>(path: any, isBase: boolean = true) => apiDelete<T>(path, isBase)
  )

  return {
    provide: { api }
  }
})