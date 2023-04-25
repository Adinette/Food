<template>
  <router-link to="addP"> <button class="p-2 py-1 m-1 bg-green-700 text-white text-xl font-medium rounded w-32"> Ajouter</button></router-link>
    <div v-if="category" class="grid grid-cols-3 gap-4 p-6 bg-white w-full">
      <FlatA v-for="(plat, index) in category.meals" :key="index" :plat="plat" />
    </div>
  
    <div v-else>La categorie que vous cherchez n'existe pas</div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useRoute } from "vue-router";
  
  import FlatA from "../../components/admin/FlatA.vue";
  
  const categories = ref([
    {
      image: "assets/image/image37.jpg",
      nom: "Salad",
      lien: "/Salad",
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
  
  const categoryName = useRoute().params.category;
  
  const category = categories.value.find(x => x.nom === categoryName);
  //console.log(category.meals);
  
  
  </script>
  
  <style>
  
  </style>