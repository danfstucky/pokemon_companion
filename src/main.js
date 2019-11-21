import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from 'vue';
import vuetify from './plugins/vuetify' // path to vuetify export
import App from './App';
import router from './router';
import store from './store/store';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App),
  router,
  store,
}).$mount('#app')
