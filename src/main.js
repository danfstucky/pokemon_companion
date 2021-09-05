import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App';
import router from './router';
import store from './store/store';

const app = createApp(App);

app.use(store);
app.use(router);
app.mount('#app');
