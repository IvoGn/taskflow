<script setup>
// Main layout component for authenticated pages
// Provides header with navigation and logout functionality
// Uses loadAuth() on mount to verify user is authenticated

const route = useRoute()

const {
  logout,
  isAuthenticated,
  loadAuth
} = useAuth()

onMounted(() => {
  loadAuth()
})

const handleLogout = () => {
  logout()

  navigateTo('/login')
}
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow">
      <div
        class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center"
      >
        <h1 class="text-2xl font-bold">
          TaskFlow
        </h1>

        <div
          v-if="isAuthenticated"
          class="flex items-center gap-4"
        >
          <NuxtLink
            v-if="route.path !== '/'"
            to="/"
            class="text-lg font-medium hover:text-blue-500 transition"
          >
            Dashboard
          </NuxtLink>

          <NuxtLink
            v-if="route.path !== '/tasks'"
            to="/tasks"
            class="text-lg font-medium hover:text-blue-500 transition"
          >
            Tasks
          </NuxtLink>

          <button
            @click="handleLogout"
            class="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto p-6">
      <slot />
    </main>
  </div>
</template>