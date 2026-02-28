import { useState, useEffect } from 'react'
import { usePokemonStore } from '../../../stores/pokemon'
import PokemonMoves from './PokemonMoves'
import StatsChart from './StatsChart'
import styles from './PokemonDetail.module.scss'

const imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const basePokemonUrl = 'https://pokeapi.co/api/v2/pokemon/'

export default function PokemonDetail({ pokemonId, isWildEncounter = false }) {
  const pokemonEncounter = usePokemonStore((s) => s.pokemonEncounter)
  const closeDetails = usePokemonStore((s) => s.closeDetails)

  const [show, setShow] = useState(false)
  const [pokemon, setPokemon] = useState({})
  const [foundPokemon, setFoundPokemon] = useState(false)
  const [showMoves, setShowMoves] = useState(false)
  const [movesVisible, setMovesVisible] = useState(false)
  const [moves, setMoves] = useState([])

  useEffect(() => {
    setShow(false)
    setPokemon({})
    setFoundPokemon(false)
    setShowMoves(false)
    setMovesVisible(false)
    setMoves([])

    const req = new Request(`${basePokemonUrl}${pokemonId}`)
    fetch(req)
      .then((resp) => {
        if (resp.status === 200) {
          setFoundPokemon(true)
          return resp.json()
        }
        setFoundPokemon(false)
        return { id: 0, name: 'Unknown' }
      })
      .then((data) => {
        setPokemon(data)
        setShow(true)
      })
      .catch(() => {})
  }, [pokemonId])

  function handleSlideAnimationEnd() {
    if (!showMoves) {
      setMovesVisible(false)
    }
  }

  function handleContainerClick(e) {
    if (e.target === e.currentTarget) {
      closeDetails()
    }
  }

  function handleToggleMoves() {
    const next = !showMoves
    setShowMoves(next)
    if (!next) return

    setMovesVisible(true)
    const salmonRedMoves = []
    for (const moveData of pokemon.moves) {
      const groupDetails = moveData.version_group_details.find(
        (details) => details.version_group.name === 'black-2-white-2'
      )
      if (groupDetails && groupDetails.move_learn_method.name === 'level-up') {
        salmonRedMoves.push({
          name: moveData.move.name,
          level: groupDetails.level_learned_at,
        })
      }
    }
    setMoves(salmonRedMoves.sort((a, b) => (a.level > b.level ? 1 : -1)))
  }

  return (
    <div className={styles.detailContainer} onClick={handleContainerClick}>
      <div className={styles.detail} onClick={handleContainerClick}>
        {show ? (
          <div className={styles.detailView}>
            <i className={`close-modal-x fas fa-times ${styles.closeModalX}`} onClick={closeDetails} />
            {pokemon && (
              <div className={styles.image}>
                <img src={imageUrl + pokemon.id + '.png'} alt="" />
              </div>
            )}
            {pokemon && foundPokemon ? (
              <div className={styles.data}>
                <h2>{pokemon.name}</h2>
                {isWildEncounter ? (
                  <div className={styles.property}>
                    <div className={styles.left}>Encounter Level</div>
                    <div className={styles.right}>{pokemonEncounter && pokemonEncounter.level}</div>
                  </div>
                ) : (
                  <div className={styles.property} />
                )}
                <StatsChart statsData={pokemon.stats} />
                <div className={`${styles.types} ${styles.detailMajorRow}`}>
                  <h3>Types</h3>
                  <div className={styles.detailMajorRowValues}>
                    {pokemon.types && pokemon.types.map((value, index) => (
                      <div key={`value${index}`} className={`${styles.type} ${styles.pillContainer}`}>
                        {value.type.name}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`${styles.abilities} ${styles.detailMajorRow}`}>
                  <h3>Abilities</h3>
                  <div className={styles.detailMajorRowValues}>
                    {pokemon.abilities && pokemon.abilities.map((value, index) => (
                      <div key={`value${index}`} className={`${styles.ability} ${styles.pillContainer}`}>
                        {value.ability.name}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.detailMajorRow}>
                  <h3>Moves</h3>
                  <div
                    className={`${styles.pillContainer} ${styles.movesBtn}${showMoves ? ` ${styles.activeMoves}` : ''}`}
                    onClick={handleToggleMoves}
                  >
                    Show Moves
                    {!showMoves
                      ? <i className="fas fa-angle-double-right" />
                      : <i className="fas fa-angle-double-left" />
                    }
                  </div>
                </div>
              </div>
            ) : (
              <h2>Pokemon not found</h2>
            )}
            <button className={styles.closeDetail} onClick={closeDetails}>close</button>
          </div>
        ) : (
          <i className="fas fa-spinner fa-spin" />
        )}
        <div
          className={`${styles.slideWrapper}${showMoves ? ` ${styles.slideEnterActive}` : movesVisible ? ` ${styles.slideLeaveActive}` : ''}`}
          onAnimationEnd={handleSlideAnimationEnd}
          onClick={handleContainerClick}
        >
          {movesVisible && <PokemonMoves moves={moves} />}
        </div>
      </div>
    </div>
  )
}
