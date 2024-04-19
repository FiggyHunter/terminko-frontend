<template>
  <div
    class="flex flex-col md:flex-row overflow-x-hidden md:w-screen md:h-screen pt-4 gap-x-8"
  >
    <div class="md:ml-4">
      <slot name="sidebar"></slot>
    </div>
    <div class="flex flex-col w-screen md:gap-4 md:overflow-y-scroll">
      <section
        class="fixed top-0 pt-4 pb-2 flex flex-row items-center justify-between w-full bg-white rounded-b-xl border-b-0.5 px-3 gap-2 md:border-0 md:py-0 md:static md:rounded-none"
      >
        <div class="flex flex-row gap-4 items-center w-full md:w-10/12">
          <div class="md:hidden">
            <slot name="logo"></slot>
          </div>
          <div class="hidden lg:block">
            <slot name="title"></slot>
          </div>
          <div class="w-full md:max-w-xl flex grow">
            <slot name="search"></slot>
          </div>
        </div>
        <div class="hidden md:block min-w-lg">
          <slot name="addCvButton"></slot>
        </div>
      </section>
      <section class="mt-16 md:mt-0">
        <div class="px-3">
          <slot name="options"></slot>
        </div>
        <slot name="items"></slot>
      </section>
    </div>
    <div class="fixed bottom-10 right-10 md:hidden">
      <slot name="addCvCircle"></slot>
    </div>
  </div>
</template>
