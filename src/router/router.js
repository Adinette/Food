import { createRouter, createWebHistory } from "vue-router";
import Home from "../page/Home.vue";
import Reservation from "../page/Reservation.vue";
import Order from "../page/client/Order.vue";
import Create from "../page/client/Create.vue";
import CreateA from "../page/Admin/CreateA.vue";
import Pay from "../page/Pay.vue";
import AcountA from "../page/Admin/AcountA.vue";
import OrderA from "../page/Admin/OrderA.vue";
import Add from "../page/Admin/Add.vue";
import AddP from "../page/Admin/AddP.vue";
import Meals from "../page/client/Meals.vue";
import MealsA from "../page/Admin/MealsA.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: Home,
      name: "home",
    },

    {
      path: "/reservation",
      component: Reservation,
      name: "reservation",
      meta: {
        requireAuth: true,
      },
    },
    {
      path: "/order",
      component: Order,
      name: "order",
      meta: {
        requireAuth: true,
      },
    },

    {
      path: "/create",
      component: Create,
      name: "create",
    },
    {
      path: "/createA",
      component: CreateA,
    },
    {
      path: "/pay",
      component: Pay,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: "/acountA",
      component: AcountA,
      name: "compte",
    },
    {
      path: "/orderA",
      component: OrderA,
      name: "orderA",
      meta: {
        requireAdmin: true,
        requireAuth: true,
      },
    },
    {
      path: "/add",
      component: Add,
      name: "add",
      meta: {
        requireAdmin: true,
      },
    },
    {
      path: "/edit/:id",
      component: Add,
      name: "edit",
      meta: {
        requireAdmin: true,
        requireAuth: true,
      },
    },
    {
      path: "/meals/:id",
      component: Meals,
      name: "meals",
      meta: {
        requireAuth: true,
      },
    },
    {
      path: "/edit/:id",
      component: MealsA,
      name: "mealsA",
      meta: {
        requireAdmin: true,
        requireAuth: true,
      },
    },
    {
      path: "/addP",
      component: AddP,
      name: "addP",
      meta: {
        requireAdmin: true,
        requireAuth: true,
      },
    },
    {
      path: "/plat/editPlat/:id",
      component: AddP,
      name: "editPlat",
      meta: {
        requireAdmin: true,
        requireAuth: true,
      },
    },

    {
      path: "/categorie/:id",
      component: Meals,
      name: "meals",
      meta: {
        requireAuth: true,
      },
    },
   
    {
      path: "/categorie/:id",
      component: MealsA,
      name: "mealsA",
      meta: {
        requireAdmin: true,
        requireAuth: true,
      },
    },
  ],
});
const token_duration = 3600000;

router.beforeEach((to, from, next) => {
  const istoken = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const tokenExpiration = localStorage.getItem("tokenExpiration");
  const now = Date.now();

  const intervalId="";
  if (
    to.matched.some((record) => record.meta.requireAuth) &&
    to.matched.some((record) => record.meta.requireAdmin)
  ) {
    if (istoken) {
      if (role === "admin") {
        if (now >= tokenExpiration) {
          // Effacer le token et rediriger vers la page de connexion
          localStorage.removeItem("token");
          localStorage.removeItem("tokenExpiration");
          localStorage.removeItem("role");
          const clearInterval=(intervalId);
          next({ name: "compte" });
        } else {
          // Mettre à jour l'heure d'expiration du token
          localStorage.setItem("tokenExpiration", now + token_duration);
          next();
        }
      } else {
        next({ name: "home" });
      }
    } else {
      clearInterval(intervalId);
      next({ name: "compte" });
    }
  } else {
    next();
  }
});

export default router;
