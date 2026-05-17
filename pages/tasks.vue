<script setup>
const newTask = ref('')

const {
  tasks,
  addTask,
  removeTask,
  toggleTask,
  loadTasks
} = useTasks()

onMounted(() => {
  loadTasks()
})

const handleAddTask = () => {
  if (!newTask.value.trim()) return

  addTask(newTask.value)

  newTask.value = ''
}
</script>

<template>
  <div>
    <div class="flex justify-between items-center mb-8">
      <div>
        <h2 class="text-3xl font-bold">
          Tasks
        </h2>

        <p class="text-gray-500 mt-2">
          Verwalte deine Aufgaben
        </p>
      </div>
    </div>

    <div class="bg-white p-4 rounded-2xl shadow mb-6">
      <div class="flex gap-3">
        <input
          v-model="newTask"
          type="text"
          placeholder="Neue Aufgabe..."
          class="flex-1 border border-gray-300 rounded-xl px-4 py-2"
        >

        <button
          @click="handleAddTask"
          class="bg-black text-white px-5 py-2 rounded-xl"
        >
          Hinzufügen
        </button>
      </div>
    </div>

    <div class="space-y-4">
      <TaskCard
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @toggle="toggleTask"
        @delete="removeTask"
      />
    </div>
  </div>
</template>