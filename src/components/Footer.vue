<template>
  <div class="w-full h-full bg-green-700 p-4">
    <div>
      <h2 class="text-center text-white font-bold">
        Envoyer vos commande en ligne
      </h2>
      <h3 class="text-center text-white">
        Nous sommes a votre disposition pour tout vos achats ,il suffit juste
        d'envoyer la commande
      </h3>
    </div>
    <div class="mx-auto max-w-screen-xl justify-between">
      <ul class="">
        <li
          class="text-center text-white font-bold p-2 px-1 border-b-2 border-transparent border-green-400"
        >
          <button @click="shown = !shown">Nous</button>
        </li>

        <p v-if="shown" class="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          nesciunt harum, consequatur impedit corrupti non aut ducimus,
          praesentium beatae ipsum vero! Voluptatum sed suscipit mollitia
          reprehenderit repudiandae consequatur, dolores eius.
        </p>
        <li
          class="text-center text-white font-bold p-2 px-1 border-b-2 border-transparent border-green-400"
        >
          <button @click="show = !show">Nous contacter</button>
        </li>
        <div v-if="show">
          <ul class="flex justify-between space-x-2">
            <li class="flex space-x-8">
              <span class="flex flex-col">
                <img src="/assets/image/icone6.png" class="w-8" alt="" />
              </span>
              <span class="font-medium text-white">Contact</span>
            </li>
            <li class="flex space-x-8">
              <span class="flex flex-col">
                <img src="/assets/image/icone5.png" class="w-10" alt="" />
              </span>
              <span class="font-medium text- text-white">Email</span>
            </li>
          </ul>
        </div>

        <li
          class="text-center text-white font-bold p-2 px-1 border-b-2 border-transparent border-green-400"
        >
          <button @click="view = !view">Nous retrouver</button>
        </li>
        <div v-if="view">
          <div class="flex space-x-8">
            <span class="flex flex-col">
              <img src="/assets/image/icone4.png" class="w-8" alt="" />
            </span>
            <span class="font-medium text-white">Localisation</span>
          </div>
        </div>
        <li
          class="text-center text-white font-bold p-2 px-1 border-b-2 border-transparent border-green-400"
        >
          <button @click="open = !open">Nos heures d'Ouverture</button>
        </li>
        <div v-if="open">
          <div class="flex space-x-8">
            <span class="flex flex-col">
              <img src="/assets/image/icone7.png" class="w-8" alt="" />
            </span>
            <span class="font-medium text-white">Ouverture</span>
            <span class="text-white">17h a 19h</span>
          </div>
        </div>
      </ul>
    </div>
    <div class="p-2 px-1 border-b-2 border-transparent border-green-400"></div>
    <div class="">
      <ul class="menu flex justify-between space-x-6">
        <li class="text-center text-white font-bold">
          Condition Génerales de Mise a Disposition
        </li>
        <li class="text-center text-white font-bold">Mentions Legales</li>
        <li class="text-center text-white font-bold">
          Politiques de Confidentialités
        </li>
        <li class="text-center text-white font-bold">Gestion des Cookies</li>
      </ul>
    </div>
    <div class="items-center text-white text-center">
      Make by <span class="text-green">Adi</span> | Tous les droits
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const shown = ref(false);
const show = ref(false);
const view = ref(false);
const open = ref(false);
</script>

<style></style>
