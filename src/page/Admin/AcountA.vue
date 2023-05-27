<template>
  <div class="max-w-screen-xl mx-auto flex flex-col items-center space-y-4 p-6">
    <h3 class="font-bold text-xl text-green-700">Votre Compte</h3>
    <form action="" id="form" class="bg-gray-100 shadow w-2/3 p-4 space-y-4">
      <div class="space-y-2">
        <label for="email" class="font-medium text-gray-700">Email :</label>
        <input
          type="email"
          name="email"
          id="email"
          class="rounded w-full p-2"
        />
      </div>
      <div class="space-y-2">
        <label for="" class="font-medium text-gray-700">Mot de passe :</label>
        <input
          type="password"
          name="password"
          id="password"
          class="rounded w-full p-2"
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
import { request } from "/src/request";
import router from "/src/router/router";

document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("form");
  form.addEventListener("submit", async (event) => {
    console.log(event);
    event.preventDefault();
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if (email.value == "" || password.value == "") {
      alert("Tous les champs sont obligatoires");
    } else {
      try {
        const result = await request(
          "auth/login",
          "POST",
          { "Content-Type": "application/json" },
          {
            email: email.value,
            password: password.value,
          }
        );

        // console.log(result.token, result.role);

        localStorage.setItem("token", result.token);
        localStorage.setItem("role", result.role);
        localStorage.setItem("userId", result.userId);

        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role");
        const userId = localStorage.getItem("userId");

          console.log('token', token);
          console.log(role);

        if (role == "admin") {
          router.push({ name: "orderA" });
        } else {
          router.push({ name: "order" });
        }
      } catch (error) {
        console.log(error);
      }
    }
  });
});
</script>
