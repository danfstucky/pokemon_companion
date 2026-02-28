import { create } from 'zustand';
import salmonRedPokedex from '../data/pokedex';

export const usePokemonStore = create((set) => ({
  showDetail: false,
  pokemonEntryId: 0,
  pokemonEncounter: null,
  displayedPokedexEntries: salmonRedPokedex,

  closeDetails: () => set({ showDetail: false }),
  showDetails: (id) => set({ showDetail: true, pokemonEntryId: id }),
  showEncounterDetails: (payload) => set({ showDetail: true, pokemonEntryId: payload.id, pokemonEncounter: payload }),
  updateSearchResults: (results) => set({ displayedPokedexEntries: results }),
}));
