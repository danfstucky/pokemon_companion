import salmonRedPokedex from '../data/pokedex';

const salmonRedMixin = {
  methods: {
    hasPokemonId(id) {
      return !!salmonRedPokedex.find(pokemon => pokemon.id === id);
    },
    hasPokemonName(name) {
      return !!salmonRedPokedex.find(pokemon => pokemon.name === name);
    },
  },
};

export default salmonRedMixin;
