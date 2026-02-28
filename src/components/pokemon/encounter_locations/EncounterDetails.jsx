import { usePokemonStore } from '../../../stores/pokemon';
import styles from './EncounterDetails.module.scss';

const imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

export default function EncounterDetails({ encounterLocation }) {
  const showEncounterDetails = usePokemonStore((s) => s.showEncounterDetails);

  return (
    <div className={styles.list}>
      {encounterLocation.pokemon.map((pokemon, index) => (
        <article key={`poke${index}`} onClick={() => showEncounterDetails(pokemon)}>
          <h6 className={styles.pokedexNum}>{pokemon.id}</h6>
          <img src={imageUrl + pokemon.id + '.png'} width="96" height="96" alt="" />
          <h5>{pokemon.name}</h5>
        </article>
      ))}
    </div>
  );
}
