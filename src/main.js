import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { createVuetify } from 'vuetify';
import ElUse from '@/components/MenuItems/ElUse.vue'; // Adjust path as necessary
import FoodWaste from '@/components/MenuItems/FoodWaste.vue';

const vuetify = createVuetify({ components, directives });

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/el-use', component: ElUse },
    { path: '/food-waste', component: FoodWaste },
  ],
});

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount('#app');
