<template>
    <div class="max-w-screen-xl mx-auto flex flex-col items-center space-y-4 p-6">
        
        <form action="" id="form" class="bg-gray-100 shadow w-2/3 p-4 space-y-4">
            <div class="space-y-2">
                <label for="email" class="font-medium text-gray-700">Email :</label>
                <input type="email" name="email" id="email"  class="rounded w-full p-2">
            </div>
            <div class="space-y-2">
                <label for="" class="font-medium text-gray-700">Mot de passe :</label>
                <input type="password" name="password" id="password"  class="rounded w-full p-2">
            </div>
            <div class="space-y-2">
                <label for="" class="font-medium text-gray-700">Confirmer mot de passe :</label>
                <input type="password" name="password" id="confirmPassword"  class="rounded w-full p-2">
            </div>
           <button type="submit" class="p-2 py-1 m-2 bg-green-700 text-white text-xl font-medium rounded w-full">Creer un compte</button>
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
    let confirmPassword = document.getElementById("confirmPassword");
    if(email.value==""|| password.value=="" || confirmPassword.value==""){
        alert("Tous les champs sont obligatoires");
    } else if(password.value != confirmPassword.value) {
        alert("Les mots de passe ne pas conformes");
    } else {
        
        try{
            const result = request('auth/signup', 'POST', { "Content-Type": "application/json" }, {
                email: email.value,
                password: password.value,
                role: "admin"
            });
            result.then(data => console.log(data))
            console.log("utilisateur crée")
            location.assign("/acountA");
        }catch(error){

            console.log(error)

        }

    }
})
});
</script>

<style>

</style>