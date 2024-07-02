import style from './Projects.module.css'
import { Card } from '../components/cards/Card'
import ccxp from '../images/ccxp.svg'
import previsao from '../images/previsao.svg'

export const Projects = () => {
    return (
        <>
                <h1>Projetos</h1>
            <div className={ style.projects }>

                            <Card
                                image = { ccxp }
                                title = { 'Projeto CCXP' }
                                description={ 'Projeto idealizado para o grande evento da CCXP que possui um contador indicado uma contagem regressiva para o evento desde o dia atual' }
                                link={"https://github.com/WalaceRamosdev/ccxp-arlequina"}
                            />
                        
                
                    <Card
                        image = { previsao }
                        title = { 'Previsão do Tempo' }
                        description={ 'Projeto criado com a finalidade de implementar uma api meteorológica e uma api de busca de cep, onde ambas retornam os valores em forma de dados para o usuário' }
                        link={"https://consumo-api-two.vercel.app/"}
                        
                    />
            </div>
        </>
    )
}