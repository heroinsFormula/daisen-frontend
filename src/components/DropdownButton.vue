<template>
    <div class="relative inline-block text-left">
        <button @click="toggleDropdown"
            class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none"
            style="transition: all 0.15s ease">
            <slot name="button-label">⋮</slot>
        </button>

        <div v-show="isOpen"
            class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <ul class="py-1">
                <li v-for="(option, index) in options" :key="index"
                    class="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" @click="selectOption(option)">
                    <i :class="option.icon" class="mr-2"></i> {{ option.label }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "DropdownButton",
    props: {
        options: {
            type: Array,
            required: true,
            default: () => [],
        },
    },
    data() {
        return {
            isOpen: false,
        };
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },
        selectOption(option) {
            this.$emit("select", option);
            this.isOpen = false;
        },
    },
};
</script>

<style scoped>
/* Optional: Add transition for dropdown */
ul {
    transition: all 0.3s ease-in-out;
}
</style>
