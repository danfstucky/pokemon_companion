import salmonRedPokedex from '../data/pokedex';

const salmonRedMixin = {
  methods: {
    hasPokemonId(id) {
      return !!salmonRedPokedex.find(pokemon => pokemon.id === id);
    },
    hasPokemonName(name) {
      return !!salmonRedPokedex.find(pokemon => pokemon.name === name);
    },
    searchPokedex(searchValue) {
      if (searchValue === '') {
        return salmonRedPokedex;
      } else {
        return salmonRedPokedex.filter((pokemon) => {
          return pokemon.name.startsWith(searchValue.toLowerCase());
        });
      }
    }
  },
};

export default salmonRedMixin;
