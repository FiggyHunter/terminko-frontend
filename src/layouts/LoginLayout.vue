<template>
  <div
    class="flex flex-col w-full md:items-center lg:flex-row-reverse lg:items-center lg:justify-center lg:gap-x-12 lg:h-screen lg:w-full"
  >
    <div class="lg:w-1/2 lg:h-screen">
      <img
        src="/login-img.webp"
        alt="title"
        class="opacity-70 w-full lg:object-cover lg:h-screen"
      />
    </div>
    <div class="px-4 mt-4 md:w-3/4 lg:w-1/3 lg:mt-0">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
