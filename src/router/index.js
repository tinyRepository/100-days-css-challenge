import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/pages/HomePage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/:day?',
    name: 'Home',
    component: HomePage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
