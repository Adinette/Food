<template>
  <body>
    <ul class="flex justify-between space-x-6">
      <li
        class="px-1 border-b-2 border-transparent hover:border-green-400 duration-300"
      >
        <router-link to="commande"
          ><button class="text-1xl text-slate-700 font-bold text-center">
            Continuer mes achats
          </button></router-link
        >
      </li>
    </ul>
    <h3 class="text-4xl text-slate-700 font-bold text-center">Votre panier</h3>
    <div class="flex justify-around items-center p-4 mt-12 font-bold">
      <div class="w-1/3 flex flex-col space-y-2">
        <img src="/assets/image/icone1.jpg" alt="" />
      </div>
      <div class="space-y-2">
        <div v-for="(plat, index) in panier" :key="index" :plat="plat">
          <div class="grid grid-cols-3 gap-4">
            <img
              :src="plat.image"
              alt=""
              class="hover:scale-125 duration-300 w-64"
            />
            <span type="nom" id="nom" class="font-bold text-slate-700"
              >{{ plat.nom }}
            </span>
            <span type="number" id="prix" class="font-extrabold text-slate-700"
              >{{ plat.prix }}
            </span>
            <span>
              <div v-for="(panier, index) in panier" :key="index">{{}}</div>
              <button
                @click="panierStore.retirerPanier()"
                class="p-2 py-1 bg-green-700 text-black text-center hover:bg-slate-300 justify-center text-xl font-medium rounded w-32"
              >
                RETIRER
              </button>
            </span>
          </div>
        </div>
        <div v-for="(plat, index) in panier" :key="index" :plat="plat" class="">
          {{}}
        </div>
        <button
          @click="panierStore.viderPanier(index)"
          class="p-1 py-1 bg-green-700 text-black text-center hover:bg-slate-300 justify-center text-xl font-medium rounded w-32"
        >
          Vider Panier
        </button>
        <div class="">Total: {{ panierStore.total }}</div>
      </div>
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
