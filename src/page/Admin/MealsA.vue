<template>
  <router-link to="/addP">
    <button
      class="p-2 py-1 m-1 bg-green-700 text-white text-xl font-medium rounded w-32"
    >
      Ajouter
    </button>
  </router-link>
  <div v-if="categories" class="grid grid-cols-3 gap-4 p-6 bg-white w-full">
    <FlatA v-for="(plat, index) in categories" :key="index" :plat="plat" />
  </div>

  <div v-else>La categorie que vous cherchez n'existe pas</div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import FlatA from "../../components/admin/FlatA.vue";
import { request } from "/src/request";

const route = useRoute();
const id = ref(route.params.id);
const categories = ref(null);

onMounted(() => {
  getCategorieFood(id);
});

const getCategorieFood = (id) => {
  try {
    const result = request(
      "plat/" + id.value,
      "GET",
      { Authorization: localStorage.getItem("token") },
      null,
      false
    );
    result.then((data) => {
      categories.value = data;
      console.log(data);
    });
  } catch (error) {
    console.log(error);
  }
};
</script>

<style></style>
