<template>
  <DashBoardLayout>
    <template #topbar>
      <div class="flex flex-row justify-center items-center px-1 gap-2">
        <Sidebar /><SearchBar />
      </div>
    </template>
    <template #options><Filters /></template>
    <template #items></template>
  </DashBoardLayout>
</template>

<script setup lang="ts">
import DashBoardLayout from "../layouts/DashboardLayout.vue";
import SearchBar from "../components/dashboard/SearchBar.vue";
import Filters from "../components/dashboard/Filters.vue";
import Sidebar from "../components/dashboard/Sidebar.vue";
</script>
