<template>
  <div class="flex flex-col flex-start gap-1 w-full">
    <label :for="id" class="invalid:text-error-500"
      ><h5
        :class="`${isError ? ' text-error-500' : 'text-primary-900'} text-left`"
      >
        {{ isError ? label + " is required *" : label }}
      </h5></label
    >
    <input
      :id="id"
      :value="modelValue"
      @input="
        (event) =>
          emit('update:modelValue', (event.target as HTMLInputElement).value)
      "
      :placeholder="placeholder"
      :maxlength="maxLength"
      :required="required"
      type="text"
      @focusout="handleValidation()"
      :class="`flex justify-center items-center py-3.5 px-6 
      border focus:border-2 focus:outline-none rounded-xl 
      ${isError ? 'border-error-500 border-2' : 'border-primary-900'}`"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const { required, modelValue } = defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: false,
    default: " ",
  },
  maxLength: {
    type: Number,
    required: false,
    default: 50,
  },
  modelValue: {
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const isError = ref(false);

const handleValidation = () => {
  if (required === true && modelValue === "") {
    isError.value = true;
  }
};

const emit = defineEmits(["update:modelValue"]);
</script>
