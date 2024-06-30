import { useState } from 'react'
import './App.css'
import Navbar from './components/sections/Navbar'
import AboutMe from './components/sections/AboutMe'
import Presentation from './components/sections/Presentation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Presentation/>
      <Projects/>
      <AboutMe/>
    </>
  )
}

export default App
