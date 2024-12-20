<script setup lang="ts">
import CardServices from './CardServices.vue';

const cards = [
    {
        image: "/assets/image/delivery.svg",
        altText: "system",
        title: "System",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

    },
    {
        image: "/assets/image/delivery.svg",
        altText: "delivery",
        title: "Delivery",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

    },
    {
        image: "/assets/image/delivery.svg",
        altText: "poulet",
        title: "500 + Restaurant",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

    },
    {
        image: "/assets/image/delivery.svg",
        altText: "quality",
        title: "Best Quality",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

    }
]
</script>

<template>
    <div class="py-12 mt-8 bg-slate-800 dark:text-gray-50" id="service">
        <div class="container mx-auto">
            <h2 class="font-bold text-5xl text-center"><span class="text-green-600">Our</span> services</h2>
            <div class="flex flex-col md:flex-col lg:flex-row items-center justify-between mt-7">
                <div class="w-1/2 mr-10"><img src="/assets/image/deliver.jpg" alt="" class="rounded-2xl"></div>
                <div class="max-w-sm md:max-w-screen-lg mt-12 xl:mt-0">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <CardServices v-for="(card, index) in cards" :key="index" :image="card.image"
                            :altText="card.altText" :title="card.title" :description="card.description" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>