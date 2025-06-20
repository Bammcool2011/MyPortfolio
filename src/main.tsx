import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import Home from './sections/home'
import Navbar from './components/navbar'
import About from './sections/about'
import Projects from './sections/project'
import Hobby from './sections/hobby'
import Activities from './sections/activities'
import Footer from './components/footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <div className='px-16 py-20'>
      <Home />
    </div>
    <div className='py-14 space-y-36'>
      <About />
      <Hobby />
      <Projects />
      <Activities />
    </div>
    <Footer />
  </StrictMode>,
)
