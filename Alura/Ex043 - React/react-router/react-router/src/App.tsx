// import s from './App.module.scss';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inicio } from "./pages/Inicio/Inicio";
import { SobreMim } from "./pages/Sobre-Mim/SobreMim";
import { Menu } from "./components/Menu/Menu";
import { Rodape } from "./components/Rodape/Rodape";
import { PaginaPadrao } from "./components/PaginaPadrao/PaginaPadrao";
import { Post } from "./pages/Post/Post";
import { NotFound } from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-mim" element={ <SobreMim/> } />
          <Route path="/posts/:id" element={ <Post/> } />
        </Route>
        <Route path="*" element={ <NotFound/> } />
      </Routes>
      <Rodape/>
    </BrowserRouter>
  );
}

export default App;
