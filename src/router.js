import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Projects from './pages/Projects.vue';
import Contact from './pages/Contact.vue';
import Social from './pages/Social.vue';
import CalorieCounter from './pages/CalorieCounter.vue';
import DateFormatter from './pages/DateFormatter.vue';
import DecimalToBinaryConverter from './pages/DecimalToBinaryConverter.vue';
import Rpg from './pages/Rpg.vue';
import TodoList from './pages/ToDoList.vue'; // <-- fix casing to match actual file

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/calorie-counter', name: 'CalorieCounter', component: CalorieCounter }, // <-- aggiungi la virgola qui
  { path: '/contact', component: Contact },
  { path: '/social', component: Social },
  { path: '/date-formatter', name: 'DateFormatter', component: DateFormatter }, // <-- aggiungi la virgola qui
  // Se non ti serve, togli pure questa:
  // { path: '/navbar', component: () => import('./components/Navbar.vue') }
  { path: '/CalendarIcon', name: 'CalendarIcon', component: () => import('./components/CalendarIcon.vue') }, // <-- aggiungi la virgola qui
  { path: '/DecimalToBinaryConverter', name: 'DecimalToBinaryConverter', component: DecimalToBinaryConverter }, // <-- aggiungi la virgola qui
  { path: '/rpg', name: 'Rpg', component: Rpg }, // <-- aggiungi la virgola qui
  { path: '/todo-list', name: 'TodoList', component: TodoList } // <-- fix casing to match actual file

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
