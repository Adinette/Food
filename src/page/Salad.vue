<script setup>
import Plat from "../components/Plat.vue";
import { ref } from "vue";
import {usePanierStore} from "../store/panier"

const panier = usePanierStore()


const plats = ref([
  {
    image: "assets/image/pngegg.png",
    nom: "salad 1",
    prix: "65.99",
  },
  {
    image: "assets/image/image19.png",
    nom: "salad 2",
    prix: 65.99,
  },
  {
    image: "assets/image/pngegg.png",
    nom: "salad 1",
    prix:65.99,
  },
  {
    image: "assets/image/pngegg.png",
    nom: "salad 1",
    prix: 65.99,
  },
  {
    image: "assets/image/pngegg.png",
    nom: "salad 1",
    prix: 65.99,
  },
  {
    image: "assets/image/pngegg.png",
    nom: "salad 1",
    prix: 65.99,
  },
]);
</script>

<template>
  <div class="grid grid-cols-3 gap-4 p-6 bg-white w-full">
    <Plat v-for="(plat, index) in plats" :key="index" :plat="plat" />
  </div>
</template>
