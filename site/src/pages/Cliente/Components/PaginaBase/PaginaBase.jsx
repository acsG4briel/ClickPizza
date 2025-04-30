import React, { useState } from "react";
import { Container, Header, NavBar, NavButton, Content, Footer } from "./PaginaBase.styled.js";
import { useAtomValue } from "jotai";
import { Usuario } from "../../../../atoms/Cliente/atomosCliente.js";
import ModalLogin from "../../ModalLogin/ModalLogin.jsx";

const PaginaBase = ({ children }) => {
  const usuarioLogado = useAtomValue(Usuario);
  const [modalAberto, setModalAberto] = useState(false);
  
  return (
    <Container>
      <Header>
        Click Pizza
        <NavBar>
          <NavButton to="/" end>Home</NavButton>
          {usuarioLogado ? (
            <>
              <NavButton to="/menu">Menu</NavButton>
              <NavButton to="/carrinho">Carrinho</NavButton>
              <NavButton to="/entrega">Entrega</NavButton>
              <NavButton to="/perfil">Perfil</NavButton>
            </>
          ) : (
            <NavButton as="button" onClick={() => setModalAberto(true)}>
              Entrar
            </NavButton>
          )}
        </NavBar>
      </Header>
      <Content>{children}</Content>
      <Footer>© {new Date().getFullYear()} Click Pizza</Footer>
  
      {modalAberto && <ModalLogin onClose={() => setModalAberto(false)} />}
    </Container>
  );
  };
  
  export default PaginaBase;