import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import PaginaErro from "./pages/PaginaErro";
import "./App.css";
import { CarrinhoContext, CarrinhoProvider } from "./contexts/CarrinhoContext";

function App() {

  const carrinhoContext = useContext(CarrinhoContext);
  
  return (
    <BrowserRouter>
      <CarrinhoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="*" element={<PaginaErro />} />
        </Routes>
      </CarrinhoProvider>
    </BrowserRouter>
  );
}

export default App;
