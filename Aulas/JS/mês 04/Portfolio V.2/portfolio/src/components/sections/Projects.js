import styles from './Projects.module.css'
import ButtonB from '../elements/ButtonB'

function Projects () {
    return (
        <div className={StyleSheet.project} id="projects">
            <h1>Projetos</h1>
            <p>Cards</p>
            <ButtonB text='Acesssar Repositório' link='https://github.com/WalaceRamosdev?tab=repositories' target="_blank" />
        </div>
    )
}

export default Projects