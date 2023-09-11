<template>
  <div class="w-[200px] bg-indigo-700 text-white py-4 px-2">
    <router-link
      :to="{ name: 'app.dashboard' }"
      class="flex items-center hover:bg-black/25 px-3 py-2 rounded transition mb-2"
    >
      <HomeIcon class="w-4 mr-2 text-gray-300" />
      <span>Dashboard</span>
    </router-link>
    <router-link
      :to="{ name: 'app.products' }"
      class="flex items-center hover:bg-black/25 px-3 py-2 rounded transition mb-2"
    >
      <ViewListIcon class="w-4 mr-2 text-gray-300" />
      <span>Products</span>
    </router-link>
    <router-link
      :to="{ name: 'app.users' }"
      class="flex items-center hover:bg-black/25 px-3 py-2 rounded transition mb-2"
    >
      <UserIcon class="w-4 mr-2 text-gray-300" />
      <span>Users</span>
    </router-link>
    <router-link
      :to="{ name: 'app.report' }"
      class="flex items-center hover:bg-black/25 px-3 py-2 rounded transition mb-2"
    >
      <ChartBarIcon class="w-4 mr-2 text-gray-300" />
      <span>Report</span>
    </router-link>
  </div>
</template>

<script setup>
import {
  HomeIcon,
  UserIcon,
  ViewListIcon,
  ChartBarIcon,
} from "@heroicons/vue/solid";
</script>

<style lang="scss" scoped>
</style>