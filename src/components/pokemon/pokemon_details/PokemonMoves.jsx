import styles from './PokemonMoves.module.scss'

export default function PokemonMoves({ moves = [] }) {
  return (
    <div className={`${styles.pokemonMoves} table-hover`}>
      <table className="table">
        <thead>
          <tr>
            <th colSpan="2">Moves</th>
          </tr>
        </thead>
        <tbody>
          {moves.map((move) => (
            <tr key={move.name}>
              <td>{move.name}</td>
              <td>lvl {move.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
