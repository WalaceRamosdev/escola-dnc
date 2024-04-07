import styles from './Projects.module.css'
import ButtonB from '../elementos/ButtonB'
import Card from '../elementos/Card'
import lpdnc from '../../image/projects/lpdnc.svg'
import minhaapi from '../../image/projects/minhaapi.svg'

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
                img={minhaapi}

                title=" API Busca de Endereços e Previsão do Tempo"

                tech="JavaScript, HTML, CSS, Bootstrap"

                description="Criação de uma página com requisição de API para busca de CEP e de previsão do tempo mediante a solicitação de latitude e longitude" 

                repo="https://github.com/WalaceRamosdev/consumo-api"

                site="https://consumo-api-two.vercel.app/"
            />
            

            <ButtonB text='Ver repositório completo' link='https://github.com/WalaceRamosdev?tab=repositories'/>
        </div>
    )
}

export default Projects