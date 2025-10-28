import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import LandingPage from "../pages/LandingPage.vue";
import LoginPage from "../pages/auth/LoginPage.vue";
import SignupPage from "../pages/auth/SignupPage.vue";
import DashboardPage from "../pages/DashboardPage.vue";
import TicketManagementPage from "../pages/TicketManagementPage.vue";
import { useAppStore } from "../store/index";
const routes = [
    {
        path: "/",
        component: MainLayout,
        children: [
            { path: "", component: LandingPage },
            { path: "/auth/login", component: LoginPage },
            { path: "/auth/signup", component: SignupPage },
            {
                path: "/dashboard",
                component: DashboardPage,
                meta: { requiresAuth: true },
            },
            {
                path: "/tickets",
                component: TicketManagementPage,
                meta: { requiresAuth: true },
            },
        ],
    },
    //   { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFoundPage },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
// ✅ Protect routes (like PrivateRoute)
router.beforeEach((to, from, next) => {
    const store = useAppStore();
    const requiresAuth = to.matched.some((r) => r.meta.requiresAuth);
    if (requiresAuth && !store.user) {
        next("/auth/login");
    }
    else {
        next();
    }
});
export default router;
