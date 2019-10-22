<template>
  <div>
    <PokemonHome></PokemonHome> <!-- Direct to PokemonHome for now. Later make this dynamic -->
  </div>
</template>

<script>
import PokemonHome from './pokemon/PokemonHome';

export default {
  components: {
    PokemonHome,
  },
};
</script>
