import { defineStore } from "pinia";
// Je vois que tu as essayer de creer un store, on verra ca plus tard, mais c'est pas mal.
export const useCompteStore = defineStore("compte", {
    state: () => ({
   compte:{} }),
    getters: {
        /**
         * Permet de recuperer la personne.
         * @returns {Object}
         */
        getCompte() {
            return this.compte;
        },
    },
    actions: {
        /**
         * Permet de confirmer ou non une action du modal.
         * @param {Object} compte 
         */
        setCompte(compte) {
            this.compte = compte;
        }
    },
})