import { Outlet } from 'react-router-dom'
import TalonTabs from './TalonTabs'
import styles from './TalonHome.module.scss'

export default function TalonHome() {
  return (
    <div className={styles.talonContainer}>
      <TalonTabs />
      <Outlet />
    </div>
  )
}
