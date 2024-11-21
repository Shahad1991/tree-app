import { createApp } from 'vue';
import store from './store'; // Import the store
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import PointsDisplay from './components/MenuItems/PointsDisplay.vue';
import CheckList from './components/MenuItems/CheckList.vue';
import FoodWaste from './components/MenuItems/FoodWaste.vue';
import ElUse from './components/MenuItems/ElUse.vue';
import ArrowComponent from './components/ArrowComponent.vue';
import SummaryUser from './components/SummaryUser.vue';
import TransportUser from './components/MenuItems/TransportUser.vue'; // Import TransportUser component
import UsedThing from './components/MenuItems/UsedThing.vue'; // Import UsedThing component
import HomeSide from './components/HomeSide.vue';
import UsersList from './components/UsersList.vue';


// Import the Vuetify components and directives
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Create the Vuetify instance

const vuetifyInstance = createVuetify({
  components,
  directives,
});

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/pointsDisplay', name: 'PointsDisplay', component: PointsDisplay },
    { path: '/checkList', name: 'CheckList', component: CheckList},
    { path: '/foodWaste', name: 'FoodWaste', component: FoodWaste},
    { path: '/elUse', name: 'ElUse', component: ElUse},
    { path: '/arrowComponent', name: 'ArrowComponent', component: ArrowComponent},
    { path: '/transportUser', component: TransportUser },
    { path: '/usedThing', component: UsedThing },
    { path: '/summaryUser', component: SummaryUser},
    { path: '/homeSide', component: HomeSide},
    { path: '/usersList', component: UsersList},



  ],
});

const app = createApp(App);
app.use(router);
app.use(store)  // Use the store
app.use(vuetifyInstance);
app.mount('#app');
