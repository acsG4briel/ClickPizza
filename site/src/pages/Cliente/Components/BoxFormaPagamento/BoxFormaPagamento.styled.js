import styled from "styled-components";

export const PagamentoBox = styled.div`
border-radius: 12px;
padding: 18px 22px;
margin: 20px auto 24px auto;
max-width: 500px;
color: #49195f;
`;

export const TituloPagamento = styled.p`
font-weight: bold;
margin-bottom: 12px;
font-size: 1.08rem;
`;

export const OpcaoPagamento = styled.label`
display: flex;
align-items: center;
background: ${props => props.selected ? "#e3d8ef" : "#fff"};
border: 2px solid ${props => props.selected ? "#49195f" : "#eee"};
border-radius: 8px;
padding: 10px 14px;
margin-bottom: 10px;
cursor: pointer;
transition: background 0.2s, border 0.2s;
font-size: 1rem;
`;

export const RadioInput = styled.input`
margin-right: 12px;
`;

export const InfoCartao = styled.span`
color: #888;
margin-left: 10px;
font-size: 0.98em;
`;