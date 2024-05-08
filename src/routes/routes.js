import { createRouter, createWebHashHistory } from "vue-router";
import NoFound from "../views/NoFound.vue";
import Login from "../views/Logging.vue";
import { userStore } from "../store/userStore.js";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/home", component: () => import("../views/Home.vue") },
    { path: "/login", component: Login },
    { path: "/:catchAll(.*)", component: NoFound },
  ],
});
router.beforeEach((to, _from, next) => {
  if (to.path !== "/login" && userStore.User_Name !== "") next();
  else if (to.path === "/login") next();
  else router.push("/login");
});

export default router;
