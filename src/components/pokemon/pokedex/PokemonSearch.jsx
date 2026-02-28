import { useState } from 'react'
import { usePokemonStore } from '../../../stores/pokemon'
import pokemonService from '../../../services/pokemonService'
import styles from './PokemonSearch.module.scss'

export default function PokemonSearch() {
  const [searchValue, setSearchValue] = useState('')
  const updateSearchResults = usePokemonStore((s) => s.updateSearchResults)

  function filterPokedex(e) {
    setSearchValue(e.target.value)
    updateSearchResults(pokemonService.searchPokedex(e.target.value))
  }

  return (
    <div className={styles.searchbar}>
      <form>
        <input
          type="text"
          value={searchValue}
          onChange={filterPokedex}
          placeholder="Search Pokemon Name"
        />
      </form>
      <i className="fas fa-search" />
    </div>
  )
}
