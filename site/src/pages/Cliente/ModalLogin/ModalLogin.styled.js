import styled from "styled-components";

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 18px;
background: #faf7fb;
border-radius: 12px;
padding: 24px 16px 16px 16px;
box-shadow: 0 2px 8px rgba(110,50,102,0.07);
`;

export const Label = styled.label`
font-weight: 500;
margin-bottom: 6px;
color: rgb(110, 50, 102);
font-size: 1rem;
display: block;
`;

export const Input = styled.input`
padding: 10px;
border-radius: 6px;
border: 1.5px solid #ccc;
font-size: 1rem;
width: 100%;
margin-bottom: 2px;
transition: border-color 0.2s;

&:focus {
  outline: none;
  border-color: rgb(110, 50, 102);
  background: #f9f2fa;
}
`;

export const Button = styled.button`
background: linear-gradient(90deg, rgb(110, 50, 102), rgb(73, 25, 95));
color: #fff;
border: none;
border-radius: 6px;
padding: 12px 0;
font-size: 1.08rem;
cursor: pointer;
font-weight: bold;
margin-top: 10px;
letter-spacing: 0.02em;
box-shadow: 0 1px 4px rgba(110,50,102,0.06);

&:hover:not(:disabled) {
  background: linear-gradient(90deg, rgb(73, 25, 95), rgb(110, 50, 102));
}

&:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}
`;

export const CadastroLink = styled.button`
background: none;
border: none;
color: rgb(110, 50, 102);
text-decoration: underline;
cursor: pointer;
font-size: 0.98rem;
margin-top: 14px;
align-self: flex-end;
transition: color 0.15s;

&:hover {
  color: rgb(73, 25, 95);
}
`;

export const Backdrop = styled.div`
position: fixed;
top: 0; left: 0; right: 0; bottom: 0;
background: rgba(0,0,0,0.38);
z-index: 1999;
`;

export const SidebarModal = styled.div`
position: fixed;
top: 0;
right: 0;
width: 370px;
height: 100vh;
background: #fff;
box-shadow: -2px 0 16px rgba(110,50,102,0.13);
z-index: 2000;
transition: right 0.3s;
padding: 36px 28px 24px 28px;
display: flex;
flex-direction: column;
justify-content: flex-start;
`;

export const FecharBotao = styled.button`
position: absolute;
top: 14px;
right: 22px;
font-size: 2.1rem;
background: none;
border: none;
color: rgb(110, 50, 102);
cursor: pointer;
transition: color 0.18s;

&:hover {
  color: rgb(73, 25, 95);
}
`;

export const ErrorMsg = styled.div`
color: #b92d41;
background: #fff0f3;
border: 1px solid #ffdbe1;
border-radius: 5px;
padding: 6px 10px;
font-size: 0.97rem;
margin-top: 4px;
margin-bottom: -10px;
text-align: left;
`;
