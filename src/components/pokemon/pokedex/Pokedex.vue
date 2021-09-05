<template>
  <div class="pokedex-container">
    <h1>Salmon Red Pokedex</h1>
    <PokemonSearch />
    <PokemonList />
    <PokemonDetail
      v-if="showPokemonDetails"
      :pokemon-id="pokemonId"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PokemonSearch from './PokemonSearch';
import PokemonList from './PokemonList';
import PokemonDetail from './../pokemon_details/PokemonDetail';

export default {
  components: {
    PokemonSearch,
    PokemonList,
    PokemonDetail,
  },
  data() {
    // Instead of making request to the sprites, can also download locally.
    // npm install --save github:PokeAPI/sprites
    return {
      imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
    };
  },
  computed: {
    ...mapGetters([
      'showPokemonDetails',
      'pokemonId',
    ]),
  },
};
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Acme');
  .pokedex-container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  h1 { color: #efefef; }
</style>
