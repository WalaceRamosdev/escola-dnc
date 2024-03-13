import styles from './Navbar.module.css'

function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
                <li>Apresentação</li>
                <li>Habilidades</li>
                <li>Porjetos</li>
            </ul>
            <ul>
                <li>Instagram</li>
                <li>GitHub</li>
                <li>LinkedIn</li>
            </ul>
        </div>
    )
}

export default Navbar