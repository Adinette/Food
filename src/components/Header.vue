<script setup>
// import { onMounted} from "vue";
// const close =document.querySelector("close")
// const open =document.querySelector("open")
// const menu =document.querySelector("menu")
// document.addEventListener("DOMContentLoaded", function() {
//   close.addEventListener("click" ,() =>{
//   menu.style.visibility="hidden";
// })
// open.addEventListener("click" ,() =>{
//   menu.style.visibility="visible";
// })
// });


</script>

<template>
  <header class="head">
    <div class="part">
      <span class=" font-bold"
        >F<span class="text-green-700 font-bold">oo<span class=" text-black font-bold">D</span></span></span
      ></div>
    <div class="text-gray-700 text-md ">
      <!-- <a href="">
        <icon-icon name="close"></icon-icon>
      </a> -->
      <ul class="menu flex justify-between space-x-6">
        <li
          class="px-1 border-b-2 border-transparent hover:border-green-400 duration-300"
        >
          <router-link to="/home">Acceuil</router-link>
        </li>
        <li
          class="px-1 border-b-2 border-transparent hover:border-green-400 duration-300"
        >
          <router-link to="/about">A Propos</router-link>
        </li>
        <li
          class="px-1 border-b-2 border-transparent hover:border-green-400 duration-300"
        >
          <router-link :to="{ name: 'create' }">S'Inscrire</router-link>
        </li>
        <li
          class="px-1 border-b-2 border-transparent hover:border-green-400 duration-300"
        >
          <router-link :to="{ name: 'compte' }">Connexion</router-link>
        </li>
        <li
          class="px-1 border-b-2 border-transparent hover:border-green-400 duration-300"
        >
          <router-link :to="{ name: 'basket' }">Panier</router-link>
        </li>
        
        <li 
        class="px-1 border-b-2  bg-green-700 text-white text-xl font-medium rounded">Deconnexion
      </li>
      </ul>
    </div>
  </header>
</template>

<style>
::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}

::-webkit-scrollbar-track {
  background: #ffffff;
}

::-webkit-scrollbar-thumb {
  background: #4ade94;
}

::-webkit-scrollbar-thumb:hover {
  background: #15803d;
}
.your {
  text-decoration-color: #15803d;
  /*text-gray-700*/
}
.part {
  font-size: 1.5rem;
  line-height: 2rem;
  /* text-2xl  */
}
.head {
  width: 100%;
  height: 4rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0/ 0.1);
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  padding-left: 6rem;
  padding-right: 6rem;

  /* w-full h-16 shadow-md flex items-center justify-between font-bold p-4 px-24 */
}
</style>

