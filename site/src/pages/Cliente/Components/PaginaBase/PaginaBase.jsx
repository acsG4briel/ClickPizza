import React from "react";
import { Container, Header, NavBar, NavButton, Content, Footer } from "./PaginaBase.styled.js";

const PaginaBase = ({ children }) => {

  return (
    <Container>
      <Header>
        Click Pizza
        <NavBar>
          <NavButton to="/" end>Home</NavButton>
          <NavButton to="/menu">Menu</NavButton>
          <NavButton to="/carrinho">Carrinho</NavButton>
          <NavButton to="/entrega">Entrega</NavButton>
          <NavButton to="/perfil">Perfil</NavButton>
        </NavBar>
      </Header>
      <Content>{children}</Content>
      <Footer>© {new Date().getFullYear()} Click Pizza</Footer>
    </Container>
  );
};

export default PaginaBase;