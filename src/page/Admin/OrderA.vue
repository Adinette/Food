<template>
  <router-link to="add">
    <button
      class="p-2 py-1 m-1 bg-green-700 text-white text-xl font-medium rounded w-32"
    >
      Ajouter
    </button></router-link
  >
  <div class="grid grid-cols-3 gap-4 p-6 bg-white w-full">
  <div  v-for="categorie in categories" :key="categorie?.id">
   
      <div class="shadow-md col-span-1 p-10 bg-white w-full max-w-xl">
        <img
          :src="categorie?.image"
          alt=""
          class="hover:scale-125 duration-300 w-32"
        />
        <div class="flex flex-col items-end space-y-2 text-center">
          <span class="font-bold text-slate-700">{{ categorie?.nom }}</span>
          <button
            class="p-2 py-1 m-2 bg-green-700 row-span-2 hover:bg-slate-500 text-white text-xl font-medium rounded w-32"
          >
            Consulter categorie
          </button>
        </div>
        <router-link :to="'/edit/' + categorie?.id"
          ><button
            type="submit"
            id="btn_modifier_categorie"
            class="idCategorie p-2 py-1 m-2 text-white bg-green-700 hover:bg-slate-400 justify-center text-xl font-medium rounded w-32"
          >
            Modifier
          </button>
        </router-link>
        <button
          @click="retirerPanier()"
          class="p-2 py-1 m-2 text-white bg-green-700 hover:bg-slate-400 justify-center text-xl font-medium rounded w-32"
        >
          Supprimer
        </button>
      </div>
    </div>
      
   
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";

import { request } from "/src/request";
let data;
const categories = ref(null);

onMounted(() => {
  try {
    const result = request(
      "categorie",
      "GET",
      { Authorization: localStorage.getItem("token") },
      null,
      false
    );
    result.then((data) => {
      categories.value = data;
      console.log(categories.value);
    });
  } catch (error) {
    console.log(error);
  }
  
});


</script>
