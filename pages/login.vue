<script setup lang="ts">
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  }
})

const { status, signIn } = useAuth()
const { $toast } = useNuxtApp()
const router = useRouter()

const username = ref('kminchelle')
const password = ref('0lelplR')

const canLogin = computed(() => username.value && password.value)

watchEffect(() => {
  if (status.value === 'authenticated') {
    router.replace('/')
  }
})

const handleSubmit = async (e: Event) => {
  e.preventDefault()
  const session = await signIn('credentials', {
    username: username.value,
    password: password.value,
    redirect: false,
  })

  if (session) {
    $toast.success('Login sucessful')
    router.replace('/')
  }
}
</script>

<template>
  <SharedBg class="z-0 absolute inset-0 opacity-75"/>
  <div class="w-full h-screen bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg w-full sm:w-[400px] bg-opacity-70 backdrop-blur-lg">
        <img src="/logo.svg" alt="" srcset="" class="h-20 mx-auto">
        <h1 class="text-2xl font-bold mb-6 text-center text-gray-700 ">Banana Todo</h1>
        <form @submit.prevent="handleSubmit" class="text-black">
          <div class="mb-4">
            <label for="username" class="block text-gray-700 mb-2">Username</label>
            <input
              type="text"
              id="username"
              v-model="username"
              class="w-full border-2 border-gray-300 py-2 px-4 rounded-lg focus:outline-none focus:border-primary"
              placeholder="Enter your username"
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              class="w-full border-2 border-gray-300 py-2 px-4 rounded-lg focus:outline-none focus:border-primary"
              placeholder="Enter your password"
            />
          </div>
          <div class="mt-8 mb-4">
            <button
              type="submit"
              class="bg-primary text-white w-full py-2 rounded-lg focus:outline-none hover:bg-primary-dark disabled:opacity-75 disabled:cursor-not-allowed"
              :disabled="!canLogin"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
</template>