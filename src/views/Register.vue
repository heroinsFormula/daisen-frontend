<template>
  <div>
      <nav class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3">
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <router-link
                to="/landing"
                class="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded
              shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                >
                  &lt;
              </router-link>
            </div>
            <div class="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none">
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
    <main>
      <section class="absolute w-full h-full">
        <div
          class="absolute top-0 w-full h-full bg-gray-900"
          style="background-size: 100%; background-repeat: no-repeat;"
          :style="{'background-image': 'url(' + require('../assets/img/register_bg_2.png').default + ')'}"
        ></div>
        <div class="container mx-auto px-4 h-full">
          <div class="flex content-center items-center justify-center h-full">
            <div class="w-full lg:w-4/12 px-4">
              <div
                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                <div class="flex-auto px-4 lg:px-10 py-10">
                  <form @submit.prevent="register">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                        >Uživatelské jméno</label
                      ><input
                        type="text"
                        class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Zadejte jméno..."
                        style="transition: all 0.15s ease 0s;"
                        v-model="username"
                      />
                    </div>
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                        >Heslo</label
                      ><input
                        type="password"
                        class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Zadejte Heslo..."
                        style="transition: all 0.15s ease 0s;"
                        v-model="password"
                      />
                    </div>
                    <div class="text-center mt-6">
                      <button
                        class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="submit"
                        style="transition: all 0.15s ease 0s;"
                      >
                        Registrovat se
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="flex flex-wrap mt-6">
                <div class="w-1/2">
                  <a href="#pablo" class=""
                    ><small>Forgot password?</small></a
                  >
                </div>
                <div class="w-1/2 text-right">
                  <a href="#pablo" class="text-gray-300"
                    ><small>Create new account</small></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
  name: 'register-page',
  setup() {
    const router = useRouter();
    const username = ref('');
    const password = ref('');

    async function register() {
      try {
        const response = await axios.post('user-api/register/', {
          username: username.value,
          password: password.value
        });
        console.log(response)
        router.push({ name: 'login' });
      } catch (error) {
        console.log(error)
      }
    }

    return {
      username,
      password,
      register
    };
  }
}
</script>
