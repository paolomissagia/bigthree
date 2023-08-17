import { createApp } from "vue";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Vue3Autocounter from "vue3-autocounter";

createApp(App).component("vue3-autocounter", Vue3Autocounter).mount("#app");
