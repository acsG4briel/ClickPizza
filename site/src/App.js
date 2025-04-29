import { React, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaInicial from "./pages/Cliente/PaginaInicial/PaginaInicial";
import PaginaMenu from "./pages/Cliente/PaginaMenu/PaginaMenu"
import PaginaCarrinho from "./pages/Cliente/PaginaCarrinho/PaginaCarrinho";
import PaginaPerfil from "./pages/Cliente/PaginaPerfil/PaginaPerfil";
import PaginaEntrega from "./pages/Cliente/PaginaEntrega/PaginaEntrega";
import { useSetAtom } from "jotai";
import { Usuario } from "./atoms/Cliente/atomosCliente";
import { getUsuario } from "./services/users"

function App() {
     const setUsuario = useSetAtom(Usuario);
    
      useEffect(() => {
        const carregarUsuario = async () => {
          try {
            const usuario = await getUsuario(1);
            setUsuario(usuario);
          } catch (error) {
            alert("Erro ao carregar usuário:", error);
          }
        };
        carregarUsuario();
      }, [setUsuario]);

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