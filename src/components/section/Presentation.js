import ButtonA from '../elements/ButtonA'
import styles from './Presentation.module.css'

import { useState, useEffect } from 'react'

function Presentation() {
  const [text, setText] = useState('')
  const toRotate = ['Luís Felipe!', 'Desenvolvedor Full-Stack!']
  const [loop, setLoop] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const period = 100
  const [delta, setDelta] = useState(100)

  const toType = () => {
    let i = loop % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setDelta(period)
      setLoop(loop + 1)
    }
  }

  useEffect(() => {
    let time = setInterval(() => {
      toType()
    }, delta)

    return () => {
      clearInterval(time)
    }
  }, [text, delta])

  return (
    <div className={styles.presentation}>
      <h4>Bem-vindo ao meu Portfólio</h4>
      <h1>Olá, eu sou {text}</h1>

      <p>
        Sou um apaixonado por tecnologia e soluções inovadoras. <br />
        Como Desenvolvedor Full-Stack, eu tenho o compromisso de resolver
        problemas <br />
        complexos e trazer resultados excepcionais para os negócios.
        <br />
        Meus projetos já geraram milhões de reais em receita anual
        <br />
        estou sempre em busca de novos desafios para superar.
      </p>

      <ButtonA
        text='Conecte-se Comigo!'
        link='https://www.linkedin.com/in/luisfdeveloper/'
      />
    </div>
  )
}

export default Presentation
