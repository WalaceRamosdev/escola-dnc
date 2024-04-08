import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const carac = useMemo(()=>{
    console.log('Exec')
    return text.length
  },[text.length])

  return (
    <>
      <div className="card">
        <p>
          Insira seu nome:
        </p>

        <input value={name} onChange={e => setName(e.target.value)}/>

        <p>
          Insira o texto:
        </p>  

        <input value={text} onChange={e => setText(e.target.value)}/>

        <div>
          <p>Nome: {name}</p>
          <p>Texto: {text}</p>
          <p>Número de Caracteres: {carac}</p>
        </div>
      </div>
      
    </>
  )
}

export default App
