<script setup>
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
        Übersicht über deine Aufgaben
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded-2xl shadow">
        <p class="text-gray-500">
          Gesamt
        </p>

        <h3 class="text-4xl font-bold mt-2">
          {{ totalTasks }}
        </h3>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow">
        <p class="text-gray-500">
          Offen
        </p>

        <h3 class="text-4xl font-bold mt-2">
          {{ openTasks }}
        </h3>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow">
        <p class="text-gray-500">
          Erledigt
        </p>

        <h3 class="text-4xl font-bold mt-2">
          {{ completedTasks }}
        </h3>
      </div>
    </div>
  </div>
</template>