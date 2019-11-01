<template>
  <div class="pokedex-container">
    <h1>Salmon Red Pokedex</h1>
    <PokemonSearch />
    <PokemonList @setPokemonUrl="showDetails($event)" />
    <PokemonDetail
      v-if="showPokemonDetails"
      :pokemonUrl="pokemonUrl" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import PokemonSearch from './PokemonSearch';
import PokemonList from './PokemonList';
import PokemonDetail from './../PokemonDetail';

export default {
  data() {
    // Instead of making request to the sprites, can also download locally.
    // npm install --save github:PokeAPI/sprites
    return {
      imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
    };
  },
  components: {
    PokemonSearch,
    PokemonList,
    PokemonDetail,
  },
  computed: {
    ...mapGetters([
      'showPokemonDetails',
      'pokemonUrl',
    ]),
  },
  methods: {
    ...mapMutations([
      'showDetails',
    ]),
    setPokemonUrl(url) {
      debugger;
      const pokemonUrl = url;
      this.showDetails(pokemonUrl);
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
