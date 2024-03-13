import styles from './Skills.module.css'
import js from '../../image/skills/js.svg'
import css from '../../image/skills/css.svg'
import html from '../../image/skills/html.svg'
import react from '../../image/skills/react.svg'
import ts from '../../image/skills/ts.svg'

function Skills(){
    return(
        <div className={styles.skill} id="Skills">
            <h1>
                Habilidades
            </h1>
            <p>
                Algumas das minhas principais habilidades e conhecimentos.
            </p>

            <div>
                <img src={js}/>
                <img src={html}/>
                <img src={css}/>
                <img src={react}/>
                <img src={ts}/>
            </div>
        </div>
    )
}

export default Skills