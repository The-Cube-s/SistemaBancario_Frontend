// Cosas de react por defecto
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Agregar funcionalidad de rutas, mensajes o cualquier cosa crucial va
import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'
import { routes } from './routes'
import { Toaster } from 'react-hot-toast'


export const Main = () => {
  const elementRoutes = useRoutes(routes)
  return (
    <>
    {elementRoutes}
    <Toaster position='bottom-right' reverseOrder={false}/>
    </>
    
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Main></Main>
    </BrowserRouter>
  </React.StrictMode>
)