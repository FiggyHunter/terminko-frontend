<template>
  <Transition name="fade">
    <section
      :class="`
      ${showSidebar ? 'block' : 'hidden'} md:block
      bg-neutral-50 rounded-3xl rounded-tl-lg 
    border-neutral-300 border-0.5 shadow-xs p-8 flex 
    flex-col gap-y-8 z-50 ${showOptionNames ? 'expanded' : 'collapsed'} box`"
      @click.stop
    >
      <div class="flex flex-row items-center justify-center">
        <div class="flex flex-row gap-2 items-center justify-center">
          <div>
            <img src="/icons/app-logo.svg" alt="app logo" class="w-8 h-4" />
            <img
              src="/icons/app-logo-flipped.svg"
              alt="app logo"
              class="mt-0.5 w-8 h-4"
            />
          </div>
          <h4
            v-show="showOptionNames"
            class="overflow-hidden whitespace-nowrap"
          >
            Si-Vi
          </h4>
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
      <div class="flex flex-row items-center justify-center gap-6 h-custom">
        <p
          class="small overflow-hidden whitespace-nowrap"
          v-show="showOptionNames"
        >
          powered by
        </p>
        <img src="/icons/skim-logo-full.svg" alt="logo" />
      </div>
      <div class="flex items-center justify-center">
        <button
          @click.native="showOptionNames = !showOptionNames"
          class="border-0.5 border-neutral-300 rounded-6xl"
        >
          <img
            :src="`${showOptionNames ? '/icons/arrow-left.svg' : '/icons/arrow-right.svg'}`"
            alt="arrow"
          />
        </button>
      </div>
    </section>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SidebarOptions from "./SidebarOptions.vue";

defineProps({
  showSidebar: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const selectedOption = ref(1);
const showOptionNames = ref(true);

const mainMenu = ref([
  {
    id: 1,
    name: "Dashboard",
    iconBlack: "/icons/chart-black.svg",
    iconOrange: "/icons/chart-orange.svg",
  },
  {
    id: 2,
    name: "Skim",
    iconBlack: "/icons/skim-logo-black.svg",
    iconOrange: "/icons/skim-logo-orange.svg",
  },
]);

const account = ref([
  {
    id: 3,
    name: "Profile",
    iconBlack: "/icons/user-black.svg",
    iconOrange: "/icons/user-orange.svg",
  },
  {
    id: 4,
    name: "Log out",
    iconBlack: "/icons/logout-black.svg",
    iconOrange: "/icons/logout-orange.svg",
  },
]);
</script>

<style scoped>
.box {
  transition: width 0.3s ease-in-out;
}

.expanded {
  width: 237px;
}

.collapsed {
  width: 135px;
}

.h-custom {
  height: 26px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
