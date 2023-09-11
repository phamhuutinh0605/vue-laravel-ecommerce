<template>
  <div v-if="currentUser.id" class="min-h-full flex">
    <Sidebar :class="{ '-ml-[200px]': openSideBar }" class="transition-all" />
    <div class="flex-1">
      <TopHeader @toggle-sidebar="toggleSideBar" :user="user" />
      <main class="bg-gray-200">
        <router-view></router-view>
      </main>
    </div>
  </div>
  <div v-else class="min-h-full bg-gray-200 flex items-center justify-center">
    <Loading width="200px" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import TopHeader from "./TopHeader.vue";
import Sidebar from "./Sidebar.vue";
import store from "../store";
import Loading from "./LoadingIcon.vue";

const openSideBar = ref(false);
const toggleSideBar = () => {
  openSideBar.value = !openSideBar.value;
};
let user = ref();
onMounted(() => {
  store
    .dispatch("getUser")
    .then((res) => (user.value = res.data))
    .catch((err) => console.log(err));
});
onMounted(() => {
  handleSidebarOpened();
  window.addEventListener("resize", handleSidebarOpened);
});
const handleSidebarOpened = () => {
  openSideBar.value = window.innerWidth < 768;
};

const currentUser = computed(() => store.state.user.data);
</script>

<style lang="scss" scoped>
</style>