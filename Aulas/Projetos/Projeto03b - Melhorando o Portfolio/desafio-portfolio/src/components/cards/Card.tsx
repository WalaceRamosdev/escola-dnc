import style from '../cards/Card.module.css'
import ccxp from '../../images/ccxp.svg'
import { Button } from '../buttons/Button'

export const Card = () => {
    return (
        <div className={style.card}>

            <img src={ccxp}/>
            <h3>Projeto CCXP</h3>
            <Button/>

        </div>
    )
}