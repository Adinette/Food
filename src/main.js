import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/router";
import { createPinia } from 'pinia'
import './style.css';
const pinia = createPinia();

const app = createApp(App);
app.use(pinia)
    .use(router)
    app.mount("#app");
