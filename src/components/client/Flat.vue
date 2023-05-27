<template>
  <div class="shadow-md col-span-1 p-10 bg-white w-full max-w-xl">
    <img :src="plat.image" alt="" class="hover:scale-125 duration-300 w-32" />
    <div class="flex flex-col items-end space-y-1 text-center">
      <span class="font-bold text-black">{{ plat.nom }} </span>
      <span class="font-extrabold text-black">{{ plat.prix }}</span>
      <span class="font-normal text-black"
        ><p>{{ plat.description }}</p></span
      >
      
        <button
        @click="addToBasket(plat)"
          type="submit"
          class="p-2 py-1 bg-green-700 text-white text-xl font-medium rounded w-full"
        >
          Ajouter au panier
        </button>
     
    </div>
  </div>
</template>

<script setup>
import { addBasket } from "../../service/basket.service";
import { ref } from "vue";
// import { usePanierStore } from "../../store/panier";
import { useRoute } from "vue-router";

// const panierStore = usePanierStore();
const plat = ref({
  _id: "",
  image: "",
  nom: "",
  prix: "",
  description: "",
});
// const router = useRoute();
// const ajoutPanier (value)=>{
//   console.log(value);
// }
const addToBasket = async (value) => {
  console.log(value);
  // try {

  //   const addedBasket = await addBasket(plat.value);
  //   // plat.value=data
  //   const userId = localStorage.getItem("userId");
  //   console.log(plat);
  //   if (!userId) {
  //     console.error("ID du client non trouvé");
  //     return;
  //   }
    
  //   const platData = {
  //     platId: plat._id,
  //     clientId: userId,
  //   };
    
  //   plat.value = addedBasket;
  
  //   console.log(platData);
  // } catch (error) {
  //   console.error(error);
  // }
};

addToBasket();
</script>
