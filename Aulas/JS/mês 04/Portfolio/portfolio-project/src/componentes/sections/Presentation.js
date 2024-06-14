import styles from './Presentation.module.css'
import ButtonA from '../elementos/ButtonA'
import ButtonB from '../elementos/ButtonB'
import {useEffect, useState} from 'react'

function Presentation(){

    /* Aqui está todo o texto de apresentação em loops para ser exibido na tela inicial do portfolio, também temos as configurações de digitação e exclusão do texto*/

    const [text, setText] = useState('');
    const toRotate = ['Walace Ramos', 'Desenvolvedor full Cycle', 'Desenvolvedor ReactJS', 'Desenvolvedor TypeScript', 'Desenvolvedor React Native'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 300;
    const [delta, setDelta] = useState(100);

    /* Aqui abaixo está o timer ou relógio para a digitação do texto de apresentação*/

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}

    }, [text])

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)
        
        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } 
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1)
        }
    }

    return(
        <div className={styles.presentation} id="Presentation">

            <h4>
                <strong>
                    Seja bem-vindo ao meu Portfólio
                </strong>
            </h4>

            <h1>
                Olá, eu sou {text}
            </h1>

            <p>
                Sou um apaixonado por tecnologia,<br/>
                e gostaria de compartilhar através<br/>
                do meu portfólio, um pouco sobre mim,<br/>
                e meus mais recentes projetos<br/>
                pessoais em programação.<br/>
            </p>
            <ButtonA link='https://api.whatsapp.com/send?phone=+5521999064502&text=Ol%C3%A1%2C+Walace%21%0AGostaria+de+saber+mais+sobre+a+cria%C3%A7%C3%A3o+de+p%C3%A1ginas+web' text='Conecte-se comigo!!!'/>
        </div>
    )
}

export default Presentation