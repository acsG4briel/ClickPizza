import styled from "styled-components";

export const PagamentoContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: 180px;
`;

export const StyledForm = styled.form`
max-width: 400px;
width: 100%;
background: #fff;
border-radius: 12px;
box-shadow: 0 4px 24px rgba(73, 25, 95, 0.10);
padding: 32px 24px;
display: flex;
flex-direction: column;
gap: 18px;
`;

export const StyledButton = styled.button`
margin-top: 16px;
padding: 10px 0;
background-color: #49195f;
color: #fff;
font-weight: bold;
border: none;
border-radius: 6px;
cursor: pointer;
transition: background 0.2s;
&:disabled {
  background: #c3b8d9;
  cursor: not-allowed;
}
`;

export const ErrorMsg = styled.div`
color: #e74c3c;
margin-top: 8px;
font-size: 0.95em;
`;

export const SuccessMsg = styled.div`
color: #27ae60;
margin-top: 8px;
font-size: 0.95em;
`;