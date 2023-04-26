<template>
    <div class="max-w-screen-xl mx-auto flex flex-col items-center space-y-4 p-6">
       <h2 class="uppercase text-black text-2xl font-bold">Formulaire d'ajout des plats</h2>
 <form id="formPLat" class="bg-gray-100 shadow w-2/3 p-4 space-y-4">
           <div class="space-y-2">
               <label for="name" class="font-medium text-gray-700">Nom</label>
               <input type="text" name="name" id="name"  class="rounded w-full p-2">
           </div>
           <div class="space-y-2">
               <label for="image" class="font-medium text-gray-700">Image</label>
               <input type="file" name="image" id="image"  class="rounded  bg-white w-full p-2">
           </div>
           <div class="space-y-2">
               <label for="prix" class="font-medium text-gray-700">Prix</label>
               <input type="number" name="prix" id="prix"  class="rounded w-full p-2">
           </div>
           <div class="space-y-2">
               <label for="description" class="font-medium text-gray-700">Description</label>
               <textarea type="text" name="description" id="description"  class="rounded w-full p-2"></textarea>
           </div>
          <button  type="submit" class="p-2 py-1 bg-green-700 text-white text-xl font-medium rounded w-full">
             Ajouter  </button>
       </form>
   </div>
</template>

<script>
import { request } from "/src/request";

 document.addEventListener("DOMContentLoaded", function() {
let forms = document.getElementById("formPLat");
forms.addEventListener ("submit", (event) => {
  event.preventDefault();
  let nom = document.getElementById("nom");
  let image = document.getElementById("image");
  let prix = document.getElementById("prix");
  let description = document.getElementById("description");

  if (nom.value == " " || image.value == " "|| prix.value == " "|| description.value == " ") {
    alert("Tous les champs sont obligatoires");
  } else {
    try {
      const toSend = new FormData();
      toSend.append("categorie", JSON.stringify({ nom: nom.value }));
      toSend.append("image", image.files[0]);
      toSend.append("categorie", JSON.stringify({ prix: nom.value }));
      toSend.append("categorie", JSON.stringify({ description: nom.value }));
      console.log(typeof toSend);

      const result = request(
        "plat",
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

<style>

</style>