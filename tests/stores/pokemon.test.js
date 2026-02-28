import { act } from 'react';
import { usePokemonStore } from '../../src/stores/pokemon';
import salmonRedPokedex from '../../src/data/pokedex';

const initialState = {
  showDetail: false,
  pokemonEntryId: 0,
  pokemonEncounter: null,
  displayedPokedexEntries: salmonRedPokedex,
};

beforeEach(() => {
  act(() => usePokemonStore.setState(initialState));
});

describe('usePokemonStore', () => {
  it('has the correct initial state', () => {
    const state = usePokemonStore.getState();
    expect(state.showDetail).toBe(false);
    expect(state.pokemonEntryId).toBe(0);
    expect(state.pokemonEncounter).toBeNull();
    expect(state.displayedPokedexEntries).toEqual(salmonRedPokedex);
  });

  describe('showDetails', () => {
    it('sets showDetail to true and stores the pokemon id', () => {
      act(() => usePokemonStore.getState().showDetails(42));
      const state = usePokemonStore.getState();
      expect(state.showDetail).toBe(true);
      expect(state.pokemonEntryId).toBe(42);
    });
  });

  describe('closeDetails', () => {
    it('sets showDetail to false', () => {
      act(() => {
        usePokemonStore.getState().showDetails(1);
        usePokemonStore.getState().closeDetails();
      });
      expect(usePokemonStore.getState().showDetail).toBe(false);
    });
  });

  describe('showEncounterDetails', () => {
    it('sets showDetail, pokemonEntryId, and pokemonEncounter from payload', () => {
      const payload = { id: 7, name: 'squirtle', level: '20-25' };
      act(() => usePokemonStore.getState().showEncounterDetails(payload));
      const state = usePokemonStore.getState();
      expect(state.showDetail).toBe(true);
      expect(state.pokemonEntryId).toBe(7);
      expect(state.pokemonEncounter).toEqual(payload);
    });
  });

  describe('updateSearchResults', () => {
    it('replaces displayedPokedexEntries with the given results', () => {
      const filtered = [{ name: 'bulbasaur', id: 1 }];
      act(() => usePokemonStore.getState().updateSearchResults(filtered));
      expect(usePokemonStore.getState().displayedPokedexEntries).toEqual(filtered);
    });

    it('accepts an empty array', () => {
      act(() => usePokemonStore.getState().updateSearchResults([]));
      expect(usePokemonStore.getState().displayedPokedexEntries).toEqual([]);
    });
  });
});
