import styles from './Navbar.module.css'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import Nav from 'react-bootstrap/Nav'

function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <Nav.Link href='#presentation'>Apresentação</Nav.Link>
        </li>
        <li>
          <Nav.Link href='#skills'>Habilidades</Nav.Link>
        </li>
        <li>
          <Nav.Link href='#projects'>Projetos</Nav.Link>
        </li>
      </ul>

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
    </div>
  )
}

export default Navbar
