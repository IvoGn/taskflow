<script setup>
const tasks = ref([
  {
    id: 1,
    title: 'Nuxt Projekt erstellen',
    completed: false
  },
  {
    id: 2,
    title: 'Dashboard designen',
    completed: true
  }
])

const newTask = ref('')

const addTask = () => {
  if (!newTask.value.trim()) return

  tasks.value.push({
    id: Date.now(),
    title: newTask.value,
    completed: false
  })

  newTask.value = ''
}

const removeTask = (id) => {
  tasks.value = tasks.value.filter(task => task.id !== id)
}

const toggleTask = (id) => {
  const task = tasks.value.find(task => task.id === id)

  if (task) {
    task.completed = !task.completed
  }
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
          @click="addTask"
          class="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition"
        >
          Hinzufügen
        </button>
      </div>
    </div>

    <div class="space-y-4">
      <div
        v-for="task in tasks"
        :key="task.id"
        class="bg-white rounded-2xl shadow p-4 flex justify-between items-center"
      >
        <div>
          <h3
            class="font-semibold text-lg"
            :class="task.completed ? 'line-through text-gray-400' : ''"
          >
            {{ task.title }}
          </h3>
        </div>

        <div class="flex gap-2">
          <button
            @click="toggleTask(task.id)"
            class="bg-green-500 text-white px-4 py-2 rounded-xl"
          >
            {{ task.completed ? 'Undo' : 'Done' }}
          </button>

          <button
            @click="removeTask(task.id)"
            class="bg-red-500 text-white px-4 py-2 rounded-xl"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>