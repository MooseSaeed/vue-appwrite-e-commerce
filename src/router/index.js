import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../components/main/Homepage.vue";

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: Homepage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    //In case i need a delay for transition to complete
    /*     return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 })
      }, 500)
    }) */

    return {
      top: 0,
      behavior: "smooth",
    };
  },
});

export default router;
