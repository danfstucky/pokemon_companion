import types from '../../data/types'
import akDfImg from '../../assets/images/pokemon/ak_df.png'
import styles from './TypeChart.module.scss'

function effectivenessMultiplier(type, compareType) {
  if (type.strengths.includes(compareType.name)) {
    return '2x'
  } else if (type.weaknesses.includes(compareType.name)) {
    return '0.5x'
  } else if (type.immunes.includes(compareType.name)) {
    return '0x'
  } else {
    return '1x'
  }
}

export default function TypeChart() {
  return (
    <div>
      <table className={styles.typeTable}>
        <thead>
          <tr>
            <td><img src={akDfImg} alt="attack/defense" /></td>
            {types.map((type) => (
              <td
                key={`top-${type.name}`}
                className={`${styles.typeHeader} ${styles.typeTopHeader} ${styles[type.name.toLowerCase()]}`}
              >
                {type.name}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {types.map((type) => (
            <tr key={`left-${type.name}`}>
              <td className={`${styles.typeHeader} ${styles.typeSideHeader} ${styles[type.name.toLowerCase()]}`}>
                {type.name}
              </td>
              {types.map((compareType) => {
                const multiplier = effectivenessMultiplier(type, compareType)
                const effectClass = `effective${multiplier.replace('.', '_')}`
                return (
                  <td
                    key={`${type.name}-${compareType.name}`}
                    className={`${styles.effectivenessMultiplier} ${styles[effectClass]}`}
                  >
                    {multiplier}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
