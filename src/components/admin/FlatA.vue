<template>
  <div class="shadow-md col-span-1 p-10 bg-white w-full max-w-xl">
    <img :src="plat?.image" alt="" class="hover:scale-125 duration-300 w-32" />

    <div class="flex flex-col items-end space-y-1 text-center">
      <span class="font-bold text-slate-700"> {{ plat?.nom }}</span>
      <span class="font-extrabold text-slate-700">{{ plat?.prix }}</span>
      <span class="font-normal text-center text-black"
        ><p>{{ plat?.description }}</p></span>

      <router-link
        :to="{ name: 'editPlat', params: { id: plat?._id } }"
        id="platConteneur"
        class="p-2 py-1 bg-green-700 hover:bg-slate-500 text-white text-xl font-medium rounded w-32"
      >
        Modifier
      </router-link>

      <button
        @click="deletePlat(plat?._id)"
        class="p-2 py-1 bg-green-700 hover:bg-slate-500 text-white text-xl font-medium rounded w-32"
      >
        Supprimer
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import { request } from "/src/request";
const commande = ref({
  image: "",
  nom: "",
  prix: "",
  description: "",
});

defineProps({
  plat: {},
});
onMounted(() => {
  getPlat ();
});
const getPlat = () => {
  try {
    const result = request(
      "plat/"+categorie?.id,
      "GET",
      { Authorization: localStorage.getItem("token") },
      null,
      false
    );
    result.then((data) => {
      plat.value = data;
    });
  } catch (error) {
    console.log(error);
  }
};
const deletePlat = (id) => {
  try {
    const result = request(
      "plat/" + id,
      "DELETE",
      { Authorization: localStorage.getItem("token") },
      null,
      false
    );
    result.then((data) => {});
    getPlat;
  } catch (error) {
    console.log(error);
  }
};
</script>
