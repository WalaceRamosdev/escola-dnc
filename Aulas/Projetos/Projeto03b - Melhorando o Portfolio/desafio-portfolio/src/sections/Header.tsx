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
                    
                        <a href="#projects">Fale Comigo</a>
                    
                </li>

            </ul>

            <ul className={style.icons}>

                <li>
                    <FaGithub size={30}/>
                </li>
                <li>
                    <FaLinkedin size={30}/>
                </li>
            </ul>

        </header>
    )
}