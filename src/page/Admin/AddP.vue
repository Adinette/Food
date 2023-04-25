<template>
    <div class="max-w-screen-xl mx-auto flex flex-col items-center space-y-4 p-6">
       <h2 class="uppercase text-black text-2xl font-bold">Formulaire d'ajout des plats</h2>
 <form @submit.prevent action="" class="bg-gray-100 shadow w-2/3 p-4 space-y-4">
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
          <button @click="submitForm" class="p-2 py-1 bg-green-700 text-white text-xl font-medium rounded w-full">
             Ajouter  </button>
       </form>
   </div>
</template>

<script>
var gretting="Bonjour";
console.log(gretting)
</script>

<style>

</style>