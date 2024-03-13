import styles from './Projects.module.css'
import ButtonB from '../elementos/ButtonB'
import Card from '../elementos/Card'
import lpdnc from '../../image/projects/lpdnc.svg'
import portfolio from '../../image/projects/portfolio.svg'

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
            
            <Card
                img={portfolio}

                title=" Portfólio"

                tech="JavaScript, React Icons, React-Bootstrap, React JS"

                description="Criação de um portfólio para apresentação de projetos pessoais e conhecimentos em linguagens de programação." 

                repo="https://github.com/WalaceRamosdev"

                site="https://github.com/WalaceRamosdev"
            />
            

            <ButtonB text='Ver repositório completo' link='https://github.com/WalaceRamosdev?tab=repositories'/>
        </div>
    )
}

export default Projects