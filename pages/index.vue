<script setup>
// Dashboard page showing task statistics overview
// Displays total tasks, open tasks, and completed tasks
// Each stat card is clickable and navigates to the tasks page with relevant filter

definePageMeta({
  middleware: 'auth'
})

const router = useRouter()

const { tasks, loadTasks } = useTasks()

onMounted(() => {
  loadTasks()
})

const totalTasks = computed(() => {
  return tasks.value.length
})

const completedTasks = computed(() => {
  return tasks.value.filter(
    task => task.completed
  ).length
})

const openTasks = computed(() => {
  return tasks.value.filter(
    task => !task.completed
  ).length
})
</script>

<template>
  <div>
    <div class="mb-8">
      <h2 class="text-3xl font-bold">
        Dashboard
      </h2>

      <p class="text-gray-500 mt-2">
        Overview of your tasks
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      <button
        @click="router.push('/tasks?filter=all')"
        class="bg-white p-6 rounded-2xl shadow text-left hover:shadow-lg transition"
      >
        <p class="text-gray-500">
          Total Tasks
        </p>

        <h3 class="text-4xl font-bold mt-2">
          {{ totalTasks }}
        </h3>
      </button>

      <button
        @click="router.push('/tasks?filter=open')"
        class="bg-white p-6 rounded-2xl shadow text-left hover:shadow-lg transition"
      >
        <p class="text-gray-500">
          Open Tasks
        </p>

        <h3 class="text-4xl font-bold mt-2">
          {{ openTasks }}
        </h3>
      </button>

      <button
        @click="router.push('/tasks?filter=completed')"
        class="bg-white p-6 rounded-2xl shadow text-left hover:shadow-lg transition"
      >
        <p class="text-gray-500">
          Completed Tasks
        </p>

        <h3 class="text-4xl font-bold mt-2">
          {{ completedTasks }}
        </h3>
      </button>
    </div>
  </div>
</template>