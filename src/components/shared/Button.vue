<template>
  <button
    :type="type || 'button'"
    :class="`${bgColor || 'bg-blue-600'} ${
      color ? color : 'text-white'
    } font-bold py-2 px-4 rounded-lg ${width || 'w-full'}`"
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
