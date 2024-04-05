<template>
  <DashBoardLayout>
    <template #topbar>
      <div class="flex flex-row justify-center items-center px-1 gap-2">
        <Sidebar /><SearchBar />
      </div>
    </template>
    <template #options><Filters /></template>
    <template #items>
      <ol v-for="cv in cvs" :key="cv.id">
        <li class="w-full">
          <CvCard :title="cv.title" :subtitle="cv.subtitle" />
        </li>
      </ol>
    </template>
  </DashBoardLayout>
</template>

<script setup lang="ts">
import DashBoardLayout from "../layouts/DashboardLayout.vue";
import SearchBar from "../components/dashboard/SearchBar.vue";
import Filters from "../components/dashboard/Filters.vue";
import Sidebar from "../components/dashboard/Sidebar.vue";
import CvCard from "../components/dashboard/CvCard.vue";

const cvs = [
  {
    id: 1,
    title: "John Doe",
    subtitle: "Software Engineer",
  },
  {
    id: 2,
    title: "Mary Poppins",
    subtitle: "Writer",
  },
  {
    id: 3,
    title: "John Doe",
    subtitle: "Software Engineer",
  },
  {
    id: 4,
    title: "Mary Poppins",
    subtitle: "Writer",
  },
  {
    id: 5,
    title: "John Doe",
    subtitle: "Software Engineer",
  },
  {
    id: 6,
    title: "Mary Poppins",
    subtitle: "Writer",
  },
  {
    id: 7,
    title: "John Doe",
    subtitle: "Software Engineer",
  },
  {
    id: 8,
    title: "Mary Poppins",
    subtitle: "Writer",
  },
];
</script>
