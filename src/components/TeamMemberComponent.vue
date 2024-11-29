<template>
  <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
    <div class="px-6">
      <img
      :src="memberImage"
      :alt="`${memberName}.jpg`"
      class="shadow-lg rounded-full max-w-full mx-auto w-[120px] h-[120px]"
      />
      <div class="pt-6 text-center">
        <h5 class="text-xl font-bold">{{ memberName }}</h5>
        <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
          {{ functionInTeam }}
        </p>
        <div class="mt-6">
          <button class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
            type="button">
            <i class="fab fa-twitter"></i>
          </button>
          <button class="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
            type="button">
            <i class="fab fa-facebook-f"></i>
          </button>
          <button class="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
            type="button">
            <i class="fab fa-google"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rendl from '../assets/img/OndřejRendl.jpg';
import Sklenice from '../assets/img/MartinSklenička.jpg';
import Ostrihon from '../assets/img/LukášOstrihoň.jpg';
import Mares from '../assets/img/LukášMareš.jpg';
import Valousek from '../assets/img/JanValoušek.jpg';
import Default from '../assets/img/default.jpg'

export default {
  props: ['memberName', 'functionInTeam'],
  computed: {
    memberImage() {
      const imageMap = {
        "Jan Valoušek": Valousek,
        "Ondřej Rendl": Rendl,
        "Martin Sklenička": Sklenice,
        "Lukáš Ostrihoň": Ostrihon,
        "Lukáš Mareš": Mares,
        "Default": Default
      };
      return imageMap[this.memberName] || require('../assets/img/default.jpg');
    },
  },
};
</script>
