<template>
  <Modal :isOpen="openModal" title="Sign Up!" @close-modal="handleCloseModal">
    <form @submit.prevent="handleSignUp" class="w-full">
      <InputField label="First name" type="text" v-model="firstName" />
      <InputField label="Last name" type="text" v-model="lastName" />
      <InputField label="Email" type="email" v-model="email" />
      <InputField label="Birthday" type="date" v-model="birthday" />
      <InputField label="Password" type="password" v-model="password" />
      <InputField
        label="Confirm password"
        type="password"
        v-model="confirmPassword"
      />

      <Button type="submit" text="Sign up" />
    </form>
  </Modal>
</template>

<script setup lang="ts">
import { ref } from "vue";
import InputField from "../shared/InputField.vue";
import Button from "../shared/Button.vue";
import Modal from "../shared/Modal.vue";

defineProps({
  openModal: {
    type: Boolean,
    required: true,
  },
});

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const birthday = ref("");
const password = ref("");
const confirmPassword = ref("");

const emit = defineEmits(["close-modal"]);

const handleCloseModal = () => emit("close-modal");

const handleSignUp = () => {
  if (password.value !== confirmPassword.value) {
    alert("Password needs to match confirm password");
  } else {
    console.log("First name: ", firstName.value);
    console.log("Last name: ", lastName.value);
    console.log("Email: ", email.value);
    console.log("Birthday: ", birthday.value);
    console.log("Password: ", password.value);
    console.log("Confirm password: ", confirmPassword.value);
  }
};
</script>
