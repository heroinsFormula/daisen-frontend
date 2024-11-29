<template>
    <!-- FileTable.vue -->
    <div class="h-full">
        <div class="overflow-auto max-h-[calc(100vh-200px)] flex-grow">
            <file-storage-bar :usedStorage="totalUsedStorage" />
        </div>

        <table class="w-full table-fixed items-center bg-transparent border-collapse">
            <thead>
                <tr>
                    <header-row class="w-auto" text="Jméno"></header-row>
                    <header-row class="w-auto" text="Naposledy modifikováno"></header-row>
                    <header-row class="w-auto" text="Velikost souboru"></header-row>
                    <header-row class="w-auto"></header-row>
                </tr>
            </thead>
            <tbody>
                <table-row v-for="row in rows" :key="row.id" :id="row.id" :fileName="row.fileName"
                    :lastModified="row.lastModified" :fileSize="row.fileSize" @fileDeleted="handleFileDeleted"
                    @fileRenamed="handleFileRenamed">
                </table-row>
            </tbody>
        </table>
    </div>
    <!-- End of FileTable.vue -->
</template>

<script>
import TableRow from "../components/TableRow.vue";
import HeaderRow from "../components/HeaderRow.vue";
import FileStorageBar from "../components/FileStorageBar.vue";
import { fileService } from '@/services/fileService';
import { useTimeAgo } from '@vueuse/core';

export default {
    components: {
        TableRow,
        HeaderRow,
        FileStorageBar,
    },
    data() {
        return {
            rows: [],
        };
    },
    computed: {
        totalUsedStorage() {
            return this.rows.reduce((total, row) => total + row.fileSize, 0);
        },
    },
    methods: {
        async fetchFiles() {
            try {
                let files = await fileService.getFiles();
                this.rows = files.map(file => ({
                    id: file.id,
                    fileName: file.file_name,
                    lastModified: useTimeAgo(file.last_modified),
                    fileSize: Number(file.file_size),
                }));
            } catch (error) {
                console.error('Error fetching files:', error);
            }
        },
        addFile(file) {
            file.fileSize = Number(file.fileSize);
            this.rows.unshift(file);
        },
        handleFileDeleted({ id }) {
            this.rows = this.rows.filter((row) => row.id !== id);
        },
        async handleFileRenamed(event) {
            const file = this.rows.find(row => row.id === event.id);
            if (file) {
                file.fileName = event.newFileName;
            }
            try {
                await fileService.renameFile(event.id, event.newFileName);
                console.log('File name updated successfully');
            } catch (error) {
                console.error('Failed to rename file:', error);
            }
        },
    },
    mounted() {
        this.fetchFiles();
    },
};
</script>
