<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <GuestLayout title="Sign in to your account">
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" method="POST" @submit.prevent="login">
          <div
            v-if="errorMsg"
            class="flex items-center justify-between py-3 px-5 bg-red-500 text-white rounded"
          >
            {{ errorMsg }}
            <span
              @click="errorMsg = ''"
              class="w-8 h-8 flex items-center justify-center rounded-full transition-colors cursor-pointer hover:bg-[rgba(0,0,0,0.2)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </div>
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Email
            </label>
            <div class="mt-2">
              <input
                v-model="user.email"
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required=""
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Password</label
              >
              <div class="text-sm">
                <a
                  href="#"
                  class="font-semibold text-indigo-600 hover:text-indigo-500"
                  ><router-link :to="{ name: 'requestPassWord' }"
                    >Forgot password?</router-link
                  ></a
                >
              </div>
            </div>
            <div class="mt-2">
              <input
                v-model="user.password"
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required=""
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              :disabled="loading"
              :class="{
                'cursor-not-allowed': loading,
                'hover:bg-indigo-500': loading,
              }"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              <LoadingIcon v-if="loading" />
              Sign in
            </button>
          </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
          You don't have account?
          <a
            href="#"
            class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            ><router-link :to="{ name: 'register' }">Register</router-link></a
          >
        </p>
      </div>
    </GuestLayout>
  </div>
</template>
  

<script setup>
import { LockClosedIcon } from "@heroicons/vue/solid";
import GuestLayout from "../components/GuestLayout.vue";
import store from "../store";
import router from "../router";
import { ref } from "vue";
import LoadingIcon from "../components/LoadingIcon.vue";

let loading = ref(false);
let errorMsg = ref("");

const user = {
  email: "",
  password: "",
  remember: true,
};

function login() {
  loading.value = true;
  store
    .dispatch("login", user)
    .then(({ response }) => {
      loading.value = false;
      router.push({ name: "app.dashboard" });
    })
    .catch(({ response }) => {
      loading.value = false;
      errorMsg.value = response.data.message;
    });
}
</script>

<style lang="scss" scoped>
</style>