<template>
    <!-- FileStorageBar.vue -->
    <div class="relative w-full bg-gray-200 overflow-hidden h-6 mb-4">
        <div class="bg-blue-500 h-full" :style="{ width: `${ usedPercentage }%` }">
        </div>


        <div class="absolute inset-0 flex items-center justify-center font-bold text-black text-xs whitespace-nowrap">
            {{ usedStorageFormatted }} / {{ maxStorageFormatted }}
        </div>
    </div>
    <!-- End of FileStorageBar.vue -->
</template>

<script>
import bytesToSize from '../services/scripts';
export default {
    props: {
        usedStorage: {
            default: 0
        },
        maxStorage: {
            default: 20 * 1024 * 1024 * 1024, // 20 GB in bytes
        },
    },
    computed: {
        usedPercentage() {
            return (this.usedStorage / this.maxStorage) * 100;
        },
        usedStorageFormatted() {
            return bytesToSize(this.usedStorage);
        },
        maxStorageFormatted() {
            return bytesToSize(this.maxStorage);
        },
    },
};
</script>