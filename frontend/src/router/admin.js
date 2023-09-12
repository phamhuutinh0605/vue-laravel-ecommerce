const admin = [
    {
        path: "/",
        redirect: "/app",
    },
    {
        path: "/app",
        name: "app",
        directives: "/app/dashboard",
        component: () => import("../components/AppLayout.vue"),
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: "dashboard",
                name: "app.dashboard",
                component: () => import("../views/Dashboard.vue"),
                meta: {
                    requiresAuth: true,
                },
            },
            {
                path: "products",
                name: "app.products",
                component: () => import("../views/Products/Products.vue"),
                meta: {
                    requiresAuth: true,
                },
            },
            {
                path: "users",
                name: "app.users",
                component: () => import("../views/Users/Users.vue"),
                meta: {
                    requiresAuth: true,
                },
            },
            {
                path: "report",
                name: "app.report",
                component: () => import("../views/Report.vue"),
                meta: {
                    requiresAuth: true,
                },
            },
        ],
    },
];

export default admin;
