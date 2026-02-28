import { usePokemonStore } from '../../../stores/pokemon';
import styles from './PokemonList.module.scss';

const imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

export default function PokemonList() {
  const displayedPokedexEntries = usePokemonStore((s) => s.displayedPokedexEntries);
  const showDetails = usePokemonStore((s) => s.showDetails);

  return (
    <div>
      <div className={styles.list}>
        {displayedPokedexEntries.map((pokemon, index) => (
          <article key={`poke${index}`} onClick={() => showDetails(pokemon.id)}>
            <p className={styles.pokedexNum}>{pokemon.id}</p>
            <img src={`${imageUrl}${pokemon.id}.png`} width="96" height="96" alt="" />
            <h3>{pokemon.name}</h3>
          </article>
        ))}
      </div>
    </div>
  );
}
