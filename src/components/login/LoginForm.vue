<template>
  <div class="bg-neutral-50 shadow-xl p-6 rounded-3xl">
    <h1 class="text-center">
      Welcome to <span class="text-primary block">Si-Vi</span>
    </h1>
    <h6 class="text-neutral-900 font-bold mb-4">FOR THE SKIM TEAM</h6>
    <form @submit.prevent="handleLogin" class="w-full">
      <InputField label="Email" type="email" v-model="email" />
      <InputField
        input-type="password"
        type="text"
        label="Password"
        v-model="password"
      />
      <LoginOptions v-model="rememberLogin" />
      <Button type="submit" width="w-full" size="sm">Log in</Button>
    </form>
    <!-- <p class="text-center xsmall my-6">
    Don't have an account?
    <span @click="openModal" class="text-secondary-600 cursor-pointer"
      >Sign up
    </span>
    for free
  </p> -->
    <!-- <SignUpForm :openModal="showSignUP" @close-modal="closeModal" /> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LoginOptions from "./LoginOptions.vue";
// import SignUpForm from "../signup/SignUpForm.vue";
import InputField from "../shared/InputField.vue";
import Button from "../shared/Button.vue";
import auth from "../../api/auth/index";

const email = ref("");
const password = ref("");
const rememberLogin = ref(false);
// const showSignUP = ref(false);

// const openModal = () => (showSignUP.value = true);
// const closeModal = () => (showSignUP.value = false);

const handleLogin = () => {
  auth.loginUser({ email: email.value, password: password.value });
};
</script>
