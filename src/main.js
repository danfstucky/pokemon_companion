import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/store';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
