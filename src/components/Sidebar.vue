<template>
<!-- Sidebar.vue -->
  <nav
    class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
  >
    <div
      class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
    >
      <button
        class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
        type="button"
        v-on:click="toggleCollapseShow('bg-white m-2 py-3 px-6')"
      >
        <i class="fas fa-bars"></i>
      </button>
      <ul class="md:hidden items-center flex flex-wrap list-none">
        <li class="inline-block relative">
          <notification-dropdown-component></notification-dropdown-component>
        </li>
      </ul>
      <div
        class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded"
        v-bind:class="collapseShow"
      >
        <div
          class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200"
        >
          <div class="flex flex-wrap">
            <div class="w-6/12">
              <a
                class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                href="javascript:void(0)"
              >
                Daisen Disk
              </a>
            </div>
            <div class="w-6/12 flex justify-end">
              <button
                type="button"
                class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                v-on:click="toggleCollapseShow('hidden')"
              >
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
        <form class="mt-6 mb-4 md:hidden">
          <div class="mb-3 pt-0">
            <input
              type="text"
              placeholder="Search"
              class="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
            />
          </div>

        </form>
        <ul class="md:flex-col md:min-w-full flex flex-col list-none">
          <li class="items-center mb-6">
            <file-upload-button
              :totalUsedStorage="totalUsedStorage"
              :maxStorage="maxStorage"
              @fileUploaded="handleFileUploaded"
            >
            </file-upload-button>
          </li>

          <li class="items-center mb-6">
            <a
              class="text-blueGray-700 hover:text-blueGray-500 text-sm py-4 font-bold block"
              href="#/login"
            >
              <i class="fas fa-hdd text-blueGray-400 mr-3 text-2xl"></i>
              Dokoupit místo na disku
            </a>
          </li>

          <li class="inline-flex mb-6">
            <a
              class="text-blueGray-700 hover:text-blueGray-500 text-sm block no-underline font-semibold"
              href="#/documentation/styles"
            >
              <i class="fas fa-user-friends mr-3 text-blueGray-400 text-2xl"></i>
              Sdílet
            </a>
          </li>

          <li class="inline-flex mb-6">
            <a
              class="text-blueGray-700 hover:text-blueGray-500 text-sm block no-underline font-semibold"
              href="#/documentation/alerts"
            >
              <i class="fas fa-database mr-3 text-blueGray-400 text-2xl"></i>
              Moje Disky
            </a>
          </li>

          <li class="inline-flex mb-6">
            <a
              class="text-blueGray-700 hover:text-blueGray-500 text-sm block no-underline font-semibold"
              href="#/documentation/vue/alerts"
            >
              <i class="fas fa-folder-open mr-3 text-blueGray-400 text-2xl"></i>
              Moje Složky
            </a>
          </li>

          <li class="inline-flex mb-6">
            <a
              class="text-blueGray-700 hover:text-blueGray-500 text-sm block no-underline font-semibold"
              href="#/documentation/react/alerts"
            >
              <i class="fas fa-exclamation-triangle mr-3 text-blueGray-400 text-2xl"></i>
              Spam
            </a>
          </li>

          <li class="inline-flex mb-6">
            <a
              class="text-blueGray-700 hover:text-blueGray-500 text-sm block no-underline font-semibold"
              href="#/documentation/angular/alerts"
            >
              <i class="fas fa-trash-alt mr-3 text-blueGray-400 text-2xl"></i>
              Koš
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
<!-- End of Sidebar.vue -->
</template>

<script>
import NotificationDropdownComponent from "./NotificationDropdown.vue";
import FileUploadButton from "./FileUploadButton.vue";


export default {
  data() {
    return {
      collapseShow: "hidden"
    };
  },
  methods: {
    toggleCollapseShow: function(classes) {
      this.collapseShow = classes;
    },
    handleFileUploaded(file) {
      this.$emit("fileUploaded", file)
    },
  },
  components: {
    NotificationDropdownComponent,
    FileUploadButton,
  }
};
</script>
