import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App';
import router from './router';
import store from './store/store';

// Vue.config.productionTip = false;

// const app = createApp({
//   // render: h => h(App)
// });
const app = createApp(App);

app.use(store);
app.use(router);
app.mount('#app');
