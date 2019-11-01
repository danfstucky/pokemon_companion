const state = {
  showDetail: false,
  pokemonUrl: '',
};

const getters = {
  showPokemonDetails: state => state.showDetail,
  pokemonUrl: state => state.pokemonUrl,
};

const mutations = {
  closeDetails: state => state.showDetail = false,
  showDetails: (state, payload) => {
    state.showDetail = true;
    state.pokemonUrl = payload;
  },
};

export default {
  state,
  getters,
  mutations,
};
