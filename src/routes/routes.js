import { createRouter, createWebHashHistory } from "vue-router";
import NoFound from "../views/NoFound.vue";
import Loggin from "../views/Logging.vue";
import { Store } from "../store/store";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/home", component: () => import("../views/Home.vue") },
    { path: "/login", component: Loggin },
    { path: "/:catchAll(.*)", component: NoFound },
  ],
});
router.beforeEach((to, _from, next) => {
  if (to.path !== "/login" && Store.User_Name !== "") next();
  else if (to.path === "/login") next();
  else router.push("/login");
});

export default router;
