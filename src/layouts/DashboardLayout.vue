<template>
  <div class="flex flex-col w-screen">
    <section
      class="fixed bg-white rounded-b-xl w-full flex flex-row items-center px-3 pt-2 gap-2"
    >
      <slot name="topbar"></slot>
    </section>
    <section class="mt-16 px-1">
      <slot name="options"></slot>
      <slot name="items"></slot>
    </section>
  </div>
</template>
