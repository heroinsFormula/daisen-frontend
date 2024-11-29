<template>
    <!-- FileUploadButton.vue -->
    <input type="file" id="fileUpload" ref="myFiles" class="custom-file-input" @change="handleFiles" multiple hidden>
    <button @click="chooseFiles"
        class="flex rounded-lg px-4 border text-blueGray-700 uppercase font-bold transition-all shadow-sm hover:shadow-md hover:bg-slate-900"
        type="button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-1.5">
            <path fill-rule="evenodd"
                d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.03 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v4.94a.75.75 0 0 0 1.5 0v-4.94l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
                clip-rule="evenodd" />
        </svg>
        <span class="text-blueGray-700 text-xs uppercase py-3 font-bold block">
            Nahrát soubor
        </span>
    </button>
    <!-- End of FileUploadButton.vue -->
</template>

<script>
import { fileService } from '@/services/fileService';
import { useTimeAgo } from '@vueuse/core'

export default {
    name: 'FileUploadButton',
    emits: ['fileUploaded'],
    data() {
        return {
            files: [],
        };
    },
    methods: {
        chooseFiles() {
            document.getElementById("fileUpload").click();
        },
        async handleFiles(event) {
            const selectedFiles = Array.from(event.target.files);
            this.files = selectedFiles;

            selectedFiles.forEach(async (file) => {

                const payload = {
                    file_name: file.name,
                    file_size: file.size,
                };

                try {
                    const response = await fileService.postFile(payload);
                    this.$emit("fileUploaded", {
                        id: response.id,
                        fileName: file.name,
                        fileSize: file.size,
                        lastModified: useTimeAgo(new Date().toISOString()),
                    });
                } catch (error) {
                    console.error(`Failed to upload file ${ file.name }`, error);
                }
            });
        }
    },
};
</script>