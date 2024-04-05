<template>
  <div class="flex flex-col w-screen">
    <section class="">
      <slot name="topbar" class="flex flex-row"></slot>
    </section>
    <section class="mt-2 px-1">
      <slot name="options"></slot>
      <slot name="items"></slot>
    </section>
    <section class="absolute hidden border-4 border-orange-500 w-full h-screen">
      <slot name="sidebar"></slot>
    </section>
  </div>
</template>
