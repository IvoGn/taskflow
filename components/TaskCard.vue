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
const showDeleteConfirm = ref(false)

const editedTitle = ref(props.task.title)
const editedDueDate = ref(props.task.dueDate)

const isOverdue = computed(() => {
  // Check if task is past due. Don't count completed tasks as overdue.
  if (!props.task.dueDate || props.task.completed) return false
  const dueDate = new Date(props.task.dueDate)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return dueDate < today
})

// Format date for display as "Jan 15, 2026"
const formattedDueDate = computed(() => {
  if (!props.task.dueDate) return null
  return new Date(props.task.dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
})

const startEditing = () => {
  isEditing.value = true
}

const saveEdit = () => {
  if (!editedTitle.value.trim()) return

  emit(
    'update',
    props.task.id,
    editedTitle.value,
    editedDueDate.value || null
  )

  isEditing.value = false
}

const cancelEdit = () => {
  editedTitle.value = props.task.title
  editedDueDate.value = props.task.dueDate

  isEditing.value = false
}

const confirmDelete = () => {
  emit('delete', props.task.id)
  showDeleteConfirm.value = false
}

const cancelDelete = () => {
  showDeleteConfirm.value = false
}
</script>

<template>
  <div
    class="bg-white rounded-2xl shadow p-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4"
  >
    <div class="flex-1 min-w-0">
      <template v-if="isEditing">
        <div class="flex flex-col gap-2">
          <input
            v-model="editedTitle"
            type="text"
            class="border border-gray-300 rounded-xl px-3 py-2 w-full"
          >
          <input
            v-model="editedDueDate"
            type="date"
            class="border border-gray-300 rounded-xl px-3 py-2 w-full"
          >
        </div>
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

          <div v-if="isOverdue" class="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Overdue
          </div>

          <div v-if="formattedDueDate" class="text-gray-500 text-sm">
            {{ formattedDueDate }}
          </div>
        </div>
      </template>
    </div>

    <div class="flex flex-col sm:flex-row gap-2 md:shrink-0">
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
          @click="showDeleteConfirm = true"
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

  <DeleteConfirmModal
    :isOpen="showDeleteConfirm"
    :taskTitle="task.title"
    @confirm="confirmDelete"
    @cancel="cancelDelete"
  />
</template>