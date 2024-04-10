import { useState } from 'react'
import './App.css'
import Cabecalho from './componentes/cabecalho/Cabecalho'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Cabecalho></Cabecalho>
      </div>
    </>
  )
}

export default App
