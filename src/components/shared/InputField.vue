<template>
  <div class="mb-4 flex flex-col items-start">
    <label
      :for="label.toLowerCase()"
      :class="`${labelVisible ? 'block' : 'hidden'} text-gray-500 pl-2`"
      >{{ label }}</label
    >
    <input
      :modelValue="modelValue"
      :type="type"
      :id="label.toLowerCase()"
      :name="label.toLowerCase()"
      :placeholder="`${label}...`"
      :required="required"
      @change="updateValue"
      class="w-full p-2 rounded-md border border-gray-300 shadow-sm focus:border-blue-300 text-gray-600"
    />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["update:modelValue"]);

defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },

  modelValue: {
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
    required: false,
    default: true,
  },
  labelVisible: {
    type: Boolean,
    required: false,
    default: true,
  },
});

const updateValue = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>
