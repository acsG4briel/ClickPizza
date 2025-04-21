import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;
background: #f7f7f7;
`;

export const Header = styled.header`
background:rgb(110, 50, 102);
color: #fff;
padding: 20px 0 10px 0;
text-align: center;
font-weight: bold;
font-size: 1.5rem;
`;

export const NavBar = styled.nav`
margin-top: 10px;
display: flex;
justify-content: center;
gap: 24px;
`;

export const NavButton = styled(NavLink)`
background: #fff;
color:rgb(110, 50, 102);
border: none;
border-radius: 4px;
padding: 8px 18px;
font-size: 1rem;
cursor: pointer;
font-weight: 500;
text-decoration: none;
transition: background 0.2s, color 0.2s;

&.active {
  background:rgb(73, 25, 95);
  color:rgb(255, 255, 255);
  font-weight: bold;
}

&:hover {
  background:rgb(73, 25, 95);
  color:rgb(255, 255, 255);
}
`;

export const Content = styled.main`
flex: 1;
padding: 40px 20px;
max-width: 900px;
margin: 0 auto;
width: 100%;
`;

export const Footer = styled.footer`
background:rgb(110, 50, 102);
color: #fff;
padding: 15px;
text-align: center;
font-size: 1rem;
`;