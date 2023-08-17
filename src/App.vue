<template>
  <navbar-component />
  <HeroView />
  <PlayersView />
  <SlamsView />
  <MastersView />
  <footer-component />
</template>

<script>
import NavbarComponent from "./components/Navbar.vue";
import HeroView from "./views/Hero.vue";
import PlayersView from "./views/Players.vue";
import SlamsView from "./views/Slams.vue";
import MastersView from "./views/Masters.vue";
import FooterComponent from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    NavbarComponent,
    HeroView,
    PlayersView,
    SlamsView,
    MastersView,
    FooterComponent,
  },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
