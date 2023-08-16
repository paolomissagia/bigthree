<template>
  <HeroView />
</template>

<script>
import HeroView from "./views/Hero.vue";

export default {
  name: "App",
  components: {
    HeroView,
  },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
