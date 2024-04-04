import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/Login.vue";
import Playground from "../views/Playground.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/playground",
    name: "Playground",
    component: Playground,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
      behavior: "smooth",
    };
  },
});

export default router;
