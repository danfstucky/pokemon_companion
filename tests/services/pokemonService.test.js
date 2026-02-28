import pokemonService from '../../src/services/pokemonService';
import salmonRedPokedex from '../../src/data/pokedex';

describe('pokemonService', () => {
  describe('hasPokemonId', () => {
    it('returns true for a valid pokemon id', () => {
      expect(pokemonService.hasPokemonId(1)).toBe(true);
    });

    it('returns false for an id that does not exist', () => {
      expect(pokemonService.hasPokemonId(9999)).toBe(false);
    });

    it('returns false for id 0', () => {
      expect(pokemonService.hasPokemonId(0)).toBe(false);
    });
  });

  describe('hasPokemonName', () => {
    it('returns true for a valid pokemon name', () => {
      expect(pokemonService.hasPokemonName('bulbasaur')).toBe(true);
    });

    it('returns false for a name that does not exist', () => {
      expect(pokemonService.hasPokemonName('notapokemon')).toBe(false);
    });

    it('is case-sensitive (names are stored lowercase)', () => {
      expect(pokemonService.hasPokemonName('Bulbasaur')).toBe(false);
    });
  });

  describe('searchPokedex', () => {
    it('returns the full pokedex for an empty string', () => {
      expect(pokemonService.searchPokedex('')).toEqual(salmonRedPokedex);
    });

    it('returns the full pokedex for an empty string', () => {
      expect(pokemonService.searchPokedex('')).toHaveLength(salmonRedPokedex.length);
    });

    it('filters by name prefix case-insensitively', () => {
      const results = pokemonService.searchPokedex('Bulb');
      expect(results).toEqual(expect.arrayContaining([{ name: 'bulbasaur', id: 1 }]));
      results.forEach((p) => expect(p.name.startsWith('bulb')).toBe(true));
    });

    it('returns multiple matches for a shared prefix', () => {
      const results = pokemonService.searchPokedex('char');
      expect(results.length).toBeGreaterThan(1);
      results.forEach((p) => expect(p.name.startsWith('char')).toBe(true));
    });

    it('returns an empty array when no pokemon match', () => {
      expect(pokemonService.searchPokedex('zzznomatch')).toEqual([]);
    });
  });
});
