<template>
  <div>
    <!-- Navbar -->
    <navbar-component></navbar-component>
    <!-- Main -->
    <main>
      <!-- Hero -->
      <section
        class="relative pt-16 pb-32 flex content-center items-center justify-center"
        style="min-height: 75vh"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
            background-image: url('https://images.unsplash.com/photo-1531315396756-905d68d21b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1276&q=80');
          "
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div>
                <h1 class="text-white font-semibold text-5xl">
                  The peak of tennis.
                </h1>
                <p class="mt-4 text-lg text-gray-300">
                  The trio who has dominated men's singles tennis for nearly two
                  decades, collectively winning 65 major singles tournaments;
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style="height: 70px"
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
              class="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <!-- Page 1 -->
      <section class="pb-20 bg-gray-300 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <!-- 1 -->
              <player-component
                image="roger-federer.svg"
                title="Roger Federer"
                slams="20 Grand Slam"
                masters="28 ATP Masters"
                color="bronze"
              ></player-component>
            </div>
            <div class="w-full md:w-4/12 px-4 text-center">
              <!-- 2 -->
              <player-component
                image="novak-djokovic.svg"
                title="Novak Djokovic"
                slams="23 Grand Slam"
                masters="38 ATP Masters"
                color="gold"
              ></player-component>
            </div>
            <div class="md:pt-6 w-full md:w-4/12 px-4 text-center">
              <!-- 3 -->
              <player-component
                image="rafael-nadal.svg"
                title="Rafael Nadal"
                slams="22 Grand Slam"
                masters="36 ATP Masters"
                color="silver"
              ></player-component>
            </div>
          </div>
          <div class="flex flex-wrap items-center mt-32">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <h3 class="text-3xl mb-2 font-semibold leading-normal">
                Dominance of the Big Three
              </h3>
              <p
                class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
              >
                The Big Three have won 58 of the last 70 Grand Slam tournaments,
                including 14 consecutive titles from the 2017 Australian Open to
                the 2020 Australian Open, and 57 of the last 70 Masters 1000
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
      <!-- Page 2 -->
      <section class="pt-24 pb-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center text-center mb-24">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold">Grand Slams</h2>
              <p class="text-lg leading-relaxed m-4 text-gray-600">
                The Grand Slam tournaments are the world's four most important
                annual professional tennis tournaments. They offer the most
                ranking points, prize money, public, media attention and longest
                matches
              </p>
            </div>
          </div>
          <div class="flex flex-wrap">
            <!-- Logo 1 -->
            <slam-component
              image="australian-open.png"
              title="Australian Open"
              number="18"
            ></slam-component>
            <!-- 2 -->
            <slam-component
              image="roland-garros.png"
              title="Roland Garros"
              number="18"
            ></slam-component>
            <!-- 3 -->
            <slam-component
              image="wimbledon.svg"
              title="Wimbledon"
              number="17"
            ></slam-component>
            <!-- 4 -->
            <slam-component
              image="us-open.png"
              title="US Open"
              number="12"
            ></slam-component>
          </div>
        </div>
      </section>
      <!-- Page 3 -->
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
                The Masters tournaments, along with the Grand Slam tournaments
                make up the most coveted trophies on the annual ATP Tour
                calendar.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap mt-12 justify-center">
            <!-- 1 -->
            <master-component
              image="indian-wells.png"
              title="Indian Wells"
              number="13"
            ></master-component>
            <!-- 2 -->
            <master-component
              image="miami.png"
              title="Miami"
              number="15"
            ></master-component>
            <!-- 3 -->
            <master-component
              image="monte-carlo.png"
              title="Monte-Carlo"
              number="17"
            ></master-component>
            <!-- 4 -->
            <master-component
              image="madrid.png"
              title="Madrid"
              number="13"
            ></master-component>
            <!-- 5 -->
            <master-component
              image="italian.png"
              title="Italian"
              number="20"
            ></master-component>
            <!-- 6 -->
            <master-component
              image="canadian.png"
              title="Canadian"
              number="11"
            ></master-component>
            <!-- 7 -->
            <master-component
              image="cincinnati.png"
              title="Cincinnati"
              number="10"
            ></master-component>
            <!-- 8 -->
            <master-component
              image="shanghai.png"
              title="Shanghai"
              number="8"
            ></master-component>
            <!-- 9 -->
            <master-component
              image="paris.png"
              title="Paris"
              number="8"
            ></master-component>
          </div>
        </div>
      </section>
    </main>
    <!-- Footer -->
    <footer-component></footer-component>
  </div>
</template>

<script>
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
import SlamComponent from "../components/Slam.vue";
import MasterComponent from "../components/Master.vue";
import PlayerComponent from "../components/Player.vue";

export default {
  name: "HeroView",
  components: {
    NavbarComponent,
    FooterComponent,
    SlamComponent,
    MasterComponent,
    PlayerComponent,
  },
};
</script>
