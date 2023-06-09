<template>
  <router-link to="add">
    <button
      class="p-2 py-1 m-1 bg-green-700 text-white text-xl font-medium rounded w-32"
    >
      Ajouter
    </button></router-link
  >
  <div class="grid grid-cols-3 gap-4 p-6 bg-white w-full">
    <div v-for="categorie in categories" :key="categorie?.id">
      <div class="shadow-md col-span-1 p-10 bg-white w-full max-w-xl">
        <img
          :src="categorie?.image"
          alt=""
          class="hover:scale-125 duration-300 w-32"
        />
        <div class="flex flex-col items-end space-y-2 text-center">
          <span class="font-bold text-slate-700">{{ categorie?.nom }}</span>
          <router-link
            :to="{ name: 'mealsA', params: { id: categorie?._id } }"
            class="p-2 py-1 m-2 bg-green-700 row-span-2 hover:bg-slate-500 text-white text-xl font-medium rounded w-32"
          >
            Consulter categorie
          </router-link>
        </div>
        <router-link
          :to="{ name: 'edit', params: { id: categorie?._id } }"
          class="idCategorie p-2 py-1 m-2 text-white bg-green-700 hover:bg-slate-400 justify-center text-xl font-medium rounded w-32"
        >
          Modifier
        </router-link>

        <button
          @click="deleteCategory(categorie?._id)"
          class="p-2 py-1 m-2 text-white bg-green-700 hover:bg-slate-400 justify-center text-xl font-medium rounded w-32"
        >
          Supprimer
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import {
  getCategorie,
  deleteCategorie,
  getPlat,
} from "../../service/category.service";
import router from "/src/router/router";
// const categorie=ref(null);
const categories = ref(null);
const route = useRoute();
const id = ref(null);
const categorie = ref({
  nom: "",
  image: null,
});
const meals = ref({
  image: null,
  nom: "",
  prix: null,
  description: "",
});
onMounted(() => {
  getCategory();
  getMeal();
});

const getCategory = async () => {
  try {
    const gettedCategory = await getCategorie(data);
    categories.value = gettedCategory.data;
  } catch (error) {
    console.log(error);
  }
};

const deleteCategory = async (id) => {
  try {
    const deletedCategory =await deleteCategorie(id)
    getCategory;
    console.log(deletedCategory);
  } catch (error) {
    console.log(error);
  }
};
const getMeal = async () => {
  try {
    const gettedMeal = await getPlat(id);

    meals.value = gettedMeal.data;
  } catch (error) {
    console.log(error);
  }
};
</script>
