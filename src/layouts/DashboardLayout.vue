<template>
  <div class="flex flex-row md:w-screen md:h-screen pt-4 gap-x-8">
    <div
      class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0 md:ml-4"
    >
      <slot name="sidebar"></slot>
    </div>
    <div class="flex flex-col w-screen md:gap-4 md:overflow-y-scroll">
      <section
        class="fixed flex flex-row items-center justify-between w-full bg-white rounded-b-xl px-3 gap-2 md:static md:rounded-none"
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
        <div class="hidden lg:block min-w-lg">
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
    <div class="fixed bottom-5 right-5 lg:hidden">
      <slot name="addCvCircle"></slot>
    </div>
  </div>
</template>
