<template>
  <button class="cursor-pointer" @click.native="logoClick">
    <img src="/icons/app-logo.svg" alt="app logo" />
    <img
      src="/icons/app-logo.svg"
      alt="app logo"
      class="transform -scale-x-100 mt-0.5"
    />
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(["logo-click"]);

const logoClick = () => {
  emit("logo-click");
};
</script>
