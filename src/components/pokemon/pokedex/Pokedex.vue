<template>
  <div class="pokedex-container">
    <h1>Salmon Red Pokedex</h1>
    <PokemonSearch />
    <PokemonList />
    <PokemonDetail
      v-if="pokemonStore.showPokemonDetails"
      :pokemon-id="pokemonStore.pokemonId"
    />
  </div>
</template>

<script setup>
import { usePokemonStore } from "../../../stores/pokemon";
import PokemonSearch from "./PokemonSearch.vue";
import PokemonList from "./PokemonList.vue";
import PokemonDetail from "./../pokemon_details/PokemonDetail.vue";

const pokemonStore = usePokemonStore();
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Acme");
.pokedex-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
h1 {
  color: #efefef;
}
</style>
