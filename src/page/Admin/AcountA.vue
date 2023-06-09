<template>
  <div class="max-w-screen-xl mx-auto flex flex-col items-center space-y-4 p-6">
    <h3 class="font-bold text-xl text-green-700">Votre Compte</h3>
    <form @submit="submitForm" id="form" class="bg-gray-100 shadow w-2/3 p-4 space-y-4">
      <div class="space-y-2">
        <label for="email" class="font-medium text-gray-700">Email :</label>
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="rounded w-full p-2"
          required
        />
      </div>
      <div class="space-y-2">
        <label for="" class="font-medium text-gray-700">Mot de passe :</label>
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="rounded w-full p-2"
          required
        />
      </div>
      <h2 class="">Mot de passe oublié ?</h2>
      <div class="space-y-4">
        <button
          type="submit"
          class="p-2 py-1 m-1 bg-green-700 text-white text-xl font-medium rounded w-full"
        >
          Se connecter
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { login } from "../../service/login.service";
import router from '/src/router/router';

const email = ref('');
const password = ref('');

const submitForm = async (event) => {
  event.preventDefault();

  if (email.value === '' || password.value === '') {
    alert('Tous les champs sont obligatoires');
  } else {
    try {
      const auth = await login({
        email: email.value,
        password: password.value
      });

      console.log(auth);

      localStorage.setItem('token', auth.token);
      localStorage.setItem('role', auth.role);
      localStorage.setItem('userId', auth.userId);

      const role = localStorage.getItem('role');

      if (role === 'admin') {
        router.push({ name: 'orderA' });
      } else {
        router.push({ name: 'order' });
      }
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
