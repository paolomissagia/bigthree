<template>
  <div class="w-1/2 lg:w-1/3 p-4 text-center" ref="target">
    <div
      class="text-gray-900 p-3 w-20 h-20 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
    >
      <img :src="require(`@/assets/images/masters/${image}`)" />
    </div>
    <h6 class="text-2xl mt-5 font-semibold text-white">{{ title }}</h6>
    <p class="text-xl mt-2 mb-4 text-gray-500">
      <vue3-autocounter
        ref="counter"
        :startAmount="0"
        :endAmount="number"
        :duration="3"
        prefix=""
        suffix=""
        separator=""
        decimalSeparator=""
        :decimals="0"
        :autoinit="false"
      />
    </p>
  </div>
</template>

<script>
import { ref } from "vue";
import { useElementVisibility } from "@vueuse/core";

export default {
  name: "MasterComponent",
  props: {
    image: String,
    title: String,
    number: Number,
  },
  setup() {
    const target = ref(null);
    const targetIsVisible = useElementVisibility(target);

    return {
      target,
      targetIsVisible,
    };
  },

  watch: {
    targetIsVisible: {
      immediate: true,
      handler(isVisible) {
        if (isVisible) {
          this.$refs.counter.start();
        }
      },
    },
  },
};
</script>
