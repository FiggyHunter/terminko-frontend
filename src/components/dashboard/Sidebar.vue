<template>
  <button class="cursor-pointer" onclick="isSidebarOpen = !isSidebarOpen">
    <img src="/icons/app-logo.svg" alt="app logo" />
    <img
      src="/icons/app-logo.svg"
      alt="app logo"
      class="transform -scale-x-100 mt-0.5"
    />
  </button>

  <OverlayLayout :isOpen="isSidebarOpen">
    <section class="bg-neutral-50 w-11/12">
      <div class="flex flex-row justify-center items-center">
        <div>
          <img src="/icons/app-logo.svg" alt="app logo" />
          <img
            src="/icons/app-logo.svg"
            alt="app logo"
            class="transform -scale-x-100 mt-0.5"
          />
        </div>
        <h4>Si-Vi</h4>
        <div>L-D</div>
      </div>
      <div>
        <h5>Main menu</h5>
        <ul>
          <li><h6>Dashboard</h6></li>
          <li>
            <h6>Skim</h6>
            icon
          </li>
        </ul>
      </div>
      <div>
        <h5>Account</h5>
        <ul>
          <li><h6>Profile</h6></li>
          <li><h6>Logout</h6></li>
        </ul>
      </div>
      <div>
        <p class="small">powered by</p>
        SKIM logo
      </div>
      <CircleButton color="dark-outline" size="sm"><</CircleButton>
    </section>
  </OverlayLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import OverlayLayout from "../../layouts/OverlayLayout.vue";
import CircleButton from "../shared/CircleButton.vue";

const isSidebarOpen = ref(true);
</script>
