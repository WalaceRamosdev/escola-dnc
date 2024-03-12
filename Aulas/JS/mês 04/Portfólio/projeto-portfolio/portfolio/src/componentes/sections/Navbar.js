import styles from './Navbar.module.css'

function Navbar() {
    return(
        <div clasName={styles.navbar}>
            <ul>
                <li>Apresentação</li>
                <li>Habilidades</li>
                <li>Projetos</li>
            </ul>
            <ul>
                <li>Instagram</li>
                <li>GitHub</li>
                <li>LinkdIn</li>
            </ul>
        </div>
    )
}

export default Navbar