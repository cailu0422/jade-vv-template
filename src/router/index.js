import { createRouter, createWebHistory } from "vue-router";
import route from "./modules/route";

const routes = [...route];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
