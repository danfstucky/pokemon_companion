import salmonRedPokedex from '../data/pokedex';

const hasPokemonId = (id) => {
  return !!salmonRedPokedex.find((pokemon) => pokemon.id === id);
};

const hasPokemonName = (name) => {
  return !!salmonRedPokedex.find((pokemon) => pokemon.name === name);
};

const searchPokedex = (searchValue) => {
  if (searchValue === '') {
    return salmonRedPokedex;
  } else {
    return salmonRedPokedex.filter((pokemon) => {
      return pokemon.name.startsWith(searchValue.toLowerCase());
    });
  }
};

export default {
  hasPokemonId,
  hasPokemonName,
  searchPokedex,
};
