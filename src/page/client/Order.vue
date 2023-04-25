<template>
  <div class="grid grid-cols-3 gap-4 p-6 bg-white w-full">
    <Category
      v-for="(categorie, index) in categories"
      :key="index"
      :categorie="categorie"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Category from "../../components/client/Category.vue";

const categories = ref([
  {
    image: "assets/image/image37.jpg",
    nom: "Salad ",
    lien: "/meals/Salad",
    meals: [
      {
        image: "../assets/image/pngegg.png",
        nom: "salad 1",
        prix: 4500,
        description:
          "Constitué de la lecture la tomate l'oignon l'oeuf et la viande",
      },
      {
        image: "../assets/image/image19.png",
        nom: "salad 2",
        prix: 4000,
        description:
          "Constitué de la lecture la tomate l'oignon l'oeuf et la viande",
      },
      {
        image: "../assets/image/image37.jpg",
        nom: "salad 3",
        prix: 3500,
        description:
          "Constitué de la lecture la tomate l'oignon l'oeuf et la viande",
      },
    ],
  },
]);
</script>
