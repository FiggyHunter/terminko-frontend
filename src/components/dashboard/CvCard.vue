<template>
  <div class="w-40 h-64 flex flex-col items-center gap-4 p-2 md:w-72 md:h-96">
    <img class="bg-black h-40 w-full md:h-72" src="/CV.png" alt="temp" />
    <div class="flex flex-col gap-2 items-start w-full ml-2">
      <h6>
        {{ title }}
      </h6>
      <p class="xsmall">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
});
</script>
