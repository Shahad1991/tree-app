import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { createVuetify } from 'vuetify';
import ElUse from './components/MenuItems/ElUse.vue';

const vuetify = createVuetify({ components, directives });

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/menu-items', component: ElUse },
    // Du kan tilføje flere ruter her i fremtiden
  ],
});

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount('#app');
