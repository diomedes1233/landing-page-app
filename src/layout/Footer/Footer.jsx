import style from './Footer.module.css'
import { FaGithub } from 'react-icons/fa'

export function Footer() {
  return (
    <div className={style.footer}>
      @Desarrollado Edwin Bernal.
      <a href={'https://github.com/diomedes1233'}>
        <div className={style.icon}>
          <FaGithub />
        </div>
      </a>
    </div>
  )
}
