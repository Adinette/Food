import { defineStore } from "pinia";
import { ref } from "vue";
// Je vois que tu as essayer de creer un store, on verra ca plus tard, mais c'est pas mal.
export const usePanierStore = defineStore("panier", {
  state: () => ({
    panier: [],
    somme:"",
  }),
  getters: {
    /**
     * Permet de recuperer le panier.
     * @returns {Array}
     */
    getPanier() {
      return this.panier;
    },
    total() {
      const somme = ref (0)
     for(let plat in this.panier){
          somme.value+=plat.prix
     }
     return somme;
     
  }
  },
  actions: {
    /**
     * Permet de confirmer ou non une action du modal.
     * @param {Object} panier
     */
    ajoutPanier(plat) {
      this.panier.push(plat);
      console.log(this.panier);
    },
    retirerPanier(platIndex) {
      this.panier.splice(platIndex,1);
      console.log(this.panier);
    },
    
  },
});
