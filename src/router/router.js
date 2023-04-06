import { createRouter, createWebHistory } from 'vue-router'
import Acceuil from'../page/Acceuil.vue'

import Propos from'../page/Propos.vue'
import Reservation from'../page/Reservation.vue'
import Commande from'../page/Commande.vue'
import Acount from'../page/Acount.vue'
import Salad from '../page/Salad.vue'
import Poulet from '../page/Poulet.vue'
import Chawarma from '../page/Chawarma.vue'
import Pizza from '../page/Pizza.vue'
import Croissant from '../page/Croissant.vue'
import Pattes from '../page/Pattes.vue'
import Riz from '../page/Riz.vue'
import Yaourt from '../page/Yaourt.vue'
import Boisson from '../page/Boisson.vue'
import Panier from '../page/Panier.vue'
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
            path: '/salad', component: Salad
        },
        {
            path: '/poulet', component: Poulet
        },
        {
            path: '/chawarma', component: Chawarma
        },
        {
            path: '/pizza', component: Pizza
        },
        {
            path: '/croissant', component: Croissant
        },
        {
            path: '/pattes', component: Pattes
        },
        {
            path: '/riz', component: Riz
        },
        {
            path: '/yaourt', component: Yaourt
        },
        {
            path: '/boisson', component: Boisson
        },
        {
            path: '/panier', component: Panier
        },
        
    ]
});
export default router;