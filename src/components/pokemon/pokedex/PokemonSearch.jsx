import { useState, useEffect } from 'react';
import { usePokemonStore } from '../../../stores/pokemon';
import pokemonService from '../../../services/pokemonService';
import styles from './PokemonSearch.module.scss';

export default function PokemonSearch() {
  const [searchValue, setSearchValue] = useState('');
  const updateSearchResults = usePokemonStore((s) => s.updateSearchResults);

  // The results live in the global store but the search text is local, so clear the
  // filter when leaving the page; otherwise the list stays filtered under an empty box.
  useEffect(() => () => updateSearchResults(pokemonService.searchPokedex('')), [updateSearchResults]);

  function filterPokedex(e) {
    setSearchValue(e.target.value);
    updateSearchResults(pokemonService.searchPokedex(e.target.value));
  }

  return (
    <div className={styles.searchbar}>
      <form>
        <input
          type="text"
          value={searchValue}
          onChange={filterPokedex}
          placeholder="Search Pokemon Name"
          aria-label="Search Pokemon Name"
        />
      </form>
      <i className="fas fa-search" aria-hidden="true" />
    </div>
  );
}
