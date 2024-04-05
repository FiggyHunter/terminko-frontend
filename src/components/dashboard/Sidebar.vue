<template>
  <!-- button which activates sidebar -->
  <button class="cursor-pointer" @click.native="isSidebarOpen = !isSidebarOpen">
    <img src="/icons/app-logo.svg" alt="app logo" />
    <img
      src="/icons/app-logo.svg"
      alt="app logo"
      class="transform -scale-x-100 mt-0.5"
    />
  </button>
  <!-- sidebar -->
  <OverlayLayout :isOpen="isSidebarOpen" @overlay-click="isSidebarOpen = false">
    <section
      class="bg-neutral-50 rounded-3xl rounded-tl-lg w-11/12 p-8 flex flex-col gap-y-8"
    >
      <div class="flex flex-row items-center justify-between">
        <div class="flex flex-row gap-3 items-center">
          <div>
            <img src="/icons/app-logo.svg" alt="app logo" />
            <img
              src="/icons/app-logo.svg"
              alt="app logo"
              class="transform -scale-x-100 mt-0.5"
            />
          </div>
          <h4>Si-Vi</h4>
        </div>
        <div>L-D</div>
      </div>
      <SidebarOptions
        title="Main menu"
        :menuOptions="mainMenu"
        :selectedOption="selectedOption"
        @option-select="selectedOption = $event"
      />
      <SidebarOptions
        title="Account"
        :menuOptions="account"
        :selectedOption="selectedOption"
        @option-select="selectedOption = $event"
      />
      <div class="flex flex-row items-center justify-center gap-6">
        <p class="small">powered by</p>
        <img src="/icons/skim-logo-full.svg" alt="logo" />
      </div>
      <div class="flex items-center justify-center">
        <CircleButton
          color="dark-outline"
          size="sm"
          @click.native="isSidebarOpen = !isSidebarOpen"
          ><img class="mx-auto" src="/icons/arrow-left.svg" alt="back"
        /></CircleButton>
      </div>
    </section>
  </OverlayLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SidebarOptions from "./SidebarOptions.vue";
import OverlayLayout from "../../layouts/OverlayLayout.vue";
import CircleButton from "../shared/CircleButton.vue";

const selectedOption = ref(1);

const mainMenu = ref([
  { id: 1, name: "Dashboard", iconPath: "/icons/chart.svg" },
  { id: 2, name: "Skim", iconPath: "/icons/skim-logo.svg" },
]);

const account = ref([
  { id: 3, name: "Profile", iconPath: "/icons/user.svg" },
  { id: 4, name: "Log out", iconPath: "/icons/logout.svg" },
]);

const isSidebarOpen = ref(true);
</script>
