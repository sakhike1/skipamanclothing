import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store/store';
import './assets/tailwind.css';
import Axios from 'axios';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';






Vue.config.productionTip = false;

// Set up Axios with base URL for your Express.js backend
const axiosInstance = Axios.create({
  baseURL: 'http://localhost:YOUR_PORT_NUMBER/api/v1', // Change this to your backend URL
});

// Set token if available in local storage
const token = localStorage.getItem('token');
if (token) {
  axiosInstance.defaults.headers.common['Authorization'] = token;
}

// Inject axios instance into Vue prototype
Vue.prototype.$http = axiosInstance;

Vue.use(VueSweetalert2); 


new Vue({
  
  router,
  store,
  render: h => h(App)
}).$mount('#app');
