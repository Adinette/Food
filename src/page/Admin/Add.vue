<template>
  <div class="max-w-screen-xl mx-auto flex flex-col items-center space-y-4 p-6">
    <h2 class="uppercase text-black text-2xl font-bold">
      Formulaire d'ajout des categories
    </h2>
    <form id="formCat" action="" class="bg-gray-100 shadow w-2/3 p-4 space-y-4">
      <div class="space-y-2">
        <label for="nom" class="font-medium text-gray-700">Nom</label>
      </div>
      <input type="text" name="nom" id="nom" class="rounded w-full p-2" />

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
import { request } from "/src/request";

/**
 * Tu as mis un ecouteur d'evenements sur l'element qui a l'ID formCat,
 * des qu ca detecte un submit, tu recupere l'evenement et tu empeche la soumission du formulaire en rechargeant la page
 * ensuite tu recuperes uhmfjfueomlaadjiumsdcsmcsdcmimkaSX bref,
 * tu as oublie de mettre setup apres script. C'est principalement pour ca que ca ne fonctionnait pas.
 * tu aurais pu faire ca plus simplement comme on a fait dans les autres formulaire.
 * Dans Reservation.vue par example
 * Dans le form de ce dernier, tu verras @submit.prevent qui fait la meme chose que event.preventDefault(); que tu as utiliser plus bas.
 * Cherche comment ca fontionne.
 * pour recuprer les elements d'un formulaire en vuejs, on utilise le v-model, prens toujours Reservation.vue comme reference
 * ensuite tu peux faire la verification comme tu la fais dans le if et creer une fonction qui va s'appeler quand on clique sur submit
 * la fonction doit conenier tout ton bloc if else
 * J'ai explique du mieux que je peux hein, I hope you understand.
 * Gooooood Luck !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */

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
</script>

<style></style>
