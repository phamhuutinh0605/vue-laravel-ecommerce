<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <GuestLayout title="Register">
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label
              for="name"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Name
            </label>
            <div class="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                autocomplete="name"
                required=""
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              for="username"
              class="block text-sm font-medium leading-6 text-gray-900"
              >User name
            </label>
            <div class="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                autocomplete="username"
                required=""
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              for="phone"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Phone
            </label>
            <div class="mt-2">
              <input
                id="phone"
                name="phone"
                type="text"
                autocomplete="phone"
                required=""
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Email
            </label>
            <div class="mt-2">
              <input
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
            <label
              for="address"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Address
            </label>
            <div class="mt-2">
              <input
                id="address"
                name="address"
                type="text"
                autocomplete="address"
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
            </div>
            <div class="mt-2">
              <input
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
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Register
            </button>
          </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
          You have account?
          <a
            href="#"
            class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            ><router-link :to="{ name: 'login' }">Login</router-link></a
          >
        </p>
      </div>
    </GuestLayout>
  </div>
</template>
  

<script setup>
import { LockClosedIcon } from "@heroicons/vue/solid";
import GuestLayout from "../components/GuestLayout.vue";
</script>

<style lang="scss" scoped>
</style>