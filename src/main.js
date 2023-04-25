import './style.css'
//import { initializeApp } from "firebase/app";
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router";
import { createPinia } from 'pinia'

const pinia = createPinia();
const app = createApp(App);
/* const firebaseConfig = {
    apiKey: "AIzaSyAOm5SDGaV4E8d4hxYBCJCVpQGAD-0IyXI",
    authDomain: "food-3a3d6.firebaseapp.com",
    projectId: "food-3a3d6",
    storageBucket: "food-3a3d6.appspot.com",
    messagingSenderId: "730364010288",
    appId: "1:730364010288:web:b0f4bb98ee001f3657b2f5"
  };
  const App = initializeApp(firebaseConfig);
   */
app.use(pinia)
    .use(router)
    .mount("#app");
   