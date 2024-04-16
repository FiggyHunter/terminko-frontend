<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-10"
    @click="emit('overlay-click')"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["overlay-click"]);

defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});
</script>
