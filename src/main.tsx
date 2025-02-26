import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import Home from './sections/home'
import Navbar from './components/navbar'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Home />
  </StrictMode>,
)
