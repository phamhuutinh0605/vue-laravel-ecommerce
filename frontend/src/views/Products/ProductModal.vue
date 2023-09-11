<template>
  <TransitionRoot appear :show="show" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-70"></div>
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-[700px] sm:w-full"
            >
              <div class="pt-20" v-if="loading">
                <Spinner
                  class="absolute left-0 top-0 bg-white right-0 bottom-0 flex items-center justify-center"
                />
              </div>
              <div class="" v-else>
                <header class="py-3 px-4 flex justify-between items-center">
                  <DialogTitle
                    as="h3"
                    class="text-lg leading-6 font-medium text-gray-900"
                  >
                    {{
                      product.id
                        ? `Update product: "${props.product.title}"`
                        : "Create new Product"
                    }}
                  </DialogTitle>
                  <button
                    @click="closeModal()"
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
                  </button>
                </header>
                <form @submit.prevent="onSubmit">
                  <div class="bg-white px-4 pt-5 pb-4">
                    <CustomInput
                      class="mb-2"
                      v-model="product.title"
                      label="Product Title"
                    />
                    <CustomInput
                      type="file"
                      class="mb-2"
                      label="Product Image"
                      @change="(file) => (product.image = file)"
                    />
                    <CustomInput
                      type="textarea"
                      class="mb-2"
                      v-model="product.description"
                      label="Description"
                    />
                    <CustomInput
                      type="number"
                      class="mb-2"
                      v-model="product.price"
                      label="Price"
                      prepend="$"
                    />
                    <CustomInput
                      type="checkbox"
                      class="mb-2"
                      v-model="product.published"
                      label="Published"
                    />
                  </div>
                  <footer
                    class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
                  >
                    <button
                      type="submit"
                      class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      @click="closeModal"
                      ref="cancelButtonRef"
                    >
                      Cancel
                    </button>
                  </footer>
                </form>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { computed, defineProps, onUpdated, reactive, ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import CustomInput from "../../components/core/CustomInput.vue";
import Spinner from "../../components/core/Spinner.vue";
import store from "../../store";

const loading = ref(false);
let product = reactive({
  id: props.product.id,
  title: props.product.title,
  image: props.product.image,
  description: props.product.description,
  price: props.product.price,
});
const props = defineProps({
  showProductModal: Boolean,
  product: {
    require: true,
    type: Object,
  },
});
onUpdated(() => {
  product = {
    id: props.product.id,
    title: props.product.title,
    image: props.product.image,
    description: props.product.description,
    price: props.product.price,
  };
});
const emit = defineEmits(["update:showProductModal", "close"]);

const show = computed({
  get: () => props.showProductModal,
  set: (value) => emit("update:showProductModal", value),
});
function closeModal() {
  show.value = false;
  emit("close");
}

function onSubmit() {
  loading.value = true;
  if (product.id) {
    store.dispatch("updateProduct", product).then((response) => {
      loading.value = false;
      if (response.status === 200) {
        // TODO show notification
        closeModal();
        return store.dispatch("getProducts", {});
      }
    });
  } else {
    store
      .dispatch("createProduct", product)
      .then((response) => {
        loading.value = false;
        if (response.status === 201) {
          // TODO show notification
          store.dispatch("getProducts", {});
          closeModal();
          console.log(response);
        }
      })
      .catch((err) => {
        loading.value = false;
        console.log(err);
      });
  }
}
</script>
