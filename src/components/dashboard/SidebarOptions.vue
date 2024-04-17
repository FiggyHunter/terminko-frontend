<template>
  <div class="flex flex-col">
    <h5 class="text-neutral-700 flex align-start">{{ title }}</h5>
    <ul v-for="option in menuOptions" :key="option.id">
      <li
        :class="`${
          option.id === selectedOption &&
          'bg-primary-100 text-primary-900 rounded-3xl rounded-tl-lg'
        } 
        flex flex-row items-center gap-5 p-3 cursor-pointer leading normal h-custom`"
        :onclick="() => emit('option-select', option.id)"
      >
        <img
          :src="`${option.id === selectedOption ? option.iconOrange : option.iconBlack}`"
          :alt="option.name"
          class="w-auto h-6 block"
        />
        <h6 v-show="showOptionNames" class="overflow-hidden whitespace-nowrap">
          {{ option.name }}
        </h6>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface MenuOption {
  id: number;
  name: string;
  iconBlack: string;
  iconOrange: string;
  action?: () => void;
}

defineProps({
  title: {
    value: String,
    required: true,
  },
  menuOptions: {
    value: Array as () => MenuOption[],
    required: true,
    // added default to avoid pointless error message, does not effect code
    // since menuOptions is required
    default: () => [
      {
        id: 1,
        name: "Option 1",
        iconBlack: "path/to/icon",
        iconOrange: "path/to/icon",
      },
      {
        id: 2,
        name: "Option 2",
        iconBlack: "path/to/icon",
        iconOrange: "path/to/icon",
      },
    ],
  },
  selectedOption: {
    value: Number,
    required: true,
  },
  showOptionNames: {
    value: Boolean,
    required: true,
  },
});

const emit = defineEmits(["option-select"]);
</script>

<style scoped>
.h-custom {
  height: 51px;
}
</style>
