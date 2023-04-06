<template>
  <div class="max-w-screen-xl mx-auto flex flex-col items-center space-y-4 p-6">
        <h3 class="font-bold text-xl text-green-700">Reservation</h3>
        <h2 class="uppercase text-slate-700 text-2xl font-bold">Fill this form to make a Reservation</h2>
        <form @submit.prevent action="" class="bg-gray-100 shadow w-2/3 p-4 space-y-4">
            <div class="space-y-2">
                <label for="name" class="font-medium text-gray-700">Your Name</label>
                <input type="text" name="name" id="name" v-model="reservation.name" class="rounded w-full p-2">
            </div>
            <div class="space-y-2">
                <label for="email" class="font-medium text-gray-700">Your Email</label>
                <input type="email" name="email" id="email" v-model="reservation.email" class="rounded w-full p-2">
            </div>
            <div class="space-y-2">
                <label for="number" class="font-medium text-gray-700">Your Number</label>
                <input type="tel" name="number" id="number" v-model="reservation.contact" class="rounded w-full p-2">
            </div>
            <div class="space-y-2">
                <label for="dateReservation" class="font-medium text-gray-700">Reservation Date</label>
                <input type="date" name="dateReservation" id="dateReservation" class="rounded w-full p-2" v-model="reservation.dateReservation">
            </div>

            <button @click="submitForm" class="p-2 py-1 bg-green-700 text-white text-xl font-medium rounded w-full">Make The
                Reservation</button>
        </form>
    </div>

   
</template>

<script setup>
import { ref } from "vue";
import { useReservationStore } from "../store/reservation";

const reservationStore = useReservationStore()

const reservation = ref({
  name: '',
  email: '',
  contact: '',
  dateReservation: '',
});

const submitForm = () => {
  reservationStore.setReservation(reservation.value)
  console.log("reservation is :", reservation.value)
};


</script>

<style>

</style>