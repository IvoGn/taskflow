<script setup>
definePageMeta({
  middleware: 'auth'
})

const route = useRoute()

const newTask = ref('')
const newTaskDueDate = ref('')

const currentFilter = ref(
  route.query.filter || 'all'
)

const {
  tasks,
  addTask,
  removeTask,
  toggleTask,
  updateTask,
  loadTasks
} = useTasks()

onMounted(() => {
  loadTasks()
})

const handleAddTask = () => {
  if (!newTask.value.trim()) return

  addTask(newTask.value, newTaskDueDate.value || null)

  newTask.value = ''
  newTaskDueDate.value = ''
}

const filteredTasks = computed(() => {
  if (currentFilter.value === 'open') {
    return tasks.value.filter(task => !task.completed)
  }

  if (currentFilter.value === 'completed') {
    return tasks.value.filter(task => task.completed)
  }

  return tasks.value
})
</script>

<template>
  <div>
    <div class="flex justify-between items-center mb-8">
      <div>
        <h2 class="text-3xl font-bold">
          Tasks
        </h2>

        <p class="text-gray-500 mt-2">
          Manage your tasks
        </p>
      </div>
    </div>

    <div class="bg-white p-4 rounded-2xl shadow mb-6">
      <div class="flex gap-3">
        <input
          v-model="newTask"
          type="text"
          placeholder="New task..."
          class="flex-1 border border-gray-300 rounded-xl px-4 py-2"
        >

        <input
          v-model="newTaskDueDate"
          type="date"
          class="border border-gray-300 rounded-xl px-4 py-2"
        >

        <button
          @click="handleAddTask"
          class="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition"
        >
          Add Task
        </button>
      </div>
    </div>

    <div class="flex gap-3 mb-6">
      <button
        @click="currentFilter = 'all'"
        class="px-4 py-2 rounded-xl transition"
        :class="
          currentFilter === 'all'
            ? 'bg-black text-white'
            : 'bg-white shadow'
        "
      >
        All
      </button>

      <button
        @click="currentFilter = 'open'"
        class="px-4 py-2 rounded-xl transition"
        :class="
          currentFilter === 'open'
            ? 'bg-black text-white'
            : 'bg-white shadow'
        "
      >
        Open
      </button>

      <button
        @click="currentFilter = 'completed'"
        class="px-4 py-2 rounded-xl transition"
        :class="
          currentFilter === 'completed'
            ? 'bg-black text-white'
            : 'bg-white shadow'
        "
      >
        Completed
      </button>
    </div>

    <div class="space-y-4">
      <TaskCard
        v-for="task in filteredTasks"
        :key="task.id"
        :task="task"
        @toggle="toggleTask"
        @delete="removeTask"
        @update="updateTask"
      />
    </div>
  </div>
</template>