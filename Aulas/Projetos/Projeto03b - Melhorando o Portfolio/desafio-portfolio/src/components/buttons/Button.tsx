import style from '../buttons/Button.module.css'

export const Button = ({text, link}: {[key:string]:any}) => {
    return (

        <div>

            <a href={link} target='_blank'>
                <button className={ style.button }>
                    {text}
                </button>
            </a>

        </div>
    )
}