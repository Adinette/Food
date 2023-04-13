<template>
  <div class="shadow-md col-span-1 p-6 bg-white w-full max-w-xl">
    <img :src="plat.image" alt="" class="hover:scale-125 duration-300 w-64" />
    <div class="flex flex-col items-center space-y-1 text-center">
      <span class="font-bold text-slate-700">{{ plat.nom }} </span>
      <span class="font-extrabold text-slate-700">{{ plat.prix }}</span>
      <router-link to="panier"><button
        @click="panier.ajoutPanier(plat)"
        class="p-2 py-1 bg-green-700 text-white text-xl font-medium rounded w-32"
      >
        Ajouter au panier
      </button></router-link>
    </div>
  </div>
</template>

<script setup>
import { usePanierStore } from "../store/panier";

const panier = usePanierStore();

defineProps({
  plat: {},
});
</script>

<style></style>
