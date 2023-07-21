import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
      <ul>
        <li>
          <a
            href='https://www.instagram.com/iluiszin/'
            target='_blank'
            rel='noreferrer'
          >
            <FaInstagram size={30} />
          </a>
        </li>
        <li>
          <a
            href='https://github.com/iLuiszin'
            target='_blank'
            rel='noreferrer'
          >
            <FaGithub size={30} />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/luisfdeveloper/'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin size={30} />
          </a>
        </li>
      </ul>
      <p>Oluis10@gmail.com</p>
      <p>Luís Felipe Matos Corrêa © 2023</p>
    </div>
  )
}

export default Footer
