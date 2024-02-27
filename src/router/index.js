import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeFace from '../views/HomeFace.vue';
import FoodDetails from '../components/FoodDetails'
import Cart from '../components/Cart';
import ClientLogin  from "../components/common/ClientLogin.vue"
import LatestArrival from "../components/common/LatestArrival.vue";
import CreateAccount from "../views/CreateAccount.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomeFace',
    component: HomeFace
  },
  { path: '/food-details', name: 'food-details', component: FoodDetails },
  { path: '/cart', component: Cart },
  { path: '/LatestArrivals', component: LatestArrival },
  {path: '/ClientLogin', component: ClientLogin},
  {path: '/CreateAccount', component: CreateAccount},
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;