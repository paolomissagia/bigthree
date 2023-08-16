<template>
  <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
    <div class="px-6">
      <img
        :src="require(`@/assets/images/${image}`)"
        class="rounded-full max-w-full max-h-[75px] mx-auto"
      />
      <div class="pt-6 text-center">
        <h5 class="text-xl font-bold">{{ title }}</h5>
        <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
          {{ number }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GrandSlamComponent",
  props: {
    image: String,
    title: String,
    number: String,
  },
};
</script>
