<template>
  <DashBoardLayout>
    <template #logo> <Sidebar /> </template>
    <template #title><h1>Dashboard</h1></template>
    <template #search><SearchBar /></template>
    <template #addCvButton>
      <Button size="sm" customStyle="max-w-72 flex grow">Generate CV</Button>
    </template>
    <template #options><Filters /></template>
    <template #items>
      <div class="flex flex-wrap px-3 gap-2 justify-start md:gap-12">
        <div v-for="cv in cvs" :key="cv.id" class="flex-grow md:flex-grow-0">
          <CvCard :title="cv.title" :subtitle="cv.subtitle" />
        </div>
      </div>
    </template>
    <template #addCvCircle>
      <CircleButton><img src="/icons/plus.svg" alt="add cv" /></CircleButton
    ></template>
  </DashBoardLayout>
</template>

<script setup lang="ts">
import DashBoardLayout from "../layouts/DashboardLayout.vue";
import SearchBar from "../components/dashboard/SearchBar.vue";
import Filters from "../components/dashboard/Filters.vue";
import Sidebar from "../components/dashboard/Sidebar.vue";
import CvCard from "../components/dashboard/CvCard.vue";
import Button from "../components/shared/Button.vue";
import CircleButton from "../components/shared/CircleButton.vue";

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
