import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './route';

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
});

export default router;
