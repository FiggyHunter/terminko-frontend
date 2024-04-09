<template>
  <div
    class="bg-primary-50 rounded-full pl-6 pr-3 py-3 flex flex-row align-center w-full text-primary-900"
  >
    <button class="left-0 flex items-center" @click="handleSearch">
      <img src="/icons/search.svg" alt="search icon" />
    </button>
    <input
      v-model="searchQuery"
      type="text"
      class="block w-full pl-3 bg-primary-50 outline-none"
      placeholder="Search..."
    />
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
