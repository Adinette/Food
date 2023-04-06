import { defineStore } from "pinia";

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