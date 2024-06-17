import { createWebHistory, createRouter } from 'vue-router';

import Home from "@/components/Home.vue";
import ProjectH from "@/components/ProjectH.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/projects/hikvision', component: ProjectH },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;