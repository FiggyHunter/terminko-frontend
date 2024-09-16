<template>
  <h1 class="text-center text-3xl mb-1 text-black">
    Welcome to <span class="text-blue-600">Temporary Name</span>
  </h1>
  <h3 class="text-gray-500 mb-4">
    Please enter your details to join our Temporary family!
  </h3>
  <form @submit.prevent="handleLogin" class="w-full">
    <InputField label="Email" type="email" v-model="email" />
    <InputField label="Password" type="password" v-model="password" />
    <LoginOptions v-model="rememberLogin" />
    <Button type="submit" text="Sign in" />
  </form>
  <p class="text-center text-sm text-gray-400 my-6">
    Don't have an account?
    <span @click="openModal" class="font-medium text-blue-600 cursor-pointer"
      >Sign up
    </span>
    for free
  </p>
  <SignUpForm :openModal="showSignUP" @close-modal="closeModal" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import LoginOptions from "./LoginOptions.vue";
import SignUpForm from "../signup/SignUpForm.vue";
import InputField from "../shared/InputField.vue";
import Button from "../shared/Button.vue";
import auth from "../../api/auth/index";

const email = ref("");
const password = ref("");
const rememberLogin = ref(false);
const showSignUP = ref(false);

const openModal = () => (showSignUP.value = true);
const closeModal = () => (showSignUP.value = false);

const handleLogin = () => {
  auth.loginUser({ email: email.value, password: password.value });
};
</script>
