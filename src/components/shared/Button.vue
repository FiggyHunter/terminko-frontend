<template>
  <button
    :type="type || 'button'"
    :class="
      `rounded-3xl gap-2 flex justify-center align-center ${
        color === 'secondary-outline'
          ? 'bg-white text-primary-900 border-neutral-400 '
          : color === 'secondary-fill'
            ? 'bg-secondary-900 text-white border border-white '
            : color === 'primary-outline'
              ? 'bg-white text-primary-900 border border-primary-900 '
              : 'bg-primary text-white '
      }` +
      `${
        size === 'sm'
          ? 'small border px-5 py-3.5 '
          : size === 'lg'
            ? 'large border-2 px-9 py-6 '
            : size === 'xl'
              ? 'large border-2 px-14 py-7 '
              : 'medium border px-6 py-5 '
      }` +
      `${customStyle ?? customStyle}`
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
      | "primary-outline"
      | "secondary-fill"
      | "secondary-outline"
      | undefined,
  },
  customStyle: {
    type: String,
    required: false,
  },
});
</script>
