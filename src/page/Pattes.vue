<script setup>
import Plat from "../components/Plat.vue";
import { ref } from "vue";
import {usePanierStore} from "../store/panier"

const panier = usePanierStore()


const plats = ref([
  {
    image: "assets/image/image7.png",
    nom: "Pattes 1",
    prix: 65.99,
  },
  {
    image: "assets/image/image34.jpg",
    nom: "Pattes  2",
    prix:65.99,
  },
  {
    image: "assets/image/image53.png",
    nom: "Pattes  3",
    prix: 65.99,
  },
  {
    image: "assets/image/image54.jpg",
    nom: "Pattes  4",
    prix: 65.99
  },
  {
    image: "assets/image/image55.png",
    nom: "Pattes  5",
    prix: 65.99,
  },
  {
    image: "assets/image/image36.jpg",
    nom: "Pattes  6",
    prix:65.99,
  },
]);
</script>

<template>
  <div class="grid grid-cols-3 gap-4 p-6 bg-white w-full">
    <Plat v-for="(plat, index) in plats" :key="index" :plat="plat" />
  </div>
</template>