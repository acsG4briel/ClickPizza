import styled from "styled-components";

export const CarrinhoLista = styled.ul`
list-style: none;
padding: 0;
margin: 24px auto 16px auto;
max-width: 500px;
`;

export const ItemLinha = styled.li`
display: flex;
justify-content: space-between;
padding: 10px 0;
border-bottom: 1px solid #eee;
font-size: 1.07rem;
`;

export const TotalBox = styled.div`
text-align: right;
font-weight: bold;
color: #49195f;
font-size: 1.15rem;
margin: 18px auto 28px auto;
max-width: 500px;
`;

export const FinalizarButton = styled.button`
background: rgb(73, 25, 95);
color: rgb(255, 255, 255);
border: none;
border-radius: 20px;
padding: 12px 36px;
font-size: 1.1rem;
font-weight: bold;
cursor: pointer;
transition: background 0.2s;
display: block;
margin: 40px auto 0 auto; /* <--- Aqui */

&:hover {
  background: rgb(110, 50, 102);
  color: rgb(255, 255, 255);
}
`;

export const MensagemVazio = styled.div`
text-align: center;
color: #49195f;
font-size: 1.15rem;
margin: 48px 0;
`;

export const QuantidadeInput = styled.input`
width: 48px;
padding: 4px 6px;
border-radius: 8px;
border: 1px solid #ccc;
margin-right: 12px;
text-align: center;
`;

export const RemoverButton = styled.button`
background: #fff;
color: #c00;
border: 1px solid #c00;
border-radius: 8px;
padding: 4px 10px;
font-size: 0.97rem;
font-weight: bold;
cursor: pointer;
margin-left: 12px;
transition: background 0.2s, color 0.2s;

&:hover {
  background: #c00;
  color: #fff;
}
`;