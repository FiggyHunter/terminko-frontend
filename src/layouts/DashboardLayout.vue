<template>
  <div class="flex flex-col w-screen">
    <section class="fixed">
      <slot name="topbar"></slot>
    </section>
    <section class="mt-20 px-1">
      <slot name="options"></slot>
      <slot name="items"></slot>
    </section>
    <section class="absolute hidden border-4 border-orange-500 w-full h-screen">
      <slot name="sidebar"></slot>
    </section>
  </div>
</template>
