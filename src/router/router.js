import { createRouter, createWebHistory } from 'vue-router'
import Home from'../page/Home.vue'
import About from'../page/About.vue'
import Reservation from'../page/Reservation.vue'
import Order from'../page/client/Order.vue'

import Basket from '../page/Basket.vue'
import Create from '../page/client/Create.vue'
import CreateA from '../page/Admin/CreateA.vue'
import Pay from '../page/Pay.vue'
import AcountA from '../page/Admin/AcountA.vue'
import OrderA from'../page/Admin/OrderA.vue'
import Add from'../page/Admin/Add.vue'
import AddP from'../page/Admin/AddP.vue'
import Meals from'../page/client/Meals.vue'
import MealsA from'../page/Admin/MealsA.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home', component: Home
        },
       
        {
            path: '/about', component: About
        },
        {
            path: '/reservation', component: Reservation
        },
        {
            path: '/order', component: Order
        },
        
        {
            path: '/meals/basket', component: Basket
        },
       
        {
            path: '/create', component: Create
        },
        {
            path: '/createA', component: CreateA
        },
        {
            path: '/pay', component: Pay
        },
        {
            path: '/acountA', component: AcountA
        },
        {
            path: '/orderA', component: OrderA
        },
        {
            path: '/add', component: Add
        },
        
        {
            path: '/addP', component: AddP
        },
        {
            path: '/meals/:category', component: Meals
        },
        {
            path: '/mealsA/:category', component: MealsA
        },
    ]
});
export default router;