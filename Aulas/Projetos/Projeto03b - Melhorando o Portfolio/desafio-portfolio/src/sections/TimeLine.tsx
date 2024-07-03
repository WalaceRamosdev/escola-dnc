import { AboutMe } from './AboutMe'
import style from './css/TimeLine.module.css';

export const TimeLine = () => {
return (
            <section className={style.timeline} id='Timeline'>

                <h2 id='timeline'>Sobre mim</h2>

                <div>
                    <AboutMe
                        ano = 'Junho/2023'
                        lineLeft = {false}
                        ball = {true}
                        lineRight = {true}
                        texto = 'Iniciei meus estudos em programação através de vídeo-aulas pela internet e dei início aos estudos em algorítmos com o Professor "Gustavo Guanabara".'
                    />

                    <AboutMe
                        ano = 'Julho/2023'
                        lineLeft = {true}
                        ball = {true}
                        lineRight = {true}
                        texto = 'Dei inicio a faculdade de Análise e desenvolvimento de sistemas pela universidade Estácio de Sá, onde tenho a formatura prevista para o ano de 2025.'
                    />

                    <AboutMe

                        ano = 'Outubro/2023'
                        lineLeft = {true}
                        ball = {true}
                        lineRight = {true}
                        texto = 'Após ter obtido uma base sólida de lógica de programação, HTML5 e CSS3, dei inicio ao curso de desenvolvimento full-stack pela escola DNC.'
                    />

                    <AboutMe
                        ano = 'Março/2024'
                        lineLeft = {true}
                        ball = {true}
                        lineRight = {false}
                        texto = 'Já com alguns conhecimentos, iniciei minha jornada pela área de Freelancer produzindo inicialmente páginas estáticas e atualmente já consigo construir projetos com interações usando o JavaScript e interfaces mais atrativas através do React.'                        
                        
                    />

                </div>
            </section>
    )
}

