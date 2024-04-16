<template>
  <!-- button which activates sidebar -->
  <!-- <button class="cursor-pointer" @click.native="isSidebarOpen = !isSidebarOpen">
    <img src="/icons/app-logo.svg" alt="app logo" />
    <img
      src="/icons/app-logo.svg"
      alt="app logo"
      class="transform -scale-x-100 mt-0.5"
    />
  </button> -->
  <!-- sidebar -->
  <transition name="expand-shrink">
    <!-- <OverlayLayout
      :isOpen="isSidebarOpen"
      @overlay-click="isSidebarOpen = false"
    > -->
    <section
      class="bg-neutral-50 rounded-3xl rounded-tl-lg border-neutral-300 border-0.5 shadow-xs w-60 p-8 flex flex-col gap-y-8 z-50 w-max h-auto"
      @click.stop
      v-show="isSidebarOpen"
    >
      <div class="flex flex-row items-center justify-center">
        <div class="flex flex-row gap-2 items-center">
          <div>
            <img src="/icons/app-logo.svg" alt="app logo" />
            <img
              src="/icons/app-logo.svg"
              alt="app logo"
              class="transform -scale-x-100 mt-0.5"
            />
          </div>
          <h4 v-show="showOptionNames">Si-Vi</h4>
        </div>
        <!-- Light and dark mode -->
        <!-- <div
          class="bg-neutral-200 rounded-3xl flex space-between gap-2 py-1 px-2"
        >
          <button class="primary-400">
            <img src="/icons/sun.svg" alt="light mode" />
          </button>
          <button><img src="/icons/moon.svg" alt="dark mode" /></button>
        </div> -->
      </div>
      <SidebarOptions
        title="Main menu"
        :menuOptions="mainMenu"
        :selectedOption="selectedOption"
        @option-select="selectedOption = $event"
        :showOptionNames="showOptionNames"
      />
      <SidebarOptions
        title="Account"
        :menuOptions="account"
        :selectedOption="selectedOption"
        @option-select="selectedOption = $event"
        :showOptionNames="showOptionNames"
      />
      <div class="flex flex-row items-center justify-center gap-6">
        <p class="small" v-show="showOptionNames">powered by</p>
        <img src="/icons/skim-logo-full.svg" alt="logo" />
      </div>
      <div class="flex items-center justify-center">
        <CircleButton
          color="dark-outline"
          size="sm"
          @click.native="showOptionNames = !showOptionNames"
          ><img class="mx-auto" src="/icons/arrow-left.svg" alt="back"
        /></CircleButton>
      </div>
    </section>
    <!-- </OverlayLayout> -->
  </transition>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SidebarOptions from "./SidebarOptions.vue";
// import OverlayLayout from "../../layouts/OverlayLayout.vue";
import CircleButton from "../shared/CircleButton.vue";

const selectedOption = ref(1);
const showOptionNames = ref(true);
const isSidebarOpen = ref(true);

const mainMenu = ref([
  { id: 1, name: "Dashboard", iconPath: "/icons/chart.svg" },
  { id: 2, name: "Skim", iconPath: "/icons/skim-logo.svg" },
]);

const account = ref([
  { id: 3, name: "Profile", iconPath: "/icons/user.svg" },
  { id: 4, name: "Log out", iconPath: "/icons/logout.svg" },
]);
</script>

<style scoped>
.expand-shrink-enter-active,
.expand-shrink-leave-active,
.expand-shrink-enter-from,
.expand-shrink-leave-to {
  transform-origin: left;
}
.expand-shrink-enter,
.expand-shrink-leave-to {
  transform: scaleX(0);
}

@keyframes expand {
  0% {
    transform: scaleX(0);
    opacity: 0;
  }
  100% {
    transform: scaleX(1);
    opacity: 1;
  }
}

@keyframes shrink {
  0% {
    transform: scaleX(1);
    opacity: 1;
  }
  100% {
    transform: scaleX(0);
    opacity: 0;
  }
}

.expand-shrink-enter-active {
  animation: expand 0.5s forwards;
}

.expand-shrink-leave-active {
  animation: shrink 0.5s forwards;
}
</style>
