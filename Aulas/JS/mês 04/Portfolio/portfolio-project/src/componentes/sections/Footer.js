import styles from './Footer.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer(){
    return(
        <div className={styles.footer}>
            <ul>
                <li>
                    <a href='https://www.instagram.com/walacedev.contato/' target='blank_'><FaInstagram size={30}/>
                    </a>
                </li>

                <li>
                    <a href='https://github.com/WalaceRamosdev' target='blank_'><FaGithub size={30}/>
                    </a>
                </li>

                <li>
                    <a href='https://www.linkedin.com/in/walace-ramos-dev/' target='blank_'><FaLinkedin size={30}/>
                    </a>
                </li>
            </ul>

            <p>contatowalace.dev@gmail.com</p>
            <p>Walace Ramos © 2024</p>
        </div>
    )
}

export default Footer