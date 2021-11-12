import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from '@views/Main';
import Admin from '@views/admin/Admin';
import AdminArtistsList from '@views/admin/AdminArtistsList';
import AdminFestivalsList from '@views/admin/AdminFestivalsList';
import AdminGenresList from '@views/admin/AdminGenresList';
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
        component: AdminArtistsList
      },
      {
        path: 'admin-festival',
        name: 'admin-festival',
        component: AdminFestivalsList
      },
      {
        path: 'admin-genres',
        name: 'admin-genres',
        component: AdminGenresList
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
