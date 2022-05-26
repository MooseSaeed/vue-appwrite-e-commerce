import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";
import router from "./router";
import "./utils.js";

createApp(App).use(router).mount("#app");
