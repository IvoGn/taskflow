<script setup>
// Reusable confirmation modal for destructive actions
// Props: isOpen (boolean), taskTitle (string for confirmation text)
// Emits: 'confirm' and 'cancel' events to parent

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  taskTitle: {
    type: String,
    required: true
  }
})

const emit = defineEmits([
  'confirm',
  'cancel'
])
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-2xl shadow-lg p-6 max-w-sm mx-4">
      <h3 class="text-xl font-bold mb-4 text-center">Delete Task?</h3>
      <p class="text-gray-600 mb-6 text-center">
        Are you sure you want to delete "{{ taskTitle }}"? This action cannot be undone.
      </p>
      <div class="flex gap-3 justify-center">
        <button
          @click="emit('cancel')"
          class="bg-gray-400 text-white px-4 py-2 rounded-xl hover:bg-gray-500 transition"
        >
          Cancel
        </button>
        <button
          @click="emit('confirm')"
          class="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>
