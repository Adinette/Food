<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <nav class="h-16 shadow-md font-bold pt-4 bg-slate-800 text-white">
    <div id="navbar"
      class="xl:max-w-screen-xl md:max-w-5xl max-w-sm mx-auto flex flex-wrap items-center justify-between">
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center xl:text-xl md:text-md font-semibold whitespace-nowrap">
          F<span class="text-green-700 font-bold">oo<span class="text-white font-bold">D</span>
          </span></span>
      </a>
      <div class="flex items-center md:order-2 space-x-3 rtl:space-x-reverse">
        <a href="#contact" type="button"
          class="bg-green-600 text-white hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-semibold rounded-full xl:text-xl md:text-md px-8 py-3 text-center">
          Signin
        </a>
        <button @click="toggleMenu" type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
      <div :class="isMenuOpen ? 'flex' : 'hidden'"
        class="bg-slate-800  items-center justify-between w-full md:flex md:w-auto md:order-1">
        <ul class="flex flex-row md:flex-row justify-center mt-4 md:mt-0 font-medium md:space-x-8 rtl:space-x-reverse">
          <li>
            <router-link to="/home"
              class="block xl:text-xl md:text-md py-2 pl-3 pr-4 hover:border-b-4 hover:border-green-600">Acceuil</router-link>
          </li>
          <li>
            <a href="#food" class="block xl:text-xl md:text-md py-2 pl-3 pr-4 hover:border-b-4 hover:border-green-600">
              Food</a>
          </li>
          <li>
            <a href="#service"
              class="block xl:text-xl md:text-md py-2 pl-3 pr-4 hover:border-b-4 hover:border-green-600">A
              Services</a>
          </li>
          <li>
            <a href="#about" class="block xl:text-xl md:text-md py-2 pl-3 pr-4 hover:border-b-4 hover:border-green-600">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact"
              class="block xl:text-xl md:text-md py-2 pl-3 pr-4 hover:border-b-4 hover:border-green-600">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
</style>
