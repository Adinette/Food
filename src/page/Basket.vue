<template>
  <body>
    <ul class="flex justify-between space-x-6">
      <li
        class="px-1 border-b-2 border-transparent hover:border-green-400 duration-300"
      >
        <router-link to="order"
          ><button class="text-1xl text-black font-bold text-center">
            Continuer mes achats
          </button></router-link
        >
      </li>
    </ul>
    <h3 class="text-4xl text-black font-bold text-center">Votre panier</h3>
    <div class="flex justify-around items-center p-4 mt-12 ">
      <div class="w-1/3 flex flex-col space-y-2">
        <p class="text-xl text-slate font-bold">Votre panier contient :{{ panierStore.nbPlat }} plat(s)</p>
        <div class="bg-green-700 space-y-3 p-8 w-64 rounded-xl">
          <div class="text-xl text-white">Total: {{ panierStore.total }}</div>
         <router-link to="count"><button class="p-1 py-1  bg-green-700 text-white  hover:bg-slate-500 justify-center text-xl font-medium rounded w-32">Payer</button></router-link>
        </div>
      </div>
     
        <div class="flex justify-around items-center p-4 mt-12 font-bold">
          <div class="w-1/3 flex flex-col space-y-2"><img src="/assets/image/icone1.jpg" alt="" /></div>
        </div>
    </div>
       
        <div v-for="(plat, index) in panier" :key="index" :plat="plat">
          <div class="grid space-y-1 p-10 m-20 border-green-700 rounded-2xl bg-green-700 grid-cols-5 item-center gap-3">
            <img :src="plat.image" alt="" class="hover:scale-125 text-center duration-300 w-128"/>
            <span type="nom" id="nom" class="font-bold text-white">{{ plat.nom }}
            </span>
            <span type="number" id="prix" class="font-extrabold text-white">{{ plat.prix }}
            </span>
            <span><div v-for="(panier, index) in panier" :key="index">{{}}</div>
              <button @click="panierStore.retirerPanier()" class="p-2 py-1 text-white hover:bg-slate-400 justify-center text-xl font-medium rounded w-32">RETIRER</button>
            </span>
            <div v-for="(plat, index) in panier" :key="index" :plat="plat" class="">{{}}</div>
            <div class=""><select name="number" id="number"  class="p-2 m-2 text-end rounded-xl">
              <option value="1" selected="selected">1</option>
              <option value="2" >2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5" >5</option></select>
            </div>
          </div>
        </div>
        <div class="space-y-2 text-center pt-6 pb-6">
          <button @click="panierStore.viderPanier(index)" class="p-2  py-1 bg-green-700 text-white  hover:bg-slate-500  text-xl font-medium rounded w-32">
          Vider Panier</button>
        </div>
   
  </body>
</template>
<script setup>
//import { useCommandeStore } from "../store/commande";
import { usePanierStore } from "../store/panier";
//const commandeStore = useCommandeStore();
const panierStore = usePanierStore();
//const commande = commandeStore.getCommande;
const panier = panierStore.getPanier;

</script>
