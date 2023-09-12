<template>
  <div class="flex items-center justify-between bg-gray-200 p-4">
    <h1 class="text-3xl font-semibold ml-3">Users</h1>
    <router-link
      :to="{ name: '' }"
      @click="showAddNewModal"
      class="py-2 px-4 border border-transparent shadow text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Add new User
    </router-link>
  </div>
  <UserTable @clickEditUser="editUser" />
  <UserModal v-model:showUserModal="showUserModal" :user="userModel" />
</template>

<script setup>
// -------------------import----------------------------
import UserTable from "./UserTable.vue";
import UserModal from "./UserModal.vue";
import { reactive, ref } from "vue";

// -------------------dec----------------------------
let showUserModal = ref(false);
const DEFAULT_USER = {
  id: "",
  name: "",
  email: "",
  address: "",
  image: "",
};
let userModel = reactive({ ...DEFAULT_USER });
// -------------------func----------------------------
function showAddNewModal() {
  showUserModal.value = true;
}
function editUser(data) {
  userModel = data;
  showAddNewModal();
}
</script>

<style lang="scss" scoped>
</style>
