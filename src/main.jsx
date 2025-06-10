import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Receitas from './pages/Receitas.jsx'
import Contato from './pages/Contato.jsx'
import Sobre from './pages/Sobre.jsx'
import Cadastro from './pages/cadastro/Cadastro.jsx'
import Login from './pages/cadastro/Login.jsx'
import PaginaDeErro from './pages/erro/PaginaDeErro.jsx'
import Carbonara from './pages/Refeicoes/Carbonara.jsx'
import Lasanha from './pages/Refeicoes/Lasanha.jsx'
import Pizza from './pages/Refeicoes/Pizza.jsx'

import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PaginaDeErro />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'receitas',
        element: <Receitas />
      },
      {
        path: 'contato',
        element: <Contato />
      },
      {
        path: 'sobre',
        element: <Sobre />,
      },
      {
        path: 'cadastro',
        element: <Cadastro />,
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'carbonara',
        element: <Carbonara />
      },
      {
        path: 'lasanha',
        element: <Lasanha />
      },
      {
        path: 'pizza',
        element: <Pizza />
      },
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
