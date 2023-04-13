<template>
 <div class="grid grid-cols-3 gap-4 p-6 bg-white w-full">
    <Categorie
      v-for="(categorie, index) in categories"
      :key="index"
      :categorie="categorie"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Categorie from "../components/Categorie.vue";

const categories = ref([
  {
    image: "assets/image/image37.jpg",
    nom: "Salad ",
    lien: "/salad",
  },
  {
    image: "assets/image/image60.png",
    nom: "Poulet",
    lien: "/poulet",
  },
  {
    image: "assets/image/image49.jpg",
    nom: "Chawarma",
    lien: "/chawarma",
  },
  {
    image: "assets/image/image68.jpg",
    nom: "Riz",
    lien: "/riz",
  },
  {
    image: "assets/image/image56.jpg",
    nom: "Pizza",
    lien: "/pizza",
  },
  {
    image: "assets/image/image55.png",
    nom: "Pattes",
    lien: "/pattes",
  },
]);
</script>