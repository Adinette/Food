<script setup>
import Plat from "../components/Plat.vue";
import { ref } from "vue";
import {usePanierStore} from "../store/panier"

const panier = usePanierStore()


const plats = ref([
  {
    image: "assets/image/image67.png",
    nom: "Riz 1",
    prix:65.99,
  },
  {
    image: "assets/image/image68.jpg",
    nom: "Riz 2",
    prix: 65.99,
  },
  {
    image: "assets/image/image69.jpg",
    nom: "Riz 3",
    prix: 65.99,
  },
  {
    image: "assets/image/image70.png",
    nom: "Riz 4",
    prix: 65.99,
  },
  {
    image: "assets/image/image71.jpg",
    nom: "Riz 5",
    prix: 65.99,
  },
  {
    image: "assets/image/image72.jpg",
    nom: "Riz 6",
    prix: 65.99,
  },
]);
</script>

<template>
  <div class="grid grid-cols-3 gap-4 p-6 bg-white w-full">
    <Plat v-for="(plat, index) in plats" :key="index" :plat="plat" />
  </div>
</template>