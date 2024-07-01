import style from '../cards/Card.module.css'
import ccxp from '../../images/ccxp.svg'

export const Card = () => {
    return (
        <div className={style.card}>

        <img src={ccxp}/>

        </div>
    )
}