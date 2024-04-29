<template>
  <div class="flex flex-col justify-center items-center gap-2 my-3">
    <Button color="primary-fill" size="sm">malo duze dugme</Button>
    <Button color="primary-fill" size="sm" width="w-full"
      >malo duze dugme</Button
    >
    <Button color="secondary-fill" size="md">malo duze dugme</Button>
    <Button color="primary-outline" size="lg">malo duze dugme</Button>
    <Button color="secondary-outline" size="xl">malo duze dugme</Button>

    <CircleButton color="primary-fill" size="sm">X</CircleButton>
    <CircleButton color="light-outline" size="md">X</CircleButton>
    <CircleButton color="normal-outline" size="lg">X</CircleButton>
    <CircleButton color="dark-outline" size="xl">X</CircleButton>

    <SquareButton color="primary" size="sm">X</SquareButton>
    <SquareButton color="primary" size="md">X</SquareButton>
    <SquareButton color="secondary" size="lg">X</SquareButton>
    <SquareButton color="secondary" size="xl">X</SquareButton>

    <form @submit="submitForm()" novalidate class="flex flex-col gap-2">
      <FormInput
        id="name"
        label="Ime"
        :modelValue="test1"
        :required="true"
        @update:modelValue="test1 = $event"
      />
      <FormInput
        id="lname"
        label="prezime"
        :modelValue="test2"
        @update:modelValue="test2 = $event"
      />
      <Button type="submit">Submit</Button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import Button from "../components/shared/Button.vue";
import CircleButton from "../components/shared/CircleButton.vue";
import SquareButton from "../components/shared/SquareButton.vue";
import FormInput from "../components/shared/FormInput.vue";

const test1 = ref("");
const test2 = ref("");

const submitForm = () => {
  console.log(test1.value, test2.value);
};
</script>

<style scoped>
form.submitted input:invalid {
  border: 2px solid red;
}
</style>
