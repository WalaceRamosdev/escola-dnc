import styles from './Projects.module.css'
import ButtonB from '../elementos/ButtonB'
import Card from '../elementos/Card'

function Projects(){
    return(
        <div className={styles.projects} id='Projects'>
            <h1>
                Projetos
            </h1>
            
            <Card/>

            <ButtonB text='Ver repositório completo' link='https://github.com/WalaceRamosdev?tab=repositories'/>
        </div>
    )
}

export default Projects