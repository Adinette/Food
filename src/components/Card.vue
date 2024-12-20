<template>
    <div class="rounded-2xl shadow-xl">
        <img :src="image" :alt="altText"
            class="object-cover object-center w-full rounded-t-md h-72" />
        <div class="p-4">
            <h2 class="text-3xl font-semibold tracking-wide">{{ title }}</h2>
            <p class="dark:text-gray-800 my-3">{{ description }}</p>
            <div class="flex justify-between items-center">
                <a :href="buttonLink"
                class="rounded-full bg-green-600 px-8 py-3 xl:text-xl md:text-md font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                {{ buttonText }}</a>
                <div class="text-pretty text-green-600">{{ price }}</div>
            </div>
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
    },
    description: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      default: "Order now",
    },
    buttonLink: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    }
  },
};
</script>