<template>
  <div class="mb-4 flex flex-col items-start relative">
    <label
      :for="label.toLowerCase()"
      :class="`${labelVisible ? 'block' : 'hidden'} ${error ? 'text-error-400' : ''} text-gray-500 pl-2 mb-1`"
      >{{ error ? error : label }}</label
    >
    <input
      :modelValue="modelValue"
      :type="isPasswordVisible ? type : inputType"
      :id="label.toLowerCase()"
      :name="label.toLowerCase()"
      :placeholder="`${label}`"
      :required="required"
      @change="updateValue"
      :class="`w-full
      ${error ? 'border-error-400' : 'border-neutral-300'}

      border-2
      px-5
      py-3
      rounded-3xl
      border-gray-300
      shadow-sm
      focus:border-blue-300
      large`"
    />

    <img
      @click="isPasswordVisible = !isPasswordVisible"
      :src="!isPasswordVisible ? '/eye-invisible.svg' : '/eye-visible.svg'"
      v-if="inputType === 'password'"
      class="absolute bottom-4 right-4 cursor-pointer"
      alt=""
      srcset=""
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["update:modelValue"]);

const isPasswordVisible = ref(false);
const error = ref(null);

defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },

  inputType: {
    type: String,
    required: false,
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
