import { createStore } from 'vuex';
import pokemon from './modules/pokemon';

const store = createStore({
  modules: {
    pokemon,
  },
});

export default store;
