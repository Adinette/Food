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
    <nav class="h-16 shadow-md font-bold mt-4">
      <div id="navbar"
        class="xl:max-w-screen-xl md:max-w-5xl sm:max-w-lg mx-auto flex flex-wrap items-center justify-between">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <span class="self-center xl:text-xl md:text-md font-semibold whitespace-nowrap dark">
            F<span class="text-green-700 font-bold">oo<span class=" text-black font-bold">D</span>
            </span></span>
        </a>
        <div class="flex items-center md:order-2 space-x-3 rtl:space-x-reverse">
          <a href="#contact" type="button"
            class=" bg-green-600 text-white hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-semibold rounded-full xl:text-xl md:text-md px-8 py-3 text-center dark:bg-fuschia-900 dark:hover:bg-fuschia-900 dark:focus:ring-fuschia-900">
            Connexion
          </a>
          <a href="#contact" type="button"
            class="bg-white text-green-600 border-2 border-green-600 hover:bg-white focus:ring-4 focus:outline-none focus:ring-white font-semibold rounded-full xl:text-xl md:text-md px-8 py-3 text-center dark:bg-fuschia-900 dark:hover:bg-fuschia-900 dark:focus:ring-fuschia-900">
            Deconnexion
          </a>
          <button data-collapse-toggle="navbar-sticky" type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <ul class="flex flex-row justify-center mt-4 md:mt-0 font-medium md:space-x-8 rtl:space-x-reverse">
          
          <li>
            <router-link to="/home"
              class="block xl:text-xl md:text-md py-2 pl-3 pr-4 hover:border-b-4 hover:border-green-600">Acceuil</router-link>
          </li>
          <li>
            <a href="#about"
              class="block xl:text-xl md:text-md py-2 pl-3 pr-4 hover:border-b-4 hover:border-green-600">A
              Propos</a>
          </li>
        </ul>
      </div>
    </nav>
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

}
</style>
