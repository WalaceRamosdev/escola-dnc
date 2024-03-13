import styles from './Presentation.module.css'
import ButtonA from '../elementos/ButtonA'
import ButtonB from '../elementos/ButtonB'

function Presentation(){
    return(
        <div className={styles.presentation} id="Presentation">

            <h4>
                <strong>
                    Seja bem-vindo ao meu Portfólio
                </strong>
            </h4>

            <h1>
                Olá, sou Walace Ramos!
            </h1>

            <p>
                Sou um apaixonado por tecnologia,<br/>
                e gostaria de compartilhar através<br/>
                do meu portfólio, um pouco sobre mim,<br/>
                e meus mais recentes projetos<br/>
                pessoais em programação.<br/>
            </p>
            <ButtonA link='https://www.instagram.com/walacedev.contato/' text='Conecte-se comigo!!!'/>
        </div>
    )
}

export default Presentation