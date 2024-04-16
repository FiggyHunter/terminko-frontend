<template>
  <button
    :type="type || 'button'"
    :class="
      `rounded-full flex justify-center align-center p-3 ${
        color === 'light-outline'
          ? 'bg-white text-primary-900 border border-primary-100 '
          : color === 'normal-outline'
            ? 'bbg-white text-primary-900 border border-primary-700 '
            : color === 'dark-outline'
              ? 'bg-white text-primary-900 border border-primary-900 '
              : 'bg-primary text-white '
      }` +
      `${
        size === 'sm'
          ? 'w-10 h-10'
          : size === 'lg'
            ? 'w-16 h-16 '
            : size === 'xl'
              ? 'w-24 h-24'
              : 'w-12 h-12'
      }`
    "
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: Object as () => "button" | "submit" | "reset" | undefined,
  },
  size: {
    type: Object as () => "sm" | "md" | "lg" | "xl" | undefined,
  },
  color: {
    type: Object as () =>
      | "primary-fill"
      | "light-outline"
      | "normal-outline"
      | "dark-outline"
      | undefined,
  },
});
</script>
