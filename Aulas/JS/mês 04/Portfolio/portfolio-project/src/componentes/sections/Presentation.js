import styles from './Presentation.module.css'

function Presentation(){
    return(
        <div className={styles.presentation} id="Presentation">
            <h4>
                <strong>
                    Seja bem-vindo ao meu Portfólio
                </strong>
            </h4>

            <h1>
                Olá, me chamo Walace Ramos!
            </h1>

            <p>
                Sou um apaixonado por tecnologia,<br/>
                e gostaria de compartilhar através<br/>
                do meu portfólio, um pouco sobre mim<br/>
                e meus mais recentes projetos<br/>
                pessoais em programação.<br/>
            </p>
        </div>
    )
}

export default Presentation