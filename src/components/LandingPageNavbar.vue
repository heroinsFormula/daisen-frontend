<template>
    <nav class="bg-red-600 top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3">
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <img
                class="w-8 rounded"
                src="../assets/img/logoig.jpg">
            </div>
            <div class="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none"
                v-bind:class="{ 'hidden': !showMenu, 'block': showMenu }">
                <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
                    <li class="flex items-center">
                        <router-link to="/login"
                            class="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded
                            shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                            >
                            Přihlásit se
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
