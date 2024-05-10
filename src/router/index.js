import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeFace from '../views/HomeFace.vue';
import ItemsDetails from '../components/ItemsDetails.vue';
import Cart from '../components/Cart';
import ClientLogin  from "../components/common/ClientLogin.vue";
import LatestArrival from "../components/common/LatestArrival.vue";
import CreateAccount from "../views/CreateAccount.vue"
import AllTshirt from '../components/common/AllTshirt.vue';
import TrendingItems from '../components/common/TrendingItems.vue';
import AmazazaView from  '../components/common/AmazazaView.vue';
import SalesNow  from   '../components/common/SalesNow.vue';
import ContactPage from '../components/common/ContactPage.vue';
import AboutUs from '../components/common/AboutUs.vue';
import TermsOfService from '../components/common/TermsOfService.vue';
import CheckOut from '../components/common/CheckOut.vue';
import RequestTshirt from '../components/common/RequestTshirt.vue';



Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomeFace',
    component: HomeFace
  },
  { path: '/Items-details', name: 'Items-details', component: ItemsDetails },
  { path: '/cart', component: Cart },
  { path: '/LatestArrivals', component: LatestArrival },
  {path: '/ClientLogin', component: ClientLogin},
  {path: '/CreateAccount', component: CreateAccount},
  {path: '/AllTshirt', component: AllTshirt},
  {path: '/TrendingItems', component: TrendingItems},
  {path: '/AmazazaView', component: AmazazaView},
  {path: '/SalesNow', component: SalesNow},
  {path: '/ContactPage', component: ContactPage},
  {path: '/AboutUs', component: AboutUs},
  {path: '/TermsOfService', component: TermsOfService},
  {path: '/RequestTshirt', component: RequestTshirt},
  {path: '/CheckOut', component: CheckOut,  meta: {
    requiresAuth: true
  }}
  
];




const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('token');
    if (token) {
      // User is authenticated, proceed to the route
      next();
    } else {
      // User is not authenticated, redirect to login
      next('/ClientLogin');
    }
  } else {
    // Non-protected route, allow access
    next();
  }
});

export default router;