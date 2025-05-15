import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import Home from './sections/home'
import Navbar from './components/navbar'
import About from './sections/about'
import Projects from './sections/project'
import Hobby from './sections/hobby'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <div className='px-12 py-14'>
      <Home />
    </div>
    <div className='px-12 py-14 space-y-36'>
      <About />
      <Hobby />
      <Projects />
    </div>
  </StrictMode>,
)
