<template>
  <div class="flex justify-around items-center p-4 mt-12 font-bold">
    <div class="w-1/3 flex flex-col space-y-2">
      <h4 class="text-green-700 font-bold text-2xl">Our New Menu</h4>
      <h2 class="text-2xl font-bold">AFRICAN CHICKEN</h2>
      <p class="font-normal text-justify pb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt at,
        repellendus incidunt quia qui neque delectus nemo veritatis est!
        Perspiciatis nesciunt expedita illo iste eveniet odit laboriosam cumque,
        tempora sunt?
      </p>
      <span class="scale-75 translate-x-4 skew-y-3 md:transform-none">
        <router-link
          to="order"
          class="bg-black p-4 text-xl hover:bg-slate-500 shadow shadow-green-700 text-white duration-300"
          >Commander maintenant</router-link
        >
      </span>
    </div>
    <div class="w-1/3">
      <img src="/assets/image/image23.png" alt="" class="rounded-xl" />
    </div>
  </div>
  
</template>

<script setup>


</script>