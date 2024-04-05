<template>
  <div class="flex flex-col">
    <h5 class="text-neutral-700 flex align-start">{{ title }}</h5>
    <ul v-for="option in menuOptions" :key="option.id">
      <li
        :class="`${option.id === selectedOption && 'bg-primary-100 text-primary-900 rounded-3xl rounded-tl-lg'} flex flex-row items-center gap-5 p-3 cursor-pointer `"
        :onclick="() => emit('option-select', option.id)"
      >
        <div class="w-6 h-6">
          <img :src="option.iconPath" :alt="option.name" />
        </div>
        <h6>{{ option.name }}</h6>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface MenuOption {
  id: number;
  name: string;
  iconPath: string;
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
      { id: 1, name: "Option 1", iconPath: "path/to/icon" },
      { id: 2, name: "Option 2", iconPath: "path/to/icon" },
    ],
  },
  selectedOption: {
    value: Number,
    required: true,
  },
});

const emit = defineEmits(["option-select"]);
</script>
