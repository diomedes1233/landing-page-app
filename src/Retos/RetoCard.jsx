import styles from './RetoCard.module.css'

export function RetoCard({ reto }) {
  const imageUrl = reto.image

  return (
    <a href={reto.link}>
      <li className={styles.retoCard}>
        <img
          width={230}
          height={230}
          className={styles.retoImage}
          src={imageUrl}
          alt={reto.name}
        />
        <div>{reto.name}</div>
      </li>
    </a>
  )
}
