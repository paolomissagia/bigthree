<template>
  <HeroPage />
</template>

<script>
import HeroPage from "./pages/HeroPage.vue";

export default {
  name: "App",
  components: {
    HeroPage,
  },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
