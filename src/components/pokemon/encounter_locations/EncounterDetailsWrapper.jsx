import EncounterDetails from './EncounterDetails'
import styles from './EncounterDetailsWrapper.module.scss'

export default function EncounterDetailsWrapper({ encounter }) {
  return (
    <div className={styles.terrainWrapper}>
      {encounter.encounters.length === 0 ? (
        <div className={`${styles.terrainBlock} ${styles.noResults}`}>
          There are no wild Pokemon in this area.
        </div>
      ) : (
        encounter.encounters.map((encounterLocation) => (
          <div key={encounterLocation.terrain} className={`row ${styles.terrainBlock}`}>
            <div
              className={`col-1 ${styles.terrainSidebar} ${styles[`terrain${encounterLocation.terrain.charAt(0).toUpperCase() + encounterLocation.terrain.slice(1).toLowerCase()}`]}`}
            >
              <span>{encounterLocation.terrain}</span>
            </div>
            <div className="col-11">
              <EncounterDetails encounterLocation={encounterLocation} />
            </div>
          </div>
        ))
      )}
    </div>
  )
}
