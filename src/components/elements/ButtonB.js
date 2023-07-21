import styles from './ButtonB.module.css'

function ButtonB({ text, link }) {
  return (
    <section>
      <a href={link}>
        <button className={styles.btn}>{text}</button>
      </a>
    </section>
  )
}

export default ButtonB
