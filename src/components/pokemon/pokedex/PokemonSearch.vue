<template>
  <div class="searchbar">
    <form @input="filterPokedex">
      <input
        v-model="searchValue"
        type="text"
        placeholder="Search Pokemon Name"
      />
    </form>
    <i class="fas fa-search" />
  </div>
</template>

<script setup>
// Using Composition API here instead of Options API (note the "setup" in script)
import { ref } from "vue";
import { usePokemonStore } from "../../../stores/pokemon";
import pokemonService from "./../../../services/pokemonService";

const pokemonStore = usePokemonStore();
const searchValue = ref("");

function filterPokedex() {
  pokemonStore.updateSearchResults(
    pokemonService.searchPokedex(searchValue.value)
  );
}
</script>

<style lang="scss" scoped>
.searchbar {
  position: relative;
  width: 100%;
  max-width: 510px;
  padding-bottom: 20px;
  input {
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 10px 40px 10px 10px;
    width: calc(100% - 50px);
    font-size: 1rem;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  }
  i {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.25rem;
    color: rgb(8, 37, 65);
  }
}
</style>
