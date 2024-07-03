import style from './css/Footer.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"

export const Footer = () => {
    return (
        <footer className={style.footer} id='contato' >
            <ul>
                <li>
                    <h2>
                        Meu WhatsApp:
                    </h2>
                    <h2>
                        (21) 9 9906-4502
                    </h2>
                </li>
            
                <li>
                    <h2>Meu E-Mail:</h2>
                    <h2>
                        contatowalace.dev@gmail.com
                    </h2>
                </li>
            </ul>
            
            <ul>
                <li>
                <a href="https://github.com/WalaceRamosdev" target="blank">
                        <FaGithub size={40}/>
                    </a>
                </li>
            
                <li>
                <a href="https://www.linkedin.com/in/walace-ramos-dev/" target="blank">
                        <FaLinkedin size={40}/>
                    </a>
                </li>
            
                <li>
                <a href="https://www.instagram.com/walacedev.contato/" target="blank">
                        <FaInstagram size={40}/>
                    </a>
                </li>
            </ul>
        </footer>
    )
}