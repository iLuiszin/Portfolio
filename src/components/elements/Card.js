import styles from './Card.module.css'
import ButtonB from './ButtonB'

function Card({ img, title, technologies, desc, repo, site }) {
  return (
    <div className={styles.card}>
      <a href={site}>
        <img src={img} alt='Imagem do Projeto' />
      </a>
      <div>
        <h3>{title}</h3>
        <p>
          <strong>Tecnologia: </strong>
          {technologies}
        </p>
        <p>{desc}</p>
        <ButtonB text='Acesse o repositório' link={repo} />
      </div>
    </div>
  )
}

export default Card
