<template>
  <div>
    <h5>{{ title }}</h5>
    <ul>
      <li><h6>Dashboard</h6></li>
      <li>
        <h6>Skim</h6>
        icon
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    value: String,
    required: true,
  },
});
</script>
