<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
  >
    <div class="px-4 py-5 flex-auto">
      <div
        :class="`text-white p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-5 shadow-lg rounded-full bg-${color}`"
      >
        <img
          class="max-w-[85%]"
          :src="require(`@/assets/images/players/${image}`)"
        />
      </div>
      <h6 class="text-xl font-semibold">{{ title }}</h6>
      <p class="mt-2 mb-4 text-gray-600">
        {{ slams }} <br />
        {{ masters }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "PlayerComponent",
  props: {
    image: String,
    title: String,
    slams: String,
    masters: String,
    color: String,
  },
};
</script>
