<template>
  <div class="flex items-center justify-between bg-gray-200 p-4">
    <h1 class="text-3xl font-semibold ml-3">Products</h1>
    <router-link
      :to="{ name: '' }"
      @click="showAddNewModal"
      class="py-2 px-4 border border-transparent shadow text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Add new Product
    </router-link>
  </div>
  <ProductTable @clickEditProduct="editProduct" />
  <ProductModal
    v-model:showProductModal="showProductModal"
    :product="productModel"
  />
</template>

<script setup>
// -------------------import----------------------------
import ProductTable from "./ProductTable.vue";
import ProductModal from "./ProductModal.vue";
import { computed, reactive, ref } from "vue";

// -------------------dec----------------------------
let showProductModal = ref(false);
const DEFAULT_PRODUCT = {
  id: "",
  title: "",
  description: "",
  image: "",
  price: "",
};
let productModel = reactive({ ...DEFAULT_PRODUCT });
// -------------------func----------------------------
function showAddNewModal() {
  showProductModal.value = true;
}
function editProduct(data) {
  productModel = data;
  showAddNewModal();
}
</script>

<style lang="scss" scoped>
</style>