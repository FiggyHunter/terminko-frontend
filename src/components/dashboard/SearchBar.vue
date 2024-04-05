<template>
  <div
    class="bg-primary-50 rounded-full pl-6 pr-3 py-3 flex flex-row align-center text-primary-900"
  >
    <span class="left-0 flex items-center"
      ><img src="/icons/search.svg" alt="search icon"
    /></span>
    <input
      v-model="searchQuery"
      type="text"
      class="block w-full pl-3 bg-primary-50 outline-none"
      placeholder="Search..."
    />
    <Button @click="handleSearch" type="button" size="sm" color="primary-fill">
      Search
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Button from "../shared/Button.vue";

const searchQuery = ref("");

const handleSearch = () => {
  console.log("Searching for:", searchQuery.value);
};
</script>
