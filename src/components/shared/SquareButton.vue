<template>
  <button
    :type="type || 'button'"
    :class="
      `rounded-lg ${
        color === 'secondary'
          ? 'bg-neutral-100 border border-neutral-500 '
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
    type: Object as () => "primary" | "secondary",
  },
});
</script>
