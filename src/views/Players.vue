<template>
  <section class="pb-20 bg-gray-300 -mt-24">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <!-- 1 -->
        <template v-for="player in playersData" :key="player.id">
          <div :class="getClass(player.id)">
            <player-component
              :title="player.name"
              :slams="player.slams"
              :masters="player.masters"
              :color="player.color"
              :image="player.image"
            ></player-component>
          </div>
        </template>
      </div>
      <div class="flex flex-wrap items-center mt-32">
        <div class="w-full md:w-5/12 px-4 mr-auto ml-auto text-center">
          <h3 class="text-3xl mb-2 font-semibold leading-normal">
            Dominance of the Big Three
          </h3>
          <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
            The Big Three have won 58 of the last 70 Grand Slam tournaments,
            including 14 consecutive titles from the 2017 Australian Open to the
            2020 Australian Open, and 57 of the last 70 Masters 1000
            tournaments.
          </p>
        </div>
        <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg"
          >
            <img
              src="@/assets/images/trio.jpg"
              class="w-full align-middle rounded-t-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import PlayerComponent from "../components/Player.vue";

export default {
  name: "PlayersView",
  components: {
    PlayerComponent,
  },
  data() {
    return {
      playersData: [],
    };
  },
  methods: {
    getClass(id) {
      return {
        "w-full md:w-4/12 px-4 text-center order-1 md:order-2": id == 1,
        "md:pt-6 w-full md:w-4/12 px-4 text-center order-2 md:order-3": id == 2,
        "lg:pt-12 md:pt-6 w-full md:w-4/12 px-4 text-center order-3 md:-order-1":
          id == 3,
      };
    },
    async getData() {
      try {
        const response = await axios.get(
          "https://bigthree-backend.onrender.com/api/v1/tennisplayers/all"
        );
        this.playersData = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getData();
  },
};
</script>
