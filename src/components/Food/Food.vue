<template>
    <div class="mb-8">
        <div class="max-w-sm md:max-w-screen-md mx-auto mb-8">
            <div class="text-center">
                <div class="font-bold text-5xl">
                    Menu that
                    <span class="text-green-600">always</span> makes you fall in
                    <span class="text-red-600">love</span>
                </div>
            </div>

        </div>
        <div class="max-w-sm md:max-w-screen-lg mx-auto">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <CardFood v-for="(card, index) in cards" :key="index" :image="card.image" :altText="card.altText"
                    :title="card.title" />
            </div>
        </div>
    </div>
</template>

<script setup>
import CardFood from '../Food/CardFood.vue'

const cards = [
  {
    image: "/assets/image/image64.png",
    altText: "poulet",
    title: "Poulet",
  },
  {
    image: "/assets/image/image68.jpg",
    altText: "riz",
    title: "Riz",
  },
  {
    image: "/assets/image/image25.jpg",
    altText: "pizza",
    title: "Pizza",
  },
  {
    image: "/assets/image/image37.jpg",
    altText: "salad",
    title: "Salade",
  },
  {
    image: "/assets/image/image48.jpg",
    altText: "chawarma",
    title: "Chawarma",
  },
  {
    image: "/assets/image/image53.png",
    altText: "pattes",
    title: "Pattes",
  },
  {
    image: "/assets/image/image12.jpg",
    altText: "yaourt",
    title: "Yaourt",
  },
  {
    image: "/assets/image/image29.jpg",
    altText: "soda",
    title: "Soda",
  },
]
</script>