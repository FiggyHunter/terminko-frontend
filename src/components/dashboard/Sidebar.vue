<template>
  <div
    :class="`${
      showSidebar
        ? 'fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-20 z-10 md:static md:block md:bg-transparent'
        : 'hidden md:static md:block'
    }`"
    @click.native="emit('sidebar-close')"
  >
    <section
      :class="`flex bg-neutral-50 rounded-3xl rounded-tl-lg 
    border-neutral-300 border-0.5 shadow-xs p-8 flex-col gap-y-8 z-50 
    ${showOptionNames || showSidebar ? 'expanded' : 'collapsed'} sidebar-transition`"
      @click.stop
    >
      <div class="flex flex-row items-center justify-center">
        <div class="flex flex-row gap-2 items-center justify-center">
          <LogoButton />
          <h4
            v-show="showOptionNames || showSidebar"
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
        :showOptionNames="showSidebar ? true : showOptionNames"
      />
      <SidebarOptions
        title="Account"
        :menuOptions="account"
        :selectedOption="selectedOption"
        @option-select="selectedOption = $event"
        :showOptionNames="showSidebar ? true : showOptionNames"
      />
      <div class="flex flex-row items-center justify-center gap-6 h-6.5">
        <p
          class="small overflow-hidden whitespace-nowrap"
          v-show="showSidebar ? true : showOptionNames"
        >
          powered by
        </p>
        <img src="/icons/skim-logo-full.svg" alt="logo" />
      </div>
      <div class="flex items-center justify-center">
        <button
          @click.native="handleArrowClick()"
          class="border-0.5 border-neutral-300 rounded-6xl"
        >
          <img
            :src="`${showSidebar || showOptionNames ? '/icons/arrow-left.svg' : '/icons/arrow-right.svg'}`"
            alt="arrow"
          />
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from "vue";
import SidebarOptions from "./SidebarOptions.vue";
import LogoButton from "./LogoButton.vue";

const props = defineProps({
  showSidebar: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const { showSidebar } = toRefs(props);
const selectedOption = ref(1);
const showOptionNames = ref(true);

const emit = defineEmits(["sidebar-close"]);

const handleArrowClick = () => {
  if (showSidebar.value === true) emit("sidebar-close");
  else showOptionNames.value = !showOptionNames.value;
};
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
.sidebar-transition {
  transition: width 0.3s ease-in-out;
}

.expanded {
  width: 237px;
}

.collapsed {
  width: 135px;
}
</style>
