<template>
  <div class="shadow-md col-span-1 p-10 bg-white w-full max-w-xl">
    <img :src="props.plat.image" class="hover:scale-125 duration-300 w-32" />
    <div class="flex flex-col items-end space-y-1 text-center">
      <span class="font-bold text-black">{{ props.plat.nom }} </span>
      <span class="font-extrabold text-black">{{ props.plat.prix }}</span>
      <span class="font-normal text-black"
        ><p>{{ props.plat.description }}</p></span
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

// import { useRoute } from "vue-router";
// import { ref } from "vue";

const props = defineProps({
  plat: { required: true },
});


const addToBasket = async (plat) => {
  console.log(plat);
  try {
    const addedBasket = await addBasket(plat.value);
    const userId = localStorage.getItem("userId");
    console.log(plat);
    if (!userId) {
      console.error("ID du client non trouvé");
      return;
    }

    const platData = {
      platId: plat._id,
      clientId: userId,
    };

    plat.value = addedBasket;

    console.log(platData);
  } catch (error) {
    console.error(error);
  }
};

 
</script>
