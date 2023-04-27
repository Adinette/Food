<template>
  <div class="max-w-screen-xl mx-auto flex flex-col items-center space-y-4 p-6">
    <h2 class="uppercase text-black text-2xl font-bold">
      Formulaire d'ajout des categories
    </h2>
    <form
      @submit.prevent
      id="formCat"
      action=""
      class="bg-gray-100 shadow w-2/3 p-4 space-y-4"
    >
      <div class="space-y-2">
        <label for="nom" class="font-medium text-gray-700">Nom</label>
      </div>
      <input
        type="text"
        v-model="categorie.nom"
        name="nom"
        id="nom"
        class="rounded w-full p-2"
      />
      <div class="space-y-2">
        <label for="image" class="font-medium text-gray-700">Image</label>
        <input
          type="file"
          name="image"
          id="image"
          class="rounded bg-white w-full p-2"
        />
      </div>
      <button
        type="submit"
        class="p-2 py-1 bg-green-700 text-white text-xl font-medium rounded w-full"
      >
        Ajouter
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { request } from "/src/request";

const categorie = ref({
  nom: "",
  image: null,
});

const route = useRoute();
const id = ref(null);

id.value = route.params.id;

document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("formCat");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let nom = document.getElementById("nom");
    let image = document.getElementById("image");
    if (nom.value == "" || image.value == "") {
      alert("Tous les champs sont obligatoires");
    } else {
      try {
        const toSend = new FormData();
        toSend.append("categorie", JSON.stringify({ nom: nom.value }));
        toSend.append("image", image.files[0]);
        console.log(typeof toSend);

        const result = request(
          "categorie",
          "POST",
          { Authorization: localStorage.getItem("token") },
          toSend,
          false
        );
        result.then((data) => {});
        // location.assign("/orderA");
      } catch (error) {
        console.log(error);
      }
    }
  });
});
</script>

<style></style>
