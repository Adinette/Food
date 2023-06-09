<template>
  <div class="max-w-screen-xl mx-auto flex flex-col items-center space-y-4 p-6">
    <h3 class="font-bold text-xl text-green-700">Reservation</h3>
    <h2 class="uppercase text-black text-2xl font-bold">
      Fill this form to make a Reservation
    </h2>
    <form @submit.prevent class="bg-gray-100 shadow w-2/3 p-4 space-y-4">
      <div class="space-y-2">
        <label for="email" class="font-medium text-gray-700"
          >Categorie</label
        >
        <select
          v-model="ctg"
          class="rounded w-full p-2"
          id="inputCategorie"
          @change="getCategorieFood(ctg)"
          required
        >
          <option value="" disabled selected>Choisissez une categorie</option>
          <option
            v-for="categorie in categories"
            :key="categorie.id"
            :value="categorie._id"
          >
            {{ categorie.nom }}
          </option>
        </select>
      </div>
      <div class="space-y-2">
        <label for="email" class="font-medium text-gray-700">Plat</label>
        <select
          v-model="reservation.platId"
          class="rounded w-full p-2"
          id="inputMeal"
          required
        >
          <option value="" disabled selected>Choisissez un plat</option>
          <option v-for="plat in plats" :key="plat.id" :value="plat">
            {{ plat.nom }}
          </option>
        </select>
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
          v-model="reservation.date"
        />
      </div>

      <button
        @click="submitReservation()"
        type="submit"
        class="p-2 py-1 bg-green-700 text-white text-xl font-medium rounded w-full"
      >
        Make The Reservation
      </button>
    </form>
  </div>
  <table class="table-auto border-collapse border border-green-700">
    <thead>
        <tr class="bg-slate-400 text-white">
            <th scope="col" class="p-2 space-y-2">Categorie</th>
            <th scope="col" class="p-2 space-y-2">Plat</th>
            <th scope="col" class="p-2 space-y-2">Date de reservation</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(reservation, index) in reservations" :key="index" :class="index % 2 === 0 ? 'even-bg' : 'odd-bg'">
            <td class="p-2">{{ reservation.nom.marque }}</td>
            <td class="p-2">{{ reservation.nom }}</td>
            <td class="p-2">{{ reservation.date }}</td>
            <td class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="p-2 py-1 bg-green-700 text-white text-xl font-medium rounded w-full" @click="deleteReservation(index)">
                    Supprimer
                </button>
            </td>
        </tr>
    </tbody>
</table>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { addReservation,getReservation,deleteReservations } from "../service/reservation.service";
import { request } from "/src/request";
const categories = ref(null);
const plats = ref(null);
const ctg = ref(null);
const reservation = ref({
  clientId: localStorage.getItem("userId"),
  date: "",
  platId: "",
});
const reservations =ref([])

const submitReservation = async () => {
  try {
    const addedReservation = await addReservation(reservation);
    console.log(addedReservation);
  } catch (error) {
    console.error(error);
  }
  try{
  const reservationsData =await getReservation ();
  reservations.value = reservationsData.data;
}catch(error){
  console.log(error);
}
};
const deleteReservation= async()=>{
  try{
const deletedReservation =await deleteReservations();
const deletedData = deletedReservation.value;
reservations.value.splice(reservations.value.indexOf(deletedData), 1);
console.log(deletedData);
  }catch(error){
    console.log(error);
  }
}
onMounted(() => {
  getCategorieFood();
  getCategorie();
  
});

const getCategorieFood = (id) => {
  try {
    const result = request(
      "plat/" + id,
      "GET",
      { Authorization: localStorage.getItem("token") },
      null,
      false
    );
    result.then((data) => {
      plats.value = data;
      console.log(data);
    });
  } catch (error) {
    console.log(error);
  }
};
const getCategorie = () => {
  try {
    const result = request(
      "categorie",
      "GET",
      { Authorization: localStorage.getItem("token") },
      null,
      false
    );
    result.then((data) => {
      categories.value = data;
    });
  } catch (error) {
    console.log(error);
  }
};



</script>

<style>
    .even-bg {
        @apply bg-green-700;
    }

    .odd-bg {
        @apply bg-blue-100;
    }
</style>
