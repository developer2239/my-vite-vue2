import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'MainTodo',
    component: () => import('../pages/MainTodo.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/About.vue'),
  },
  {
    path: '/:pathMatches(.*)*',
    name: 'Notfound',
    component: () => import('../pages/NotFound.vue'),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
