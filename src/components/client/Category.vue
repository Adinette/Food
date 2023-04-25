<script setup>
defineProps({
  categorie: {},
});
</script>

<template>
    <div class="shadow-md col-span-1 p-10 bg-white w-full max-w-xl">
      <img
        :src="categorie.image"
        alt=""
        class="hover:scale-125  duration-300 w-32"
      />
      <div class="flex flex-col items-end  space-y-2 text-center">
        <span class="font-bold text-slate-700">{{ categorie.nom }}</span>
        <router-link :to= "categorie.lien"><button
            class="p-2  py-1 bg-green-700 row-span-2 hover:bg-slate-500 text-white text-xl font-medium rounded w-32">
            {{ categorie.nom }}</button></router-link>
      </div>
    </div>
  
</template>
