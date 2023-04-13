<template>
<div class="max-w-screen-xl mx-auto flex flex-col items-center space-y-4 p-6">
        <h3 class="font-bold text-xl text-green-700">Your Acount</h3>
  <form action="" class="bg-gray-100 shadow w-2/3 p-4 space-y-4">
            <div class="space-y-2">
                <label for="name" class="font-medium text-gray-700">Your Name</label>
                <input type="text" name="name" id="name" @click="compte.name" class="rounded w-full p-2">
            </div>
            <div class="space-y-2">
                <label for="email" class="font-medium text-gray-700">Your Email</label>
                <input type="email" name="email" id="email" v-model="compte.email" class="rounded w-full p-2">
            </div>
            <div class="space-y-2">
                <label for="" class="font-medium text-gray-700">Your Password</label>
                <input type="password" name="password" id="password" v-model="compte.password" class="rounded w-full p-2">
            </div>
            <button @click="submitForm" class="p-2 py-1 bg-green-700 text-white text-xl font-medium rounded w-full">Sign up</button>
        </form>
</div>       
</template>

<script setup>
import { ref } from "vue";
import { useCompteStore } from "../store/compte";

const compteStore = useCompteStore()

const compte = ref({
  name: '',
  email: '',
  password: '',
  
});

const submitForm = () => {
    compteStore.setCompte(compte.value)
  console.log("compte is :", compte.value);
};



</script>

<style>

</style>