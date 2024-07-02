import style from '../sections/AboutMe.module.css'

export const AboutMe = ({text, lineLeft, LineRight, centerBall}: {[key: string]: any}) => {

    return (   
        <> 

        <h2>Sobre mim</h2>

        <div className={style.tl}>

            <div className={lineLeft}></div>
            <div className={centerBall}></div>
            <div className={LineRight}></div>

        </div>

        <p>{text}</p>

        </>
    )
}