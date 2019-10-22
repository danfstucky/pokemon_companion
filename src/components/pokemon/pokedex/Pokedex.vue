<template>
  <div class="pokedex-container">
    <h1>Salmon Red Pokedex</h1>
    <PokemonSearch
      :apiUrl="apiUrl"
      @setPokemonUrl="setPokemonUrl" />
    <PokemonList
      :imageUrl="imageUrl"
      :apiUrl="apiUrl"
      @setPokemonUrl="setPokemonUrl" />
    <PokemonDetail
      v-if="showDetail"
      :pokemonUrl="pokemonUrl"
      :imageUrl="imageUrl"
      @closeDetail="closeDetail" />
  </div>
</template>

<script>
import PokemonSearch from './PokemonSearch';
import PokemonList from './PokemonList';
import PokemonDetail from './../PokemonDetail';

export default {
  data() {
    // Instead of making request to the sprites, can also download locally.
    // npm install --save github:PokeAPI/sprites
    return {
      imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
      apiUrl: 'https://pokeapi.co/api/v2/pokemon?limit=30',
      pokemonUrl: '',
      showDetail: false,
    };
  },
  components: {
    PokemonSearch,
    PokemonList,
    PokemonDetail,
  },
  methods: {
    setPokemonUrl(url) {
      this.pokemonUrl = url;
      this.showDetail = true;
    },
    closeDetail() {
      this.pokemonUrl = '';
      this.showDetail = false;
    },
  },
};
</script>

<style lang="less" scoped>
  @import (css) url('https://fonts.googleapis.com/css?family=Acme');
  .pokedex-container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  h1 { color: #efefef; }
</style>
