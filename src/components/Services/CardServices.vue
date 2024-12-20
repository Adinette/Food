<template>

    <div class="rounded-2xl shadow-md bg-white">
        <img :src="image" :alt="altText"
            class="object-cover object-center w-40 h-40 text-green-600">
        <div class="flex flex-col justify-between p-6 space-y-8">
            <div class="space-y-2">
                <h2 class="text-3xl font-bold tracking-wide text-green-600">{{ title }}</h2>
                <p class="text-slate-800 font-medium">{{ description }}</p>
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
  },
};
</script>