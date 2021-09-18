import { RetoCard } from './RetoCard'
import retos from './retos'
import styles from './RetosGrid.module.css'

export function RetosGrid() {
  return (
    <ul className={styles.retosGrid}>
      {retos.map((reto) => (
        <RetoCard key={reto.id} reto={reto} />
      ))}
    </ul>
  )
}
