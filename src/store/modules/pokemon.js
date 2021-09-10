import salmonRedPokedex from '../../data/pokedex';

const state = {
  showDetail: false,
  pokemonId: 0,
  pokemonEncounter: null,
  pokedexEntries: salmonRedPokedex,
};

const getters = {
  showPokemonDetails: state => state.showDetail,
  pokemonId: state => state.pokemonId,
  wildPokemonEncounter: state => state.pokemonEncounter,
  pokedexEntries: state => state.pokedexEntries,
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
  updateSearchResults: (state, payload) => {
    state.pokedexEntries = payload;
  },
};

export default {
  state,
  getters,
  mutations,
};
