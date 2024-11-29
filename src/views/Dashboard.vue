<template>
<sidebar-component @fileUploaded="handleFileUploaded"></sidebar-component>
<div class="relative md:ml-64">
  <navbar-component></navbar-component>
  <div class="relative bg-red-600 pt-12 md:pt-32"></div>
  <div class="content mx-auto w-full flex-grow px-4 md:px-10">
    <div class="mt-4 flex flex-wrap">
      <div class="mb-12 w-full px-4">
        <div class="fileTable relative mb-6 flex w-full min-w-0 flex-col break-words rounded bg-white shadow-lg">
          <div class="block w-full overflow-x-auto">
          </div>
            <file-table ref="fileTable"></file-table>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import NavbarComponent from "../components/Navbar.vue";
import SidebarComponent from "../components/Sidebar.vue";
import FileTable from "../components/FileTable.vue";

export default {
  name: "dashboard-page",
  components: {
    NavbarComponent,
    SidebarComponent,
    FileTable
  },
  methods: {
    handleFileUploaded(file) {
      this.$refs.fileTable.addFile(file);
    },
  },
};
</script>
