<template>
  <div class="shadow-md col-span-1 p-10 bg-white w-full max-w-xl">
    <img src="../assets/image/pngegg.png" alt="" class="hover:scale-125 duration-300 w-32" />

    <div class="flex flex-col items-end space-y-1 text-center">
      <span class="font-bold text-slate-700">Salade 1 </span>
      <span class="font-extrabold text-slate-700">3000</span>
      <span class="font-normal text-center text-black"><p>Salade</p></span>
      
    <router-link to="addP"><button id="platConteneur"
        class="p-2 py-1 bg-green-700 hover:bg-slate-500 text-white text-xl font-medium rounded w-32">Modifier
      </button> </router-link>
      <router-link to="addP"><button  
        class="p-2 py-1 bg-green-700 hover:bg-slate-500 text-white text-xl font-medium rounded w-32">Supprimer
      </button> </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const commande= ref({
    image:"",
    nom:"",
    prix:"",
    description:"",
})

defineProps({
  plat: {},
});
</script>

