import style from '../cards/Card.module.css'
import { Button } from '../buttons/Button'


export const Card = ({image, title, description, link }: {[key:string]:any}) => {

    return (
        <div className={style.card}>
        
            <section>

                <img src={image}/>
                <h3>{title}</h3>
                <p>{description}</p>

                <Button text='Clique aqui' link={link} />
                

            </section>
            
        
        </div>
    )
}