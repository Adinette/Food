
<template>
    
    <div class="shadow-md col-span-1 p-10 bg-white w-full max-w-xl">
      <img
        :src="categorie.image"
        alt=""
        class="hover:scale-125  duration-300 w-32"
      />
    <div class="flex flex-col items-end  space-y-2 text-center">
        <span class="font-bold text-slate-700">{{ categorie.nom }}</span>
            <router-link :to="categorie.lien"><button
            class="p-2  py-1 m-2 bg-green-700 row-span-2 hover:bg-slate-500 text-white text-xl font-medium rounded w-32">
            Consulter categorie</button></router-link>
            
    </div>
      <router-link to="add">
                <button id="btn_modifier_categorie"
                class="p-2 py-1 m-2 text-white bg-green-700  hover:bg-slate-400 justify-center text-xl font-medium rounded w-32">
                Modifier</button> </router-link>
                <button @click="retirerPanier()"
                class="p-2 py-1 m-2 text-white bg-green-700  hover:bg-slate-400 justify-center text-xl font-medium rounded w-32">
                Supprimer</button>
    </div>    
</template>
<script setup>
import { ref } from 'vue';
const commande= ref({
    image:"",
    nom:"",
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
  categorie: {},
});

</script>
