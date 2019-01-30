import Vue from 'vue';
import Router from 'vue-router';
// import Home from '../views/Home.vue';
import Layout from '../views/layout/index.vue';

Vue.use(Router);

export const constantRouterMap = [
  {
    path: '/',
    name: 'home',
    redirect: '/index',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/Home.vue'),
        meta: {
          title: '首页',
          icon: 'dashboard'
        }
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];
export const asyncRouterMap = [];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRouterMap
});
