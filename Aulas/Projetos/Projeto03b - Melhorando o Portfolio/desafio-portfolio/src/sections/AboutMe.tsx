import style from '../sections/AboutMe.module.css'

export const AboutMe = ({text, lineLeft, LineRight, centerBall}: {[key: string]: any}) => {

    return (   
        <> 

        <h2>Sobre mim</h2>

        <div className={style.tl}>

            <div className={lineLeft ? style.line : style.lineNone}></div>
            <div className={centerBall ? style.ball : style.ballNone}></div>
            <div className={LineRight ? style.line : style.lineNone}></div>

        </div>

        <p>{text}</p>

        </>
    )
}