import { createRouter, createWebHistory } from 'vue-router';
import Calificaciones from '../views/Calificaciones.vue';
import Registro from '../views/Registro.vue';

const routes = [
  { path: '/calificaciones', component: Calificaciones },
  { path: '/registro', component: Registro },
  { path: '/', redirect: '/calificaciones' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
