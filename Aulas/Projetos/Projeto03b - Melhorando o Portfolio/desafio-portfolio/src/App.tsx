
//import { useState } from 'react'
import { Header } from './sections/Header'
import { Presentation } from './sections/Presentation'
import { Projects } from './sections/Projects'
import { TimeLine } from './sections/TimeLine'
import { Footer } from './sections/Footer'



function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Presentation/>
      <Projects/>
      <TimeLine/>
      <Footer/>
    </>
  )
}

export default App
