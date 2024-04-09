import { useState } from 'react'
import './App.css'
import Cabecalho from './Componentes/Cabecalho.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Cabecalho/>
      </div>
      
    </>
  )
}

export default App
