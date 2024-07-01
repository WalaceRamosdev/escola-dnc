import style from './Projects.module.css'
import { Card } from '../components/cards/Card'

export const Projects = () => {
    return (
        <div className={style.projects}>
            <h1>Principais Projetos</h1>
            <Card/>
        </div>
    )
}