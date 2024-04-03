<template>
  <button
    :type="type || 'button'"
    :class="`${bgColor || 'bg-blue-600'} ${
      color ? color : 'text-white'
    } py-3 px-4 rounded-3xl ${width || 'w-full'} text-md bg-primary text-neutral-50 `"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: Object as () => "button" | "submit" | "reset" | undefined,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    required: false,
  },
  width: {
    type: String,
    required: false,
  },
});
</script>
