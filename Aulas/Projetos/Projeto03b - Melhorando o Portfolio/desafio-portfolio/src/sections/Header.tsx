import style from './css/Header.module.css'

export const Header = () => {
    return(
        <header className={ style.header }>
            <ul className='dadList'>
                <li>Projetos</li>
                <li>Tecnologias</li>
                <li>Sobre mim</li>
            </ul>

            <ul>
                <li>Icon GitHub</li>
                <li>Icon LinkedIn</li>
            </ul>
        </header>
    )
}