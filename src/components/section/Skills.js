import styles from './Skills.module.css'
import js from '../../images/skills/js.svg'
import html from '../../images/skills/html.svg'
import java from '../../images/skills/java.svg'
import css from '../../images/skills/css.svg'
import react from '../../images/skills/react.svg'
import ts from '../../images/skills/ts.svg'

function Skills() {
  return (
    <div className={styles.skills} id='skills'>
      <h1>Habilidades</h1>
      <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
      <div className={styles.images}>
        <img src={js} alt='JavaScript' />
        <img src={html} alt='HTML' />
        <img src={java} alt='Java' />
        <img src={css} alt='CSS' />
        <img src={react} alt='React' />
        <img src={ts} alt='TypeScript' />
      </div>
    </div>
  )
}

export default Skills
