<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold">
          TaskFlow
        </h1>

        <nav class="flex gap-4">
          <NuxtLink
            to="/"
            class="hover:text-blue-500 transition"
          >
            Dashboard
          </NuxtLink>

          <NuxtLink
            to="/tasks"
            class="hover:text-blue-500 transition"
          >
            Tasks
          </NuxtLink>
        </nav>
      </div>
    </header>

    <main class="max-w-7xl mx-auto p-6">
      <slot />
    </main>
  </div>
</template>