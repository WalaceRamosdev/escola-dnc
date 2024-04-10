import { useState } from 'react'
import './App.css'
import Cabecalho from './componentes/cabecalho/Cabecalho'
import Apresentacao from './componentes/apresentacao/Apresentacao'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Cabecalho/>
        <Apresentacao/>
      </div>
    </>
  )
}

export default App
