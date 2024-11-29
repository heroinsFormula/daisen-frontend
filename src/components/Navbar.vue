<template>
  <!-- Navbar.vue -->
  <nav
    class="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
    <div class="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
                  <img
                  class="w-16 rounded"
                  src="../assets/img/logoig.jpg">
      <ul class="flex-col md:flex-row list-none items-center hidden md:flex">
      </ul>
    </div>
    <div class="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none">
      <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
        <li class="flex items-center">
          <button @click="logout" class="bg-white whitespace-nowrap text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded
              shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3">
            Odhlásit se
          </button>
        </li>
      </ul>
    </div>
  </nav>
  <!-- End of Navbar.vue -->
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      this.$router.push('/login');
    },
  },
};
</script>
