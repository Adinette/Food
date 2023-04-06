<template>
   <div class="max-w-screen-xl mx-auto flex flex-col items-center space-y-4 p-6">
        <h3 class="font-bold text-xl text-green-700">Ours Menu</h3>
        <h2 class="uppercase text-slate-700 text-2xl font-bold">Popular Menu</h2>
        <div class="grid grid-cols-3 gap-4">
            <div class="shadow-md col-span-1 p-6 bg-white w-full max-w-xl ">
                <img src="assets/image/pngegg.png" alt="" class="hover:scale-125 duration-300 w-64">
                <div class="flex flex-col items-center space-y-1 text-center">
                    <span class="font-bold text-slate-700">Salad</span>
                    
                    <router-link to="salad"><button class="p-2 py-1 bg-green-700 text-white text-xl font-medium rounded w-32">Choose your Salad</button></router-link>
                </div>
            </div>
            <div class="shadow-md col-span-1 p-6 bg-white w-full max-w-xl ">
                <img src="assets/image/image3.jpg" alt="" class="hover:scale-125 duration-300 w-64">
                <div class="flex flex-col items-center space-y-1 text-center">
                    <span class="font-bold text-slate-700">Poulet</span>
                   
                    <router-link to="poulet"><button class="p-2 py-1 bg-green-700 text-white text-xl font-medium rounded w-32">Choose your poulet</button> </router-link>
                </div>
            </div>
            <div class="shadow-md col-span-1 p-6 bg-white w-full max-w-xl ">
                <img src="assets/image/image5.jpg" alt="" class="hover:scale-125 duration-300 w-64">
                <div class="flex flex-col items-center space-y-1 text-center">
                    <span class="font-bold text-slate-700">Charwama</span>
                    
                    <router-link to="chawarma"> <button class="p-2 py-1 bg-green-700 text-white text-xl font-medium rounded w-32">Choose your chawarma</button></router-link>
                </div>
            </div>
            <div class="shadow-md col-span-1 p-6 bg-white w-full max-w-xl ">
                <img src="assets/image/image14.jpg" alt="" class="hover:scale-125 duration-300 w-64">
                <div class="flex flex-col items-center space-y-1 text-center">
                    <span class="font-bold text-slate-700">Pizza</span>
                   
                    <router-link to="pizza"><button class="p-2 py-1 bg-green-700 text-white text-xl font-medium rounded w-32">Choose your pizza</button></router-link>
                </div>
            </div>
            <div class="shadow-md col-span-1 p-6 bg-white w-full max-w-xl ">
                <img src="assets/image/image13.png" alt="" class="hover:scale-125 duration-300 w-64">
                <div class="flex flex-col items-center space-y-1 text-center">
                    <span class="font-bold text-slate-700">Croissant</span>
                    
                    <router-link to="croissant"><button class="p-2 py-1 bg-green-700 text-white text-xl font-medium rounded w-32">Choose croissant</button></router-link>
                </div>
            </div>
            <div class="shadow-md col-span-1 p-6 bg-white w-full max-w-xl ">
                <img src="assets/image/image7.png" alt="" class="hover:scale-125 duration-300 w-64">
                <div class="flex flex-col items-center space-y-1 text-center">
                    
                    <router-link to="pattes"><button class="p-2 py-1 bg-green-700 text-white text-xl font-medium rounded w-32">Choose pattes</button></router-link>
                </div>
            </div>
            <div class="shadow-md col-span-1 p-6 bg-white w-full max-w-xl ">
                <img src="assets/image/image21.jpg" alt="" class="hover:scale-125 duration-300 w-64">
                <div class="flex flex-col items-center space-y-1 text-center">
                    <span class="font-bold text-slate-700">Yaourt</span>
                    
                    <router-link to="yaourt"><button class="p-2 py-1 bg-green-700 text-white text-xl font-medium rounded w-32">Choose yaourt</button></router-link>
                </div>
            </div>
            <div class="shadow-md col-span-1 p-6 bg-white w-full max-w-xl ">
                <img src="assets/image/imag26.jpg" alt="" class="hover:scale-125 duration-300 w-64">
                <div class="flex flex-col items-center space-y-1 text-center">
                    <span class="font-bold text-slate-700">rice</span>
                    
                    <router-link to="riz"><button class="p-2 py-1 bg-green-700 text-white text-xl font-medium rounded w-32">Choose rice</button></router-link>
                </div>
            </div>
            <div class="shadow-md col-span-1 p-6 bg-white w-full max-w-xl ">
                <img src="assets/image/image28.jpg" alt="" class="hover:scale-125 duration-300 w-64">
                <div class="flex flex-col items-center space-y-1 text-center">
                    <span class="font-bold text-slate-700">Boisson</span>
                   
                    <router-link to="boisson"><button class="p-2 py-1 bg-green-700 text-white text-xl font-medium rounded w-32">Choose drink</button></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>