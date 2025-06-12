import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App.jsx'
import { Ejercicio01 } from './components/ejercicio01.jsx'
import { ContenedorBotones } from './contenedor.jsx'
import {Ejercicio003 } from './components/ejercicio003.jsx'
import { EjercicioSaludo } from './components/ejercicio004.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Ejercicio01></Ejercicio01>
    <ContenedorBotones/>
   <Ejercicio003 />
  <EjercicioSaludo />
    
  </StrictMode>,
)
