import { defineStore } from "pinia";
// Je vois que tu as essayer de creer un store, on verra ca plus tard, mais c'est pas mal.
export const useCreationStore = defineStore("creation", {
    state: () => ({
   creation:{} }),
    getters: {
        /**
         * Permet de recuperer la personne.
         * @returns {Object}
         */
        getCreation() {
            return this.creation;
        },
    },
    actions: {
        /**
         * Permet de confirmer ou non une action du modal.
         * @param {Object} creation 
         */
        setCreation(creation) {
            this.creation = creation;
        }
    },
})