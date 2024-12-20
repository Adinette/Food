<template>
    <div class="">
        <img :src="image" :alt="altText"
            class="object-cover object-center w-44 h-40 rounded-full" />
        <div class="flex justify-center align-center p-3 bg-green-600 rounded-3xl w-44">
            <h2 class="text-2xl font-semibold tracking-wide text-white">{{ title }}</h2>
        </div>
    </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    image: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      default: "Image description",
    },
    title: {
      type: String,
      required: true,
    }
  },
};
</script>