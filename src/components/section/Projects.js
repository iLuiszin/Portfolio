import ButtonB from '../elements/ButtonB'
import Card from '../elements/Card'
import styles from './Projects.module.css'
import lpdnc from '../../images/projects/lpdnc.svg'

function Projects() {
  return (
    <div className={styles.projects} id='projects'>
      <h1>Projetos</h1>

      <Card
        img={lpdnc}
        title='LP - DNC'
        technologies='HTML, CSS e JavaScript'
        desc='Desenvolvimento de uma landing page para o lançamento da formação em tecnologia da DNC.'
        repo='https://github.com/iLuiszin/LandingPageArquiteturaDNC'
        site='https://projetodncarquitetura.netlify.app'
      />
      <Card img={lpdnc} />
      <Card img={lpdnc} />
      <ButtonB
        text='Acesse meu repositório'
        link='https://github.com/iLuiszin?tab=repositories'
      />
    </div>
  )
}

export default Projects
