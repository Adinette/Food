<template>
  <div class="max-w-screen-xl mx-auto flex flex-col items-center space-y-4 p-6">
    <h2 class="uppercase text-black text-2xl font-bold">
      Formulaire d'ajout des plats
    </h2>
    <form
      @submit.prevent
      id="formPLat"
      class="bg-gray-100 shadow w-2/3 p-4 space-y-4"
    >
      <div class="space-y-2">
        <label for="name" class="font-medium text-gray-700">Nom</label>
        <input
          type="text"
          name="name"
          id="name"
          v-model="meals.nom"
          class="rounded w-full p-2"
        />
      </div>
      <div class="space-y-2">
        <label for="categorie" class="font-medium text-gray-700"
          >Categorie</label
        >
        <select
          name="categorie"
          id="categorie"
          v-model="meals.categorie_id"
          class="rounded w-full p-2"
        >
          <option
            v-for="categorie in categories"
            :key="categorie._id"
            :value="categorie._id"
          >
            {{ categorie.nom }}
          </option>
        </select>
      </div>
      <div class="space-y-2">
        <label for="prix" class="font-medium text-gray-700">Prix</label>
        <input
          type="number"
          name="prix"
          id="prix"
          v-model="meals.prix"
          class="rounded w-full p-2"
        />
      </div>
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
      <div class="space-y-2">
        <label for="description" class="font-medium text-gray-700"
          >Description</label
        >
        <textarea
          type="text"
          name="description"
          id="description"
          v-model="meals.description"
          class="rounded w-full p-2"
        ></textarea>
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

const meals = ref({
  nom: "",
  prix: 0,
  image: null,
  categorie_id: null,
  description: "",
});
const router = useRoute();
const id = ref(router.params.id);
const categories = ref(null);

onMounted(() => {
  getCategories();
  if (id.value) {
    try {
      const getPlat = request(
        "plat/one/" + id.value,
        "GET",
        { Authorization: localStorage.getItem("token") },
        null,
        false
      );
      getPlat.then((data) => {
        console.log(data);
        meals.value.nom = data.nom;
        meals.value.image = data.image;
        meals.value.prix = data.prix;
        meals.value.description = data.description;
        meals.value.categorie_id = data.categorie_id;
        // meals.value._id = data._id;
      });
    } catch (error) {
      console.log(error);
    }
  }
});

const onFileSelected = (event) => {
  meals.value.image = event.target.files[0];
  console.log(meals.value.image);
};

const submit = () => {
  console.log("ouiy,ntbrvf", meals.value);
  if (
    meals.value.nom == "" ||
    meals.value.image == null ||
    meals.value.categorie_id == null ||
    meals.value.prix == 0 ||
    meals.value.description == null
  ) {
    alert("Tous les champs sont obligatoires");
    return 0;
  }

  const toSend = new FormData();
  toSend.append("image", meals.value.image);
  delete meals.value.image;
  toSend.append("plat", JSON.stringify(meals.value));

  //Si l'id est definie, tu execute cette requete

  if (id.value) {
    try {
      const result = request(
        "plat/" + id,
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
        "plat",
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

const getCategories = () => {
  try {
    const result = request(
      "categorie",
      "GET",
      { Authorization: localStorage.getItem("token") },
      null,
      false
    );
    result.then((data) => {
      categories.value = data;
    });
  } catch (error) {
    console.log(error);
  }
};
</script>

<style></style>
