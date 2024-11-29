import { createApp } from "vue";
import './interceptors/axios.js';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "@/App.vue";
import router from './routers/index.js';
import PrimeVue from 'primevue/config';
import ProgressBar from 'primevue/progressbar';
import './assets/main.css';



const app = createApp(App);
app.use(router)
app.use(PrimeVue, {
    unstyled: true
});
app.component('ProgressBar', ProgressBar);
app.mount("#app");
