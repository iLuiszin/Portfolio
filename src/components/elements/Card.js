import { useState } from 'react'

import styles from './Card.module.css'
import ButtonB from './ButtonB'

function Card({ img, title, technologies, desc, repo, site }) {
  const [isVisible, setIsVisible] = useState(false)

  function changeVisibility() {
    setIsVisible(!isVisible)
  }

  return (
    <div onMouseLeave={changeVisibility} className={styles.card}>
      <a href={site} onMouseEnter={changeVisibility}>
        <img src={img} alt='Imagem do Projeto' />
      </a>
      {isVisible && (
        <section>
          <h3>{title}</h3>
          <p>
            <strong>Tecnologia: </strong>
            {technologies}
          </p>
          <p>{desc}</p>
          <ButtonB text='Acesse o repositório' link={repo} />
        </section>
      )}
    </div>
  )
}

export default Card
