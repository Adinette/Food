<template>
    <router-link to="add"> <button class="p-2 py-1 m-1 bg-green-700 text-white text-xl font-medium rounded w-32"> Ajouter</button></router-link>
    <div id="categorieConteneur" class="grid grid-cols-3 gap-4 p-6 bg-white w-full">
       <CategoryA  v-for ="categorie in categories" :categorie="categorie" :key="categorie.id"/> 
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

  try{
    
      const result = request('categorie', 'GET', { "Authorization": localStorage.getItem('token') }, null, false);
      result.then(data => {
        let html = '';
        for(let item of data){ 
          html += `<div id="category_id" class="shadow-md col-span-1 p-10 bg-white w-full max-w-xl">
          <img
        src= "${ item.imageUrl }"
        alt=""
        class="hover:scale-125  duration-300 w-32"
      />
    <div class="flex flex-col items-end  space-y-2 text-center">
        <span class="font-bold text-slate-700">${ item.nom }</span>
        <button
          class="p-2  py-1 m-2 bg-green-700 row-span-2 hover:bg-slate-500 text-white text-xl font-medium rounded w-32">
          Consulter categorie</button>
    </div>
    <router-link to="/add"><button type="submit" id="btn_modifier_categorie"
                class=" idCategorie p-2 py-1 m-2 text-white bg-green-700  hover:bg-slate-400 justify-center text-xl font-medium rounded w-32">
                Modifier</button> </router-link>
                <button
                class="p-2 py-1 m-2 text-white bg-green-700  hover:bg-slate-400 justify-center text-xl font-medium rounded w-32">
                Supprimer</button>
              </div>`
        }
        let element = document.getElementById('categorieConteneur') 
        element.innerHTML= html
        
      });
  }catch(error){
      console.log(error)
  }
  document.addEventListener("DOMContentLoaded", function() {
  let modifier = document.getElementById("btn_modifier_categorie");
  modifier.addEventListener('click', () => {
    const categoryId = editButton.getAttribute('category_id');
    const userId = form.getElementById('#category-userId-input').value;
    const nom = form.getElementById('#category-nom-input').value;
    const imageUrl = form.getElementById('#category-imageUrl-input').value;
    location.assign("to='edit/${item.id}'");
    let form = document.getElementById("formCat");
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('ok')
      
 
});
});
});
   </script>