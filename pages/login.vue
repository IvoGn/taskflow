<script setup>
const email = ref('')
const password = ref('')

const { login, isAuthenticated, loadAuth } = useAuth()

onMounted(() => {
  loadAuth()

  if (isAuthenticated.value) {
    navigateTo('/')
  }
})

const handleLogin = () => {
  if (!email.value || !password.value) return

  login()

  navigateTo('/')
}
</script>

<template>
  <div class="flex items-center justify-center min-h-[80vh]">
    <div class="bg-white p-8 rounded-2xl shadow w-full max-w-md">
      <h1 class="text-3xl font-bold mb-2">
        Sign In
      </h1>

      <p class="text-gray-500 mb-6">
        Login to your TaskFlow dashboard
      </p>

      <div class="space-y-4">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full border border-gray-300 rounded-xl px-4 py-3"
        >

        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full border border-gray-300 rounded-xl px-4 py-3"
        >

        <button
          @click="handleLogin"
          class="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
        >
          Sign In
        </button>
      </div>
    </div>
  </div>
</template>