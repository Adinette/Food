<template>
  <div class="shadow-md col-span-1 p-10 bg-white w-full max-w-xl">
    <img :src="plat.image" alt="" class="hover:scale-125 duration-300 w-32" />
    <div class="flex flex-col items-end space-y-1 text-center">
      <span class="font-bold text-slate-700">{{ plat.nom }} </span>
      <span class="font-extrabold text-slate-700">{{ plat.prix }}</span>
      <span class="font-normal text-black"
        ><p>{{ plat.description }}</p></span
      >
      <button @click="panierStore.ajoutPanier(plat)">
        <button
          type="submit"
          class="p-2 py-1 bg-green-700 text-white text-xl font-medium rounded w-full"
        >
          Ajouter au panier
        </button>
      </button>
    </div>
  </div>
</template>

<script setup>
const panierStore = usePanierStore();
import { usePanierStore } from "../../store/panier";
import { ref } from "vue";
// import { request } from "/src/request";
// import { onMounted } from "vue";
import { useRoute } from "vue-router";
const panier = usePanierStore();

const commande = ref({
  image: "",
  nom: "",
  prix: "",
  description: "",
});
const router = useRoute();
const categorie = ref(null);
</script>
<!-- :to="{ name: 'basket', params: { id: plat?._id } }" -->
