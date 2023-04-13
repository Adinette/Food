<script setup>
import Plat from "../components/Plat.vue";
import { ref } from "vue";
import {usePanierStore} from "../store/panier"

const panier = usePanierStore()


const plats = ref([
  {
    image: "assets/image/image14.jpg",
    nom: "Pizza 1",
    prix: 65.99,
  },
  {
    image: "assets/image/image15.jpg",
    nom: "Pizza 2",
    prix: 65.99,
  },
  {
    image: "assets/image/image56.jpg",
    nom: "Pizza 3",
    prix: 65.99,
  },
  {
    image: "assets/image/image57.jpg",
    nom: "Pizza 4",
    prix: 65.99,
  },
  {
    image: "assets/image/image58.jpg",
    nom: "Pizza 5",
    prix: 65.99,
  },
  {
    image: "assets/image/image59.png",
    nom: "Pizzat 6",
    prix: 65.99,
  },
]);
</script>

<template>
  <div class="grid grid-cols-3 gap-4 p-6 bg-white w-full">
    <Plat v-for="(plat, index) in plats" :key="index" :plat="plat" />
  </div>
</template>