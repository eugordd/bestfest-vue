import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from '@views/Main';
import Admin from '@views/admin/Admin';
import AdminArtists from '@views/admin/AdminArtists';
import AdminFestivals from '@views/admin/AdminFestivals';
import AdminGenres from '@views/admin/AdminGenres';
import AdminLogin from '@views/auth/AdminLogin';
import Auth from '@views/auth/Auth';

import checkAdminPermission from '@router/middlewares/checkAdminPermission';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Main,
    name: 'main'
  },
  {
    path: '/auth',
    component: Auth,
    children: [
      {
        path: '/admin-login',
        name: 'admin-login',
        component: AdminLogin,
        beforeEnter: checkAdminPermission,
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    beforeEnter: checkAdminPermission,
    children: [
      {
        path: 'admin-artists',
        name: 'admin-artists',
        component: AdminArtists
      },
      {
        path: 'admin-festivals',
        name: 'admin-festivals',
        component: AdminFestivals
      },
      {
        path: 'admin-genres',
        name: 'admin-genres',
        component: AdminGenres
      }
    ]
  },
  {
    path: '*',
    redirect: '/',
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
