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
                      user.id
                        ? `Update user: "${props.user.name}"`
                        : "Create new User"
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
                      v-model="user.name"
                      label="User Name"
                    />
                    <CustomInput
                      type="file"
                      class="mb-2"
                      label="User Avatar"
                      @change="(file) => (user.image = file)"
                    />
                    <CustomInput
                      type="email"
                      class="mb-2"
                      v-model="user.email"
                      label="Email"
                    />
                    <CustomInput
                      type="textarea"
                      class="mb-2"
                      v-model="user.address"
                      label="Address"
                    />
                    <CustomInput
                      type="checkbox"
                      class="mb-2"
                      v-model="user.published"
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
let user = reactive({
  id: props.user.id,
  name: props.user.name,
  image: props.user.image,
  email: props.user.email,
  address: props.user.address,
});
const props = defineProps({
  showUserModal: Boolean,
  user: {
    require: true,
    type: Object,
  },
});
onUpdated(() => {
  user = {
    id: props.user.id,
    name: props.user.name,
    image: props.user.image,
    email: props.user.email,
    address: props.user.address,
  };
});
const emit = defineEmits(["update:showUserModal", "close"]);

const show = computed({
  get: () => props.showUserModal,
  set: (value) => emit("update:showUserModal", value),
});
function closeModal() {
  show.value = false;
  emit("close");
}

function onSubmit() {
  loading.value = true;
  if (user.id) {
    store.dispatch("updateUser", user).then((response) => {
      loading.value = false;
      if (response.status === 200) {
        // TODO show notification
        closeModal();
        return store.dispatch("getUsers", {});
      }
    });
  } else {
    store
      .dispatch("createUser", user)
      .then((response) => {
        loading.value = false;
        if (response.status === 201) {
          // TODO show notification
          store.dispatch("getUsers", {});
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
  