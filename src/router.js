import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Projects from './pages/Projects.vue';
import Contact from './pages/Contact.vue';
// Navbar.vue non serve qui, a meno che non sia proprio una pagina

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact },
  // Se non ti serve, togli pure questa:
  // { path: '/navbar', component: () => import('./components/Navbar.vue') }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
