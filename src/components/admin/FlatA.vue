<template>
  <div class="shadow-md col-span-1 p-10 bg-white w-full max-w-xl">
    <img :src="plat.image" alt="" class="hover:scale-125 duration-300 w-32" />

    <div class="flex flex-col items-end space-y-1 text-center">
      <span class="font-bold text-slate-700">{{ plat.nom }} </span>
      <span class="font-extrabold text-slate-700">{{ plat.prix }}</span>
      <span class="font-normal text-center text-black"><p>{{ plat.description }}</p></span>
      
    <router-link to="addP"><button
        class="p-2 py-1 bg-green-700 hover:bg-slate-500 text-white text-xl font-medium rounded w-32">Modifier
      </button> </router-link>
      <router-link to="addP"><button  @click="retirerPanier()"
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

const count = ref(0);
const retirerPanier = () => {
  Object.keys(commande.value).forEach((key) => {
    delete commande.value[key];
  });
  console.log(commande.value);
  count.value = 0;
};
defineProps({
  plat: {},
});
</script>

