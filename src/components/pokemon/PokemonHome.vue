<template>
  <div class="pokemon-container">
    <PokemonTabs></PokemonTabs>
    <router-view></router-view>
  </div>
</template>

<script>
import PokemonTabs from './PokemonTabs';

export default {
  components: {
    PokemonTabs,
  },
};

</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Acme');

  .pokemon-container {
    padding: 10px;
    min-height: calc(100vh);
    background: radial-gradient(#156F99, #0A2E50);
    font-family: 'Acme', arial;
  }
</style>
