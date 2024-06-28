import style from './ButtonB.module.css'

function ButtonB ({text}) {
    return (
        <div>
            <button className={style.btn}>
                {text}
            </button>
        </div>
    )
}

export default ButtonB