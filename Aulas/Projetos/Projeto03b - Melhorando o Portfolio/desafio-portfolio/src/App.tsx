import './App.css'
//import { useState } from 'react'
import { Header } from './components/Header'
import { Presentation } from './components/Presentation'
import { Projects } from './components/Projects'
import { AboutMe } from './components/AboutMe'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Presentation/>
      <Projects/>
      <AboutMe/>
    </>
  )
}

export default App
