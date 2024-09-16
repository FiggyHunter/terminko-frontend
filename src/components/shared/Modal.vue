<template>
  <transition name="modal" appear>
    <OverlayLayout :isOpen="isOpen" @overlay-click="closeModal">
      <div
        v-if="isOpen"
        class="bg-white rounded-xl p-4 w-full my-6 mx-2 lg:w-1/2 2xl:w-1/3"
      >
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-3xl mb-1 text-blue-500 font-semibold">{{ title }}</h2>
          <button
            @click="closeModal"
            class="text-gray-500 text-lg px-2 py-0 bg-transparent hover:text-gray-700 focus:outline-none rounded-lg"
          >
            X
          </button>
        </div>
        <div>
          <slot></slot>
        </div>
      </div>
    </OverlayLayout>
  </transition>
</template>

<script setup lang="ts">
import OverlayLayout from "../../layouts/OverlayLayout.vue";
defineProps({
  isOpen: {
    type: Boolean,
    required: true,
    default: false,
  },
  title: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["close-modal"]);

const closeModal = () => emit("close-modal");
</script>

<style>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
