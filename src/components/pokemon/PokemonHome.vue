<template>
  <div class="container">
    <PokemonTabs></PokemonTabs>
    <Pokedex></Pokedex>
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
