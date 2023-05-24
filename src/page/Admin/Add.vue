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
          @change="onFileSelected"
          class="rounded bg-white w-full p-2"
        />
      </div>

      <button
        @click="submit"
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
import { request } from "/src/request";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const categorie = ref({
  nom: "",
  image: null,
});
const router = useRoute();
const id = ref(router.params.id);
console.log(id.value);

onMounted(() => {
  if (id.value) {
    try {
      const getCategorie = request(
        "categorie/" + id.value,
        "GET",
        { Authorization: localStorage.getItem("token") },
        null,
        false
      );

      getCategorie.then((data) => {
        categorie.value.nom = data.nom;
        categorie.value.image = data.image;
      });
    } catch (error) {
      console.log(error);
    }
  }
});

const onFileSelected = (event) => {
  categorie.value.image = event.target.files[0];
  console.log(categorie.value.image);
};

const submit = () => {
  //Tu verifie si les champs sont emplies
  if (categorie.value.nom == "" || categorie.value.image == null) {
    alert("Tous les champs sont obligatoires");
    return 0;
  }
  const toSend = new FormData();
  toSend.append("categorie", JSON.stringify({ nom: categorie.value.nom }));
  toSend.append("image", categorie.value.image);
  if (id.value) {
    try {
      const result = request(
        "categorie/" + id,
        "PUT",
        { Authorization: localStorage.getItem("token") },
        toSend,
        false
      );
      result.then((data) => {
        alert("La catégorie a été mise à jour avec succès !");
      });
    } catch (error) {
      console.log(error);
    }
    id.value = null;
  } else {
    try {
      const result = request(
        "categorie",
        "POST",
        { Authorization: localStorage.getItem("token") },
        toSend,
        false
      );
      result.then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style></style>
