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
import { useRoute } from "vue-router";
import { request } from "/src/request";

const categorie = ref({
  nom: "",
  image: null,
});

const route = useRoute();
const id = ref(null);
// Je t'avais deja dit de ne pas utiliser les elements du JS mais on dirait que tu as manger la pate avec.
// let edit;
id.value = route.params.id;

//Ce code s'execute des que le composant est monte.
onMounted(() => {
  //si l'id existe, tu executes la requete de verification. Normalement tu dois mettre les valeurs drecuperer dans e formulaire mais je ne sais pas ce que ca contient donc
  //c'est a toi de faire un log et de mettre les bonnes infos ou il faut3
  if (id.value) {
    try {
      const result = request(
        "categorie",
        "GET",
        { Authorization: localStorage.getItem("token") },
        null,
        false
      );
      result.then((data) => {
        // en suposant que la donne renvoyer contient le nom directement00
        //categorie.value.nom = data.nom
        console.log(data);
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
  }

  const toSend = new FormData();
  toSend.append("categorie", JSON.stringify({ nom: categorie.value.nom }));
  toSend.append("image", categorie.value.image);

  //Si l'id est definie, tu execute cette requete
  if (id.value) {
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
  } else {
    try {
      const result = request(
        "categorie",
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
  }
};
</script>

<style></style>
