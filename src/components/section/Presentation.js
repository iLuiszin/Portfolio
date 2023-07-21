import ButtonA from '../elements/ButtonA'
import styles from './Presentation.module.css'

function Presentation() {
  return (
    <div className={styles.presentation}>
      <h4>Bem-vindo ao meu Portfólio</h4>
      <h1>Olá, eu sou Luís Felipe!</h1>

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
