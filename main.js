// main.js
import { createApp } from 'vue';
import App from './src/App.vue'; // Aggiorna il percorso se necessario
import router from './src/router';


const app = createApp(App);
app.use(router);
app.mount('#app');
