import { FaLinkedin, FaGithub } from "react-icons/fa"
import style from './css/Header.module.css'
import Nav from 'react-bootstrap/Nav'

export const Header = () => {
    return(
        <header className={ style.header }>

            <ul>
                <li>
                    <Nav.Link href="#projects"> 
                        Projetos
                    </Nav.Link>
                </li>

                <li>
                    <Nav.Link href="#timeline">
                        Timeline
                    </Nav.Link>
                </li>

                <li>
                    
                        <a href="#contato">Fale Comigo</a>
                    
                </li>

            </ul>

            <ul className={style.icons}>

                <li>
                    <a href="https://github.com/WalaceRamosdev" target="blank">
                        <FaGithub size={30}/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/walace-ramos-dev/" target="blank">
                        <FaLinkedin size={30}/>
                    </a>
                </li>
            </ul>

        </header>
    )
}