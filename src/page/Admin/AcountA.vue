<template>
    <div class="max-w-screen-xl mx-auto flex flex-col items-center space-y-4 p-6">
        
            <h3 class="font-bold text-xl text-green-700">Your Acount</h3>
      <form action="" id="form" class="bg-gray-100 shadow w-2/3 p-4 space-y-4">
                <div class="space-y-2">
                    <label for="email" class="font-medium text-gray-700">Email :</label>
                    <input type="email" name="email" id="email" class="rounded w-full p-2">
                </div>
                <div class="space-y-2">
                    <label for="" class="font-medium text-gray-700">Mot de passe :</label>
                    <input type="password" name="password" id="password"  class="rounded w-full p-2">
                </div>
                <h2 class="">Mot de passe oublié ?</h2>
                <div class="space-y-4">
                    <button type="submit" class="p-2 py-1 m-1 bg-green-700 text-white text-xl font-medium rounded w-full">Se connecter</button>
                    <router-link to="createA"><button  class="p-2 py-1 m-1 bg-green-700 text-white text-xl font-medium rounded w-full">S'Inscrire</button></router-link>
                </div>
               
              </form>
    </div>       
    </template>
    
    <script setup>
  

import {request} from "/src/request";
document.addEventListener("DOMContentLoaded", function() {

let form = document.getElementById("form");
form.addEventListener('submit', (event) => {
  event.preventDefault();  
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    if(email.value==""|| password.value==""){
        alert("Tous les champs sont obligatoires");
    }else {
        
        try{
            const result = request('auth/login', 'POST', { "Content-Type": "application/json" }, {
                email: email.value,
                password: password.value
            });
            
            result.then(data => {
               
              try {
                  
                  localStorage.setItem("token", data.token);
                  localStorage.setItem("role", data.role);
                  localStorage.getItem("token");
                  localStorage.getItem("role");
                  } catch (error) {
                    console.log(error);
            }
            })
        
        }catch(error){

            console.log(error)

        }

    }
})
});
</script>

