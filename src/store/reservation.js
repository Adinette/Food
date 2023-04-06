import { defineStore } from "pinia";

export const useReservationStore = defineStore("reservation", {
    state: () => ({
   reservation: {}
}),

    getters: {
        /**
         * Permet de recuperer la personne.
         * @returns {Object}
         */
        getReservation() {
            return this.reservation;
        },
    },
    actions: {
        /**
         * Permet de confirmer ou non une action du modal.
         * @param {Object} reservation 
         */
        setReservation(reservation) {
            this.reservation = reservation;
        }
    },
})