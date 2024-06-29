import style from './Card.module.css'
import previsao from '../../images/projects/previsao.svg'
import ButtonB from './ButtonB'

function Card () {
    return (
        <div className={style.card}>
            <img src={previsao}/>
            
            <div>
                <h3></h3>
                <p></p>
                <p></p>
                <ButtonB text={'Acesse o repositório'}/>
            </div>
        </div>
    )
}

export default Card