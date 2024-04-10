import '../cabecalho/Cabecalho.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Cabecalho (){
    return (
        <div className='header'>
            <ul>
                <li>Projetos</li>
                <li>Tecnologias</li>
                <li>Sobre mim</li>
            </ul>

            <div className='icons'>
                <ul>
                    <li>
                        <FaGithub/>
                    </li>
                    <li><FaLinkedin/></li>
                </ul>
            </div>

        </div>
    )
}

export default Cabecalho