import './App.css'
import Experience from './component/experience'
import Intro from './component/intro'

import Skills from './component/skills'
import Projects from './component/projects'
import ContactUs from './component/contact'
import Navbar from './component/navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Intro />

      <Skills />
      <Experience />
      <Projects />
      <ContactUs />
    </div>
  )
}

export default App
