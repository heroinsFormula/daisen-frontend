<template>
  <tr>
    <td
      class="w-1/4 overflow-hidden text-ellipsis whitespace-nowrap border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4 text-left">
      <span v-if="!isEditing">{{ fileName }}</span>
      <input v-else v-model="newFileName" ref="fileNameInput" @blur="saveFileName" @keyup.enter="saveFileName"
        class="border p-1 text-sm" type="text" />
    </td>
    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      {{ lastModified }}
    </td>
    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      {{ formattedFileSize }}
    </td>
    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      <dropdown-button :options="dropdownOptions" @select="handleDropdownSelect">
      </dropdown-button>
    </td>
  </tr>
</template>
<!-- <i class="fas fa-arrow-alt-circle-down"></i> -->
<script>
import DropdownButton from "./DropdownButton.vue";
import { fileService } from '@/services/fileService';
import bytesToSize from '../services/scripts.js';

export default {
  components: {
    DropdownButton,
  },
  props: ["id", "fileName", "lastModified", "fileSize"],
  data() {
    return {
      isEditing: false,
      newFileName: this.fileName,
      dropdownOptions: [
        { label: "Upravit", value: "edit", icon: "fas fa-edit" },
        { label: "Stáhnout", value: "download", icon: "fas fa-download" },
        { label: "Smazat", value: "delete", icon: "fas fa-trash-alt" },
      ],
    };
  },
  computed: {
    formattedFileSize() {
      return typeof this.fileSize === "number"
        ? bytesToSize(this.fileSize)
        : this.fileSize;
    },
  },
  methods: {
    async handleDropdownSelect(option) {
      switch (option.value) {
        case "delete":
          await this.deleteFile();
          break;
        case "download":
          this.downloadFile();
          break;
        case "edit":
          this.editFile();
          break;
      }
    },
    async deleteFile() {
      try {
        await fileService.deleteFile(this.id);
        this.$emit("fileDeleted", { id: this.id });
      } catch (error) {
        console.error(`Failed to delete file ${this.fileName}`, error);
      }
    },
    downloadFile() {
      const fileContent = ''; // Empty content for the file
      const blob = new Blob([fileContent], { type: 'application/octet-stream' });

      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = this.fileName; // Set filename
      downloadLink.click(); // Trigger download

      URL.revokeObjectURL(downloadLink.href);
    },
    editFile() {
      this.isEditing = true; // Enable editing mode
      this.$nextTick(() => {
        // Focus the input field and select its text after the component is updated
        this.$refs.fileNameInput.select();
      });
    },
    saveFileName() {
      if (this.newFileName && this.newFileName !== this.fileName) {
        console.log(`Saving new filename: ${this.newFileName}`);
        this.isEditing = false;
        this.$emit("fileRenamed", { id: this.id, newFileName: this.newFileName });
      } else {
        // If file name didn't change, just exit editing mode
        this.isEditing = false;
      }
    },
  },
};
</script>
