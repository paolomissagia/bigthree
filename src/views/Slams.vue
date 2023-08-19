<template>
  <section class="pt-24 pb-24">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-center text-center mb-24">
        <div class="w-full lg:w-6/12 px-4">
          <h2 class="text-4xl font-semibold">Grand Slams</h2>
          <p class="text-lg leading-relaxed m-4 text-gray-600">
            The Grand Slam tournaments are the world's four most important
            annual professional tennis tournaments. They offer the most ranking
            points, prize money, public, media attention and longest matches
          </p>
        </div>
      </div>
      <div class="flex flex-wrap">
        <template v-for="slam in slamsData" :key="slam.id">
          <slam-component
            :title="slam.name"
            :number="slam.number"
            :image="slam.image"
          />
        </template>
      </div>
    </div>
  </section>
</template>
<script>
import SlamComponent from "../components/Slam.vue";
import axios from "axios";

export default {
  name: "SlamsView",
  components: {
    SlamComponent,
  },
  data() {
    return {
      slamsData: [],
    };
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get(
          "https://bigthree-backend.onrender.com/api/v1/grandslams/all"
        );
        this.slamsData = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
