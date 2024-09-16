<template>
  <div class="flex justify-between mb-6">
    <div class="flex">
      <input
        type="checkbox"
        id="remember-login"
        :checked="modelValue"
        @change="updateValue"
      />
      <label for="remember-login" class="text-gray-400 ml-2"
        >Remember account?</label
      >
    </div>
    <RouterLink to="/" class="text-sm text-blue-600"
      >Reset password?</RouterLink
    >
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["update:modelValue"]);

defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const updateValue = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).checked);
};
</script>
