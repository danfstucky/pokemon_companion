import { defineStore } from "pinia";
import salmonRedPokedex from "../data/pokedex";

export const usePokemonStore = defineStore("pokemon", {
  // a function that returns a fresh state
  state: () => ({
    showDetail: false,
    pokemonEntryId: 0,
    pokemonEncounter: null,
    displayedPokedexEntries: salmonRedPokedex,
  }),

  // optional getters
  getters: {
    showPokemonDetails: (state) => state.showDetail,
    pokemonId: (state) => state.pokemonEntryId,
    wildPokemonEncounter: (state) => state.pokemonEncounter,
    pokedexEntries: (state) => state.displayedPokedexEntries,
  },

  // optional actions
  actions: {
    closeDetails() {
      this.showDetail = false;
    },
    showDetails(payload) {
      this.showDetail = true;
      this.pokemonEntryId = payload;
    },
    showEncounterDetails(payload) {
      this.showDetail = true;
      this.pokemonEntryId = payload.id;
      this.pokemonEncounter = payload;
    },
    updateSearchResults(searchResults) {
      this.displayedPokedexEntries = searchResults;
    },
  },
});
