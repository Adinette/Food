import { createRouter, createWebHistory } from 'vue-router'
import Acceuil from'../page/Acceuil.vue'
import Propos from'../page/Propos.vue'
import Reservation from'../page/Reservation.vue'
import Commande from'../page/Commande.vue'
import Acount from'../page/Acount.vue'
import Panier from '../page/Panier.vue'
import Salad from '../page/Salad.vue'
import Poulet from '../page/Poulet.vue'
import Chawarma from '../page/Chawarma.vue'
import Riz from '../page/Riz.vue'
import Pattes from '../page/Pattes.vue'
import Pizza from '../page/Pizza.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        /**
         * path constitue la route de ta page par example pour helloworld. localhost:3000/hello-world
         * component represente la page qui va s'afficher dans l'example precedant, HelloWorld.
         */
        
        {
            path: '/acceuil', component: Acceuil
        },
       
        {
            path: '/propos', component: Propos
        },

        /**
         * Je pense que tu as compris le principe de base des routes, c'est tres bien
         * Apres on va essayer de passer aux notions avancers.
         */
        {
            path: '/reservation', component: Reservation
        },
        {
            path: '/commande', component: Commande
        },
        {
            path: '/count', component: Acount
        },    
        {
            path: '/panier', component: Panier
        },
        {
            path: '/salad', component: Salad
        },
        {
            path: '/poulet', component: Poulet
        },
        {
            path: '/chawarma', component: Chawarma
        },
        {
            path: '/riz', component: Riz
        },
        {
            path: '/pattes', component: Pattes
        },
        {
            path: '/pizza', component: Pizza
        },
    ]
});
export default router;