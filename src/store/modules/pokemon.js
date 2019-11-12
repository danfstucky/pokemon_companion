const state = {
  showDetail: false,
  pokemonId: 0,
  pokemonEncounter: null,
};

const getters = {
  showPokemonDetails: state => state.showDetail,
  pokemonId: state => state.pokemonId,
  wildPokemonEncounter: state => state.pokemonEncounter,
};

const mutations = {
  closeDetails: (state) => { state.showDetail = false; },
  showDetails: (state, payload) => {
    state.showDetail = true;
    state.pokemonId = payload;
  },
  showEncounterDetails: (state, payload) => {
    state.showDetail = true;
    state.pokemonId = payload.id;
    state.pokemonEncounter = payload;
  },
};

export default {
  state,
  getters,
  mutations,
};
