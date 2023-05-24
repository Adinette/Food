<template>
 <div v-if="categories" class="grid grid-cols-3 gap-4 p-6 bg-white w-full">
    <Flat v-for="(plat, index) in categories" :key="index" :plat="plat" />
  </div>

  <div v-else>La categorie que vous cherchez n'existe pas</div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Flat from "../../components/client/Flat.vue";
import { request } from "/src/request";

const route = useRoute();
const id = ref(route.params.id);
const categories = ref(null);
// const count = null;
// const _id = "";
// const userId = "";
// localStorage.getItem("userId");
// defineProps({
//   plat: {},
// });

onMounted(() => {
  getCategorieFood(id);
  // ajoutPanier();
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

// const ajoutPanier = (id) => {
//   try {
//     const result = request(
//       "panier",
//       "POST",
//       {
//         "Content-Type": "application/json"
//       },
//       JSON.stringify({
//         _id: '',
//         userId: '',
//       })
//     );
//     result.then((data) => {
//       console.log(data);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

</script>

<style>

</style>