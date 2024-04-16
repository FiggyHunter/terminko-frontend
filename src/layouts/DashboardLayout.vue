<template>
  <div class="flex flex-row md:w-screen md:h-screen pt-4 gap-x-8">
    <Transition name="expand-shrink">
      <div class="flex flex-col md:ml-4 hidden md:block">
        <slot name="sidebar"></slot>
      </div>
    </Transition>
    <div class="flex flex-col w-screen md:gap-4 md:overflow-y-scroll">
      <section
        class="fixed bg-white rounded-b-xl w-full flex flex-row items-center justify-between px-3 gap-2 md:static md:rounded-none"
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

<style scoped>
.expand-shrink-enter-active,
.expand-shrink-leave-active,
.expand-shrink-enter-from,
.expand-shrink-leave-to {
  transform-origin: left;
}
.expand-shrink-enter {
  transform: scaleX(0);
}

.expand-shrink-leave-to {
  transform: scaleX(0);
}

@keyframes expand {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}

@keyframes shrink {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}

.expand-shrink-enter-active {
  animation: expand 0.5s forwards;
}

.expand-shrink-leave-active {
  animation: shrink 0.5s forwards;
}
</style>
