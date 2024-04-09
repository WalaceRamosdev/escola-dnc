import styles from './Cabecalho.module.css'

function Cabecalho(){
    return(
    <div className={styles.cabecalho}>
            <ul>
                <li>Projetos</li>
                <li>Tecnologias</li>
                <li>Sobre Mim</li>
            </ul>
    </div>    
    )
}

export default Cabecalho