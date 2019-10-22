<template>
  <div class="pokemon-container">
    <PokemonTabs></PokemonTabs>
    <router-view></router-view>
  </div>
</template>

<script>
import PokemonTabs from './PokemonTabs';
import Pokedex from './pokedex/Pokedex';

export default {
  components: {
    PokemonTabs,
    Pokedex,
  },
};

</script>

<style lang="less" scoped>
  @import (css) url('https://fonts.googleapis.com/css?family=Acme');

  .pokemon-container {
    padding: 10px;
    width: calc(100%);
    min-height: calc(100vh);
    background: radial-gradient(#156F99, #0A2E50);
    font-family: 'Acme', arial;
  }
</style>
