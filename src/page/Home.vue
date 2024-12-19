<template>
  <div class="item-center text-center mb-8">
    <div class="home-bg relative isolate p-10">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-12">
        <div class="text-center">
          <h1 class="text-balance text-6xl font-semibold tracking-tight text-white">
            Votre Restaurant en ligne</h1>
          <p class="mt-8 text-pretty text-lg font-medium text-white sm:text-xl/8">
            Nous sommes a votre disposition pour tout vos achats ,il suffit juste
        d'envoyer la commande</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <router-link :to="{ name: 'reservation' }"
              class="rounded-full bg-green-600 px-8 py-3 xl:text-xl md:text-md font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
              Commander dès maintenant</router-link>
            <a href="#about"
              class="bg-white text-green-600 border-2 border-green-600 hover:bg-white focus:ring-4 focus:outline-none focus:ring-white font-semibold rounded-full xl:text-xl md:text-md px-8 py-3 text-center">En
              savoir plus</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="" id="about">
    <div class="max-w-screen-xl mx-auto">
      <div class="text-center">
        <h2 class="text-green-700 font-bold text-3xl">A Propos de Nous</h2>
        <span class="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, aperiam pariatur
          aspernatur sapiente, natus ducimus modi nam accusamus tempora recusandae voluptates excepturi. Dolores
          recusandae quis eius velit, qui quisquam tenetur?</span>
      </div>
    </div>
    <div class="max-w-screen-2xl mx-auto mt-5">
      <div class="grid grid-cols-3 space-6">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from '../components/Card.vue'
import { ref } from "vue";

const show = ref(false);
</script>
<style>
.home-bg{
  background-image: url(/assets/image/image3.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
