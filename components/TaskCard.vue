<script setup>
defineProps({
  task: {
    type: Object,
    required: true
  }
})

const emit = defineEmits([
  'toggle',
  'delete'
])
</script>

<template>
  <div
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
        @click="emit('toggle', task.id)"
        class="bg-green-500 text-white px-4 py-2 rounded-xl"
      >
        {{ task.completed ? 'Undo' : 'Done' }}
      </button>

      <button
        @click="emit('delete', task.id)"
        class="bg-red-500 text-white px-4 py-2 rounded-xl"
      >
        Delete
      </button>
    </div>
  </div>
</template>