<script setup>
defineProps({
  completed: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <span
    class="px-3 py-1 rounded-full text-sm font-medium"
    :class="
      completed
        ? 'bg-green-100 text-green-700'
        : 'bg-yellow-100 text-yellow-700'
    "
  >
    {{ completed ? 'Completed' : 'Open' }}
  </span>
</template>