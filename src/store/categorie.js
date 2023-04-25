import { defineStore } from "pinia";

export const usePanierStore = defineStore("categorie", {
  state: () => ({
    categorie: [],
    
  }),
  getters: {
    /**
     * Permet de recuperer le panier.
     * @returns {Array}
     */
    getPanier() {
      return this.categorie;
    },
  },
  actions: {
    /**
     * Permet de confirmer ou non une action du modal.
     * @param {Object} categorie
     */
    modifierCategorie(commande) {
      this.categorie.push(this.categorie);
      console.log(this.categorie);
      this.count = this.categorie.length;
      
    },
  },
});