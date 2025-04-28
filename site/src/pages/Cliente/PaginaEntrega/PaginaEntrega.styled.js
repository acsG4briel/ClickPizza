import styled from "styled-components";

export const BoxEntrega = styled.div`
max-width: 480px;
margin: 40px auto 28px auto;
background: #fff;
border-radius: 14px;
box-shadow: 0 2px 10px rgba(73,25,95,0.09);
padding: 32px 26px 24px 26px;
`;

export const PedidoNumero = styled.h2`
color: #fff;
background: rgb(73, 25, 95);
border-radius: 10px;
text-align: center;
font-size: 1.3rem;
padding: 8px 0;
margin-bottom: 20px;
letter-spacing: 1px;
`;

export const ItensLista = styled.ul`
list-style: none;
padding: 0;
margin: 0 0 18px 0;
`;

export const ItemLinha = styled.li`
display: flex;
justify-content: space-between;
padding: 6px 0;
border-bottom: 1px solid #eee;

&:last-child {
  border-bottom: none;
}
`;

export const ValorTotal = styled.div`
font-weight: bold;
color: #49195f;
font-size: 1.13rem;
text-align: right;
margin-top: 12px;
`;

export const TempoRestante = styled.div`
margin-top: 18px;
font-size: 1.07rem;
color: #fff;
background: #49195f;
border-radius: 8px;
padding: 7px 0;
text-align: center;
font-weight: 500;
`;

export const MapaBox = styled.div`
max-width: 480px;
margin: 0 auto;
border-radius: 14px;
overflow: hidden;
box-shadow: 0 2px 10px rgba(73,25,95,0.08);
background: #fff;
padding: 0;
`;

export const ImgMapa = styled.img`
width: 100%;
height: 220px;
object-fit: cover;
display: block;
`;

export const BoxMensagem = styled.div`
max-width: 480px;
margin: 60px auto;
background: #fff;
border-radius: 14px;
box-shadow: 0 2px 10px hsla(281, 58.30%, 23.50%, 0.09);
padding: 38px 26px;
text-align: center;
color: #49195f;
font-size: 1.15rem;
font-weight: bold;
`;

export const BotaoFinalizar = styled.button`
margin-top: 24px;
padding: 12px 32px;
background-color: #49195f;
color: #fff;
border: none;
border-radius: 8px;
font-size: 1rem;
font-weight: bold;
cursor: pointer;
transition: background 0.2s;

&:hover {
  background-color: rgb(57, 16, 77);
}
`;

export const BotaoWrapper = styled.div`
display: flex;
justify-content: center;
width: 100%;
`;