import Vue from 'vue';
import VueRouter from 'vue-router';

import loginForm from '../components/loginForm.vue';
import menuList from '../components/menuList.vue';
import listCart from '../components/listCart.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: loginForm},
  { path: '/menu', component: menuList },
  { path: '/cart', component: listCart }
];

const router = new VueRouter({
  routes
});

export default router;
