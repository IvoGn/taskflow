<script setup>
const props = defineProps({
  task: {
    type: Object,
    required: true
  }
})

const emit = defineEmits([
  'toggle',
  'delete',
  'update'
])

const isEditing = ref(false)

const editedTitle = ref(props.task.title)

const startEditing = () => {
  isEditing.value = true
}

const saveEdit = () => {
  if (!editedTitle.value.trim()) return

  emit(
    'update',
    props.task.id,
    editedTitle.value
  )

  isEditing.value = false
}

const cancelEdit = () => {
  editedTitle.value = props.task.title

  isEditing.value = false
}
</script>

<template>
  <div
    class="bg-white rounded-2xl shadow p-4 flex justify-between items-center gap-4"
  >
    <div class="flex-1 min-w-0">
      <template v-if="isEditing">
        <input
          v-model="editedTitle"
          type="text"
          class="border border-gray-300 rounded-xl px-3 py-2 w-full"
        >
      </template>

      <template v-else>
        <div class="flex flex-col sm:flex-row sm:items-center gap-2">
          <h3
            class="font-semibold text-lg break-words overflow-hidden"
            :class="task.completed ? 'line-through text-gray-400' : ''"
          >
            {{ task.title }}
          </h3>

          <StatusBadge :completed="task.completed" />
        </div>
      </template>
    </div>

    <div class="flex gap-2 shrink-0">
      <template v-if="isEditing">
        <button
          @click="saveEdit"
          class="bg-blue-500 text-white px-4 py-2 rounded-xl"
        >
          Save
        </button>

        <button
          @click="cancelEdit"
          class="bg-gray-400 text-white px-4 py-2 rounded-xl"
        >
          Cancel
        </button>

        <button
          @click="emit('delete', task.id)"
          class="bg-red-500 text-white px-4 py-2 rounded-xl"
        >
          Delete
        </button>
      </template>

      <template v-else>
        <button
          @click="emit('toggle', task.id)"
          class="bg-green-500 text-white px-4 py-2 rounded-xl"
        >
          {{ task.completed ? 'Undo' : 'Complete' }}
        </button>

        <button
          @click="startEditing"
          class="bg-blue-500 text-white px-4 py-2 rounded-xl"
        >
          Edit
        </button>
      </template>
    </div>
  </div>
</template>