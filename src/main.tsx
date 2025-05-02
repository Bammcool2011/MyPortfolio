import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import Home from './sections/home'
import Navbar from './components/navbar'
import About from './sections/about'
import Skills from './sections/skills'
import Projects from './sections/project'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
  </StrictMode>,
)
