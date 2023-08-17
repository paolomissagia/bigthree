<template>
  <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" ref="target">
    <div class="px-6">
      <img
        :src="require(`@/assets/images/slams/${image}`)"
        class="rounded-full max-w-full max-h-[75px] mx-auto"
      />
      <div class="pt-6 text-center">
        <h5 class="text-2xl font-bold whitespace-nowrap">{{ title }}</h5>
        <p class="mt-1 text-xl text-gray-500 uppercase font-semibold">
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
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useElementVisibility } from "@vueuse/core";

export default {
  name: "SlamComponent",
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
