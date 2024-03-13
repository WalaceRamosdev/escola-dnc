import styles from './Projects.module.css'
import ButtonB from '../elementos/ButtonB'
import Card from '../elementos/Card'
import lpdnc from '../../image/projects/lpdnc.svg'

function Projects(){
    return(
        <div className={styles.projects} id='Projects'>
            <h1>
                Projetos
            </h1>
            <Card
                img={lpdnc}

                title=" LP - DNC"

                tech="HTML, CSS e JS"

                description="Desenvolvimento de uma landing page para lançamento da formação em tecnologia." 

                repo="https://github.com/WalaceRamosdev/landing-page"

                site="https://lpdncprojeto01.netlify.app/"
            />
            
            <Card/>
            

            <ButtonB text='Ver repositório completo' link='https://github.com/WalaceRamosdev?tab=repositories'/>
        </div>
    )
}

export default Projects