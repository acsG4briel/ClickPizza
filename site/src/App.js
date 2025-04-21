import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaInicial from "./pages/Cliente/PaginaInicial/PaginaInicial";
import PaginaMenu from "./pages/Cliente/PaginaMenu/PaginaMenu"
import PaginaCarrinho from "./pages/Cliente/PaginaCarrinho/PaginaCarrinho";
import PaginaPerfil from "./pages/Cliente/PaginaPerfil/PaginaPerfil";
import PaginaEntrega from "./pages/Cliente/PaginaEntrega/PaginaEntrega";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/menu" element={<PaginaMenu />} />
        <Route path="/carrinho" element={<PaginaCarrinho />} />
        <Route path="/perfil" element={<PaginaPerfil />} />
        <Route path="/entrega" element={<PaginaEntrega />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;