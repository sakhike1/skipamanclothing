import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeFace from '../views/HomeFace.vue';
import FoodDetails from '../components/FoodDetails'
import Cart from '../components/Cart';
import ClientLogin  from "../components/common/ClientLogin.vue"
import LatestArrival from "../components/common/LatestArrival.vue";
import CreateAccount from "../views/CreateAccount.vue"
import AllTshirt from '../components/common/AllTshirt.vue';
import TrendingItems from '../components/common/TrendingItems.vue';
import AmazazaView from  '../components/common/AmazazaView.vue';
import SalesNow  from   '../components/common/SalesNow.vue';
import CreateSkipa from '../components/common/CreateSkipa.vue';
import ContactPage from '../components/common/ContactPage.vue';
import AboutUs from '../components/common/AboutUs.vue';
import TermsOfService from '../components/common/TermsOfService.vue';



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
  {path: '/AllTshirt', component: AllTshirt},
  {path: '/TrendingItems', component: TrendingItems},
  {path: '/AmazazaView', component: AmazazaView},
  {path: '/SalesNow', component: SalesNow},
  {path: '/CreateSkipa', component: CreateSkipa},
  {path: '/ContactPage', component: ContactPage},
  {path: '/AboutUs', component: AboutUs},
  {path: '/TermsOfService', component: TermsOfService}
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;