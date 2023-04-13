<script setup>
import Plat from "../components/Plat.vue";
import { ref } from "vue";
import {usePanierStore} from "../store/panier"

const panier = usePanierStore()


const plats = ref([
  {
    image: "assets/image/image60.png",
    nom: "Poulet 1",
    prix: "$65.99",
  },
  {
    image: "assets/image/image61.png",
    nom: "Poulet 2",
    prix: "$65.99",
  },
  {
    image: "assets/image/image62.jpg",
    nom: "Poulet 3",
    prix: "$65.99",
  },
  {
    image: "assets/image/image63.jpg",
    nom: "Poulet 4",
    prix: "$65.99",
  },
  {
    image: "assets/image/image3.jpg",
    nom: "Poulet 5",
    prix: "$65.99",
  },
  {
    image: "assets/image/image64.png",
    nom: "Poulet 6",
    prix: "$65.99",
  },
]);
</script>

<template>
  <div class="grid grid-cols-3 gap-4 p-6 bg-white w-full">
    <Plat v-for="(plat, index) in plats" :key="index" :plat="plat" />
  </div>
</template>