// import s from './App.module.scss';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inicio } from "./pages/Inicio/Inicio";
import { SobreMim } from "./pages/Sobre-Mim/SobreMim";
import { Menu } from "./components/Menu/Menu";

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre-mim" element={ <SobreMim/> } />
        <Route path="*" element={ <h1>Página não encontrada</h1> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
