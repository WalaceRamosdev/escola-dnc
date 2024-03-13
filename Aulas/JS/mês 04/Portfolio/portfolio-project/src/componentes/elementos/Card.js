import styles from './Card.module.css'
import lpdnc from '../../image/projects/lpdnc.svg'
import ButtonB from './ButtonB'

function Card() {
    return (
        <div className={styles.card}>
            <img src={lpdnc}/>
                <section>
                    <h3>
                        LP-DNC
                    </h3>
                    <p>
                        Tecnologia
                    </p>
                    <p>
                        Descrição
                    </p>
                    <ButtonB text='Ver respositório'/>
                </section>
        </div>
    )
}

export default Card