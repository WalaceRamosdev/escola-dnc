import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"

export const Footer = () => {
    return (
        <footer>
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
                    <FaGithub size={40}/>
                </li>

                <li>
                    <FaLinkedin size={40}/>
                </li>

                <li>
                    <FaInstagram size={40}/>
                </li>
            </ul>
        </footer>
    )
}