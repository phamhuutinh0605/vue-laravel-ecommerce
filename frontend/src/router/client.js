const client = [
    {
        path: "/login",
        name: "login",
        component: () => import("../views/Login.vue"),
        meta: {
            requiresGuest: true,
        },
    },
    {
        path: "/request-password",
        name: "requestPassWord",
        component: () => import("../views/RequestPassword.vue"),
        meta: {
            requiresGuest: true,
        },
    },
    {
        path: "/reset-password/:token",
        name: "resetPassWord",
        component: () => import("../views/ResetPassword.vue"),
        meta: {
            requiresGuest: true,
        },
    },
    {
        path: "/register",
        name: "register",
        component: () => import("../views/Register.vue"),
        meta: {
            requiresGuest: true,
        },
    },
    {
        path: "/:pathMatch(.*)",
        name: "notfound",
        component: () => import("../views/NotFound.vue"),
    },
];
export default client;
