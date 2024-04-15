import { useState } from 'react'
import './App.css'
import Cabecalho from './componentes/cabecalho/Cabecalho'
import Apresentacao from './componentes/apresentacao/Apresentacao'
import Projetos from './componentes/Projetos/Projetos'

function App() {

    const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Cabecalho/>
        <Apresentacao/>
        <Projetos/>
      </div>
    </>
  )
}

export default App
