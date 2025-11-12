import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import App from './App.tsx'
import Video from './Video.tsx'
import Video2 from './Video2.tsx'
import Produtos from './Produtos.tsx'
import AppWithProvider from './AppWithProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Video /> */}
    {/* <Video2/> */}
    {/* <Produtos/> */}
    <AppWithProvider/>
  </StrictMode>,
)
