<script setup>

</script>

<template>
  
  <header class="head">
        <div class="part">
            <span class="your">Your<span class="text-green-400">Dish</span></span>
        </div>
        <div class="text-gray-700 text-md">
            <ul class="menu flex justify-between space-x-6">
                <li class=" px-1 border-b-2 border-transparent hover:border-green-400 duration-300">
                    <router-link to="acceuil">Acceuil</router-link> </li>
                <li class=" px-1 border-b-2 border-transparent hover:border-green-400 duration-300">
                    <router-link to="commande">Commande</router-link></li>
                <li class=" px-1 border-b-2 border-transparent hover:border-green-400 duration-300"> 
                    <router-link to="propos">A Propos</router-link></li>
                <li class=" px-1 border-b-2 border-transparent hover:border-green-400 duration-300">
                    <router-link to="reservation">Reservation</router-link></li>
                <li class=" px-1 border-b-2 border-transparent hover:border-green-400 duration-300">
                    <router-link to="count">Acount</router-link></li>
            </ul>
        </div>
    </header>
</template>

<style >
 ::-webkit-scrollbar {
        width: 12px;
        height: 12px;
    }

    ::-webkit-scrollbar-track {
        background: #FFFFFF;
    }

    ::-webkit-scrollbar-thumb {
        background: #4ADE94;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #15803D;
    }
    .your{
        text-decoration-color: #15803D;
        /*text-gray-700*/
    }
    .part{
        font-size: 1.5rem;
        line-height: 2rem;
        /* text-2xl  */
    }
.head{
    width: 100%;
    height: 4rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0/ 0.1);
    align-items: center;
    justify-content: space-between;
    font-weight: 700;
    padding-left: 6rem;
    padding-right: 6rem;

    /* w-full h-16 shadow-md flex items-center justify-between font-bold p-4 px-24 */
}
</style>
