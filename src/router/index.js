import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from '@views/Main';
import Admin from '@views/Admin';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/admin',
        component: Admin
    }
];

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 };
    }
});

export default router;
