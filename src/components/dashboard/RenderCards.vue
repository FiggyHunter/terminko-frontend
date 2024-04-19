<template>
  <div class="flex flex-wrap px-3 gap-2 justify-start md:gap-12">
    <div v-for="cv in cvs" :key="cv.id" class="flex md:flex-grow-0">
      <CvCard :title="cv.title" :subtitle="cv.subtitle" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CvCard from "./CvCard.vue";

defineProps({
  cvs: {
    type: Array as () => { id: number; title: string; subtitle: string }[],
    required: true,
  },
});
</script>
