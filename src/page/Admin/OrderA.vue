<template>
    <router-link to="add"> <button class="p-2 py-1 m-1 bg-green-700 text-white text-xl font-medium rounded w-32"> Ajouter</button></router-link>
    <div class="grid grid-cols-3 gap-4 p-6 bg-white w-full">
       <CategoryA
         v-for="(categorie, index) in categories "
         :key="index" categorie="categorie"/>
     </div>
     
   </template>
   <script setup>
   import { ref } from "vue";
   import CategoryA from "../../components/admin/CategoryA.vue";
   import {request} from "/src/request";
   const categories = ref([
  {
    image: "assets/image/image37.jpg",
    nom: "Salad ",
    lien: "/mealsA/Salad",
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
   
//document.addEventListener("DOMContentLoaded", function() {

  try{
    
      const result = request('categorie', 'GET', { "Authorization": localStorage.getItem('token') }, null, false);
      result.then(data => {
        for (let i = 0; i = categories; i++) {
          //afficher les informations enregistrée dans la base de donnée sur cette page
    if (categories == categories.nom && categories == categories.image) {
      
    }
  }
        console.log(data)
      });
    
  }catch(error){
      console.log(error)
  }
//modification d'une categorie deja ajoutée en affichant les information dans le 
//formulaire lorsqu'on clique sur modifier
// let modifier = document.getElementById("btn_modifier_categorie");
// modifier.addEventListener('click', (event) => {
//   event.preventDefault(); 
//   alert('ok')
// })
//})
   </script>

<style>

</style>