<template>
  <div class="w-1/2 lg:w-1/3 p-4 text-center">
    <div
      class="text-gray-900 p-3 w-20 h-20 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
    >
      <img :src="require(`@/assets/images/masters/${image}`)" />
    </div>
    <h6 class="text-xl mt-5 font-semibold text-white">{{ title }}</h6>
    <p class="mt-2 mb-4 text-gray-500">
      {{ number }}
    </p>
  </div>
</template>

<script>
export default {
  name: "MasterComponent",
  props: {
    image: String,
    title: String,
    number: String,
  },
};
</script>
