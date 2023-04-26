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
        
      ],
    },
  ]);
  try{
    
    const result = request('plat', 'GET', { "Authorization": localStorage.getItem('token') }, null, false);
    result.then(data => {
      let html = '';
      for(let item in data){ 
        html += `<div class="shadow-md col-span-1 p-10 bg-white w-full max-w-xl">
    <img :src=${item.image} alt="" class="hover:scale-125 duration-300 w-32" />

    <div class="flex flex-col items-end space-y-1 text-center">
      <span class="font-bold text-slate-700">${ item.nom } </span>
      <span class="font-extrabold text-slate-700">${ item.prix }</span>
      <span class="font-normal text-center text-black"><p>${item.description }</p></span>
      
    <button id="platConteneur"
        class="p-2 py-1 bg-green-700 hover:bg-slate-500 text-white text-xl font-medium rounded w-32">Modifier
      </button> 
      <button  
        class=" idPlat p-2 py-1 bg-green-700 hover:bg-slate-500 text-white text-xl font-medium rounded w-32">Supprimer
      </button> 
    </div>
  </div>`
      }
      let element = document.getElementById('platConteneur') 
      element.innerHTML= html
    });
}catch(error){
    console.log(error)
}

  const categoryName = useRoute().params.category;
  
  const category = categories.value.find(x => x.nom === categoryName);
 
  
  
  </script>
  
  <style>
  
  </style>