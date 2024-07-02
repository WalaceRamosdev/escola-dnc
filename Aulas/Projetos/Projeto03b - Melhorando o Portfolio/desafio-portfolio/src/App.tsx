
//import { useState } from 'react'
import { Header } from './sections/Header'
import { Presentation } from './sections/Presentation'
import { Projects } from './sections/Projects'
import { AboutMe } from './sections/AboutMe'

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
