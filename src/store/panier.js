import { defineStore } from "pinia";
import { ref } from "vue";
// Je vois que tu as essayer de creer un store, on verra ca plus tard, mais c'est pas mal.
export const usePanierStore = defineStore("panier", {
  state: () => ({
    panier: [],
    somme: 0,
    count:0,
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
      const somme = ref(0)
      /* La boucle que tu avais utiliser ici n'etait pas bonne. Elle ne convient pas a ce contect */
      this.panier.forEach(plat => {
        somme.value += plat.prix;
      });
      return somme.value;
    },
    nbPlat() {
      return this.panier.length;
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
      this.count = this.panier.length;
    },
    retirerPanier(platIndex) {
      this.panier.splice(platIndex, 1);
      console.log(this.panier);
      this.count = this.panier.length;
    },
    viderPanier() {
      this.panier.splice(0, this.panier.length);
      console.log("Panier vidé !");
      this.count = this.panier.length;
    }

  },
});
