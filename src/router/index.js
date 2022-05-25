import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../components/main/Homepage.vue";
import Productview from "../components/main/Productview.vue";
import Authpage from "../components/main/Authpage.vue";
import Adminpanel from "../components/main/Adminpanel.vue";
import Newproduct from "../components/main/Newproduct.vue";
import Mycart from "../components/main/Mycart.vue";

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: Homepage,
  },
  {
    path: "/products/example",
    name: "Productview",
    component: Productview,
  },
  {
    path: "/auth",
    name: "Authpage",
    component: Authpage,
  },
  {
    path: "/admin",
    name: "Adminpanel",
    component: Adminpanel,
  },
  {
    path: "/newproduct",
    name: "Newproduct",
    component: Newproduct,
  },
  {
    path: "/mycart",
    name: "Mycart",
    component: Mycart,
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
