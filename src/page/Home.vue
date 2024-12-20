<template>
  <div class="item-center mb-8 bg-slate-800 text-white">
    <div class="relative isolate p-10">
      <div class="max-w-6xl mx-auto py-10 md:py-48 lg:py-12">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="text-5xl md:text-5xl font-bold">
            Are you
            <h1 class="text-balance text-7xl md:text-8xl tracking-tight text-green-600">
              hungry?</h1>
            <p class="mt-8 text-pretty text-xl md:text-2xl font-normal text-white">
              You can order here very easy and simple</p>
            <div class="mt-10 flex items-center gap-x-6">
              <a href=""
                class="rounded-full bg-green-600 px-4 md:px-8 py-3 text-sm xl:text-xl md:text-md font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                Order now</a>
              <a href="#about"
                class="bg-white text-green-600 hover:bg-white focus:ring-4 focus:outline-none focus:ring-white font-semibold rounded-full text-sm xl:text-xl md:text-md px-4 md:px-8 py-3 text-center">
                More</a>
            </div>
          </div>
          <div class="hidden md:flex">
            <img src="/assets/image/deliver.jpg" alt="deliver" class="rounded-full">
          </div>
        </div>
      </div>
    </div>
  </div>
<div id="food">
  <Food />
  <Menu />
  <div class="mt-8">
    <div class="max-w-screen-md mx-auto">
      <div class="text-center">
        <h2 class="font-bold text-5xl">Our <span class="text-green-600"> Menu</span></h2>
        <span class="text-2xl mt-4 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, aperiam
          pariatur
          aspernatur sapiente, natus ducimus modi nam accusamus tempora recusandae voluptates excepturi.</span>
      </div>
    </div>
    <div class="max-w-sm md:max-w-screen-md lg:max-w-5xl mx-auto mt-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card v-for="(card, index) in cards" :key="index" :image="card.image" :altText="card.altText"
          :title="card.title" :description="card.description" :buttonLink="card.buttonLink" :price="card.price" />
      </div>
    </div>
    <div class="flex justify-center items-center mt-8">
      <a href=""
        class="rounded-full bg-green-600 px-8 py-3 xl:text-xl md:text-md font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
        Order now</a>
    </div>
  </div>
</div>
  <Services />
  <AboutUs />
  <Testimonials />
  <Contact />
</template>

<script setup>
import AboutUs from '../components/About/AboutUs.vue';
import Card from '../components/Card.vue'
import Contact from '../components/Contact/Contact.vue';
import Food from '../components/Food/Food.vue';
import Menu from '../components/Menu.vue';
import Services from '../components/Services/Services.vue';
import Testimonials from '../components/Testimonials/Testimonials.vue';

const cards = [
{
    image: "/assets/image/image64.png",
    altText: "poulet",
    title: "Poulet",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, aperiam pariatur aspernatur sapiente, natus ducimus modi nam accusamus tempora recusandae voluptates excepturi.",
    buttonLink:"#",
    price :"12$",
  },
  {
    image: "/assets/image/image68.jpg",
    altText: "riz",
    title: "Riz",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, aperiam pariatur aspernatur sapiente, natus ducimus modi nam accusamus tempora recusandae voluptates excepturi.",
    buttonLink:"#",
    price :"12$",
  },
  {
    image: "/assets/image/image25.jpg",
    altText: "pizza",
    title: "Pizza",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, aperiam pariatur aspernatur sapiente, natus ducimus modi nam accusamus tempora recusandae voluptates excepturi.",
    buttonLink:"#",
    price :"12$",
  },
  {
    image: "/assets/image/image37.jpg",
    altText: "salad",
    title: "Salade",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, aperiam pariatur aspernatur sapiente, natus ducimus modi nam accusamus tempora recusandae voluptates excepturi.",
    buttonLink:"#",
    price :"12$",
  },
  {
    image: "/assets/image/image48.jpg",
    altText: "chawarma",
    title: "Chawarma",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, aperiam pariatur aspernatur sapiente, natus ducimus modi nam accusamus tempora recusandae voluptates excepturi.",
    buttonLink:"#",
    price :"12$",
  },
  {
    image: "/assets/image/image53.png",
    altText: "pattes",
    title: "Pattes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, aperiam pariatur aspernatur sapiente, natus ducimus modi nam accusamus tempora recusandae voluptates excepturi.",
    buttonLink:"#",
    price :"12$",
  },
  {
    image: "/assets/image/image12.jpg",
    altText: "yaourt",
    title: "Yaourt",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, aperiam pariatur aspernatur sapiente, natus ducimus modi nam accusamus tempora recusandae voluptates excepturi.",
    buttonLink:"#",
    price :"12$",
  },
  {
    image: "/assets/image/image29.jpg",
    altText: "soda",
    title: "Soda",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, aperiam pariatur aspernatur sapiente, natus ducimus modi nam accusamus tempora recusandae voluptates excepturi.",
    buttonLink:"#",
    price :"12$",
  },]
</script>
<style></style>
