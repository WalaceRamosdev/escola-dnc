import styles from './Projects.module.css'
import ButtonB from '../elements/ButtonB'
import Card from '../elements/Card'

function Projects () {
    return (
        <div className={styles.projects} id="projects">

            <h1>Projetos</h1>

            <Card/>

            <ButtonB text='Acesssar Repositório' link='https://github.com/WalaceRamosdev?tab=repositories' target="_blank" />

        </div>
    )
}

export default Projects