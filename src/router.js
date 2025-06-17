// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Projects from './pages/projects.vue';
import Contact from './pages/Contact.vue';
import CalorieCounter from './pages/CalorieCounter.vue';
import DateFormatter from './pages/DateFormatter.vue';
import Rpg from './pages/Rpg.vue';
import TodoList from './pages/ToDoList.vue';
import MagicBall from './pages/MagicBall.vue';
import DecimalToBinaryConverter from './pages/DecimalToBinaryConverter.vue';
import Cv from './pages/Cv.vue';
// Importing components for the routes
const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact },
  { path: '/calorie-counter', name: 'CalorieCounter', component: CalorieCounter },
  { path: '/date-formatter', name: 'DateFormatter', component: DateFormatter },
  { path: '/calendar-icon', name: 'CalendarIcon', component: () => import('./components/CalendarIcon.vue') },
  { path: '/decimal-to-binary-converter', name: 'DecimalToBinaryConverter', component: DecimalToBinaryConverter },
  { path: '/rpg', name: 'Rpg', component: Rpg },
  { path: '/todo-list', name: 'TodoList', component: TodoList },
  { path: '/magic-ball', name: 'MagicBall', component: MagicBall },
  { path: '/cv', name: 'Cv', component: Cv ,}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;