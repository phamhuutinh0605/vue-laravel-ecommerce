import { createRouter, createWebHistory } from "vue-router";
import admin from "./admin";
import client from "./client";
import store from "../store";
const routes = [...admin, ...client];
const router = createRouter({
    routes,
    history: createWebHistory(),
});
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({ name: "login" });
    } else if (to.meta.requiresGuest && store.state.user.token) {
        next({ name: "app.dashboard" });
    } else {
        next();
    }
});
export default router;
