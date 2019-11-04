const state = {
  showDetail: false,
  pokemonId: 0,
};

const getters = {
  showPokemonDetails: state => state.showDetail,
  pokemonId: state => state.pokemonId,
};

const mutations = {
  closeDetails: (state) => { state.showDetail = false; },
  showDetails: (state, payload) => {
    state.showDetail = true;
    state.pokemonId = payload;
  },
};

export default {
  state,
  getters,
  mutations,
};
