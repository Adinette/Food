<template>
  <div class="flex justify-around items-center p-4 mt-12 font-bold">
    <div class="w-1/3 flex flex-col space-y-2">
      <h4 class="text-green-400 text-xl">About us</h4>
      <h2 class="text-4xl">Why choose us</h2>
      <img src="/assets/image/image1.jpg" alt="" />
      <span class="scale-75 translate-x-4 skew-y-3 md:transform-none">
        <button
          @click="show = !show"
          class="bg-gray-700 p-4 hover:bg-gray-900 shadow shadow-green-700 text-white duration-300"
        >
          Learn more
        </button>
      </span>
      <p v-if="show">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nesciunt
        harum, consequatur impedit corrupti non aut ducimus, praesentium beatae
        ipsum vero! Voluptatum sed suscipit mollitia reprehenderit repudiandae
        consequatur, dolores eius.
      </p>
    </div>
    <div class="w-1/3">
      <h3>Best food in the word</h3>
      <p class="font-normal text-justify pb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        mollitia repellendus id quia, quasi amet eum et dolor rem natus sequi
        nisi ullam animi consequatur corporis distinctio cupiditate, dignissimos
        ipsa. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
        at totam impedit eius sed omnis a atque similique explicabo esse. Libero
        amet doloremque harum possimus, veritatis eius facilis? Cupiditate, qui.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const show = ref(false);
</script>
