import styles from "./css/TimeLine.module.css";

export const AboutMe = ({ano, texto, lineLeft, ball,  lineRight}: {[key: string]: any}) => {
    
    return (
        <div>
            <h3>{ano}</h3>

            <div className={styles.time}>
                <div className={lineLeft ? styles.line :  styles.lineNone}></div>
                <div className={ball ? styles.ball : styles.ballNone}></div>
                <div className={lineRight ? styles.line : styles.lineNone}></div>
            </div>

            <p>{texto}</p>
        </div>
    )
}