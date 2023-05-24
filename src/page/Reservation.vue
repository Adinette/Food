<template>
  <div class="max-w-screen-xl mx-auto flex flex-col items-center space-y-4 p-6">
    <h3 class="font-bold text-xl text-green-700">Reservation</h3>
    <h2 class="uppercase text-black text-2xl font-bold">
      Fill this form to make a Reservation
    </h2>
    <form @submit.prevent class="bg-gray-100 shadow w-2/3 p-4 space-y-4">
      <div class="space-y-2">
        <label for="name" class="font-medium text-gray-700">Nom</label>
        <input
          type="text"
          name="name"
          id="name"
          v-model="reservation.name"
          class="rounded w-full p-2"
        />
      </div>
      <div class="space-y-2">
        <label for="email" class="font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          v-model="reservation.email"
          class="rounded w-full p-2"
        />
      </div>
      <div class="space-y-2">
        <label for="email" class="font-medium text-gray-700">Nom du plat</label>
        <input
          type="text"
          name="name_plat"
          id="name_plat"
          v-model="reservation.name_plat"
          class="rounded w-full p-2"
        />
      </div>
      <div class="space-y-2">
        <label for="number" class="font-medium text-gray-700"
          >Contact</label
        >
        <input
          type="tel"
          name="number"
          id="number"
          v-model="reservation.contact"
          class="rounded w-full p-2"
        />
      </div>
      <div class="space-y-2">
        <label for="dateReservation" class="font-medium text-gray-700"
          >Reservation Date</label
        >
        <input
          type="date"
          name="dateReservation"
          id="dateReservation"
          class="rounded w-full p-2"
          v-model="reservation.dateReservation"
        />
      </div>

      <button
        @click="submit"
        type="submit"
        class="p-2 py-1 bg-green-700 text-white text-xl font-medium rounded w-full"
      >
        Make The Reservation
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { request } from "/src/request";
import { onMounted } from "vue";
// import { useRoute } from "vue-router";

// const reservationStore = useReservationStore();

const reservation = ref({
  name: "",
  email: "",
  name_plat:"",
  contact: "",
  dateReservation: "",
});
// const router = useRoute();
// const id = ref(router.params.id);
// console.log(id.value);
onMounted(() => {
    // try {
    //   const getReservation = request(
    //     "reservation/",
    //     "GET",
    //     { Authorization: localStorage.getItem("token") },
    //     null,
    //     false
    //   );

    //   getReservation.then((data) => {
    //     reservation.value.name = data.nom;
    //     reservation.value.email = data.email;
    //     reservation.value.name_plat = data.name_plat;
    //     reservation.value.contact = data.contact;
    //     reservation.value.dateReservation = data.dateReservation;
    //   });
    // } catch (error) {
    //   console.log(error);
    // }


const submit = () => {
  if (reservation.value.nom == "" ||
   reservation.value.email == "" ||
   reservation.value.name_plat == "" || 
   reservation.value.contact =="" ||
   reservation.value.dateReservation == "") {
    alert("Tous les champs sont obligatoires");
    return 0;
  }
    try {
      const result = request(
        "reservation/",
        "POST",
        { Authorization: localStorage.getItem("token") },
        toSend,
        false
      );
      result.then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  
};
});
</script>

<style></style>
