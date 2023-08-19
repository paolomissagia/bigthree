<template>
  <section class="pt-24 pb-24 relative block bg-gray-900">
    <div
      class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style="height: 80px"
    >
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          class="text-gray-900 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
    <div class="container mx-auto px-4 lg:pt-24 lg:pb-24">
      <div class="flex flex-wrap text-center justify-center">
        <div class="w-full lg:w-6/12 px-4">
          <h2 class="text-4xl font-semibold text-white">ATP Masters</h2>
          <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
            The Masters tournaments, along with the Grand Slam tournaments make
            up the most coveted trophies on the annual ATP Tour calendar.
          </p>
        </div>
      </div>
      <div class="flex flex-wrap mt-12 justify-center">
        <!-- 1 -->
        <template v-for="master in mastersData" :key="master.id">
          <master-component
            :title="master.name"
            :number="master.number"
            :image="master.image"
          />
        </template>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
import MasterComponent from "../components/Master.vue";

export default {
  name: "MastersView",
  components: {
    MasterComponent,
  },
  data() {
    return {
      mastersData: [],
    };
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get(
          "https://bigthree-backend.onrender.com/api/v1/atpmasters/all"
        );
        this.mastersData = response.data;
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
