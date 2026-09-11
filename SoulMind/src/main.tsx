import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './globals.css'


import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Avatar from './pages/Avatar/index.tsx';
import Contato from './pages/Contato/index.tsx';
import Error from './pages/Error/index.tsx';
import Faq from './pages/Faq/index.tsx';
import Home from './pages/Home/index.tsx';
import Missoes from './pages/Missoes/index.tsx';
import DetalhesMissao from './pages/DetalhesMissao/index.tsx';
import Personalizar from './pages/Personalizar/index.tsx';
import Progresso from './pages/Progresso/index.tsx';
import QuemSomos from './pages/QuemSomos/index.tsx';
import Sobre from './pages/Sobre/index.tsx';
import Tour from './pages/Tour/index.tsx';

const router = createBrowserRouter([
   {path: "/", element: <App />, 
    errorElement: <Error />, children: [
      { path: "/", element: <Home /> },
      { path: "/tour", element: <Tour /> },
      { path: "/avatar", element: <Avatar /> },
      { path: "/contato", element: <Contato /> },
      { path: "/faq", element: <Faq /> },
      { path: "/missoes", element: <Missoes /> },
      { path: "/detalhes-missao/:id", element: <DetalhesMissao /> },
      { path: "/personalizar", element: <Personalizar /> },
      { path: "/progresso", element: <Progresso /> },
      { path: "/quem-somos", element: <QuemSomos /> },
      { path: "/sobre", element: <Sobre /> } ,
  ]
}]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

