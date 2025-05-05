import styled from "styled-components";

export const ModalOverlay = styled.div`
position: fixed;
top: 0; left: 0; right: 0; bottom: 0;
background: rgba(0, 0, 0, 0.55); /* Opacidade mais forte */
display: flex;
align-items: center;
justify-content: center;
z-index: 1000;
`;

export const ModalContent = styled.div`
background: #fff;
border-radius: 14px;
padding: 32px 28px 24px 28px;
box-shadow: 0 4px 24px rgba(0,0,0,0.13);
min-width: 350px;
max-width: 95vw;
position: relative;
`;

export const ModalTitle = styled.h2`
color: #003366;
margin-bottom: 22px;
text-align: center;
`;

export const Campo = styled.div`
margin-bottom 18px;
display: flex;
flex-direction: column;
flex: 1;
`;

export const Label = styled.label`
font-weight: bold;
color: #003366;
margin-bottom: 5px;
`;

export const Input = styled.input`
padding: 8px 10px;
border-radius: 6px;
border: 1px solid #ccc;
font-size: 1rem;
`;

export const Row = styled.div`
display: flex;
align-items: flex-end;
gap: 12px;
margin-bottom: 18px;
`;

export const LupaButton = styled.button`
background: rgb(110, 50, 102);
color: #fff;
border: none;
border-radius: 50%;
width: 38px;
height: 38px;
font-size: 1.3rem;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
transition: background 0.2s;

&:hover {
  background: rgb(73, 25, 95);
}
`;

export const SaveButton = styled.button`
background: rgb(110, 50, 102);
color: #fff;
border: none;
border-radius: 20px;
padding: 8px 22px;
font-size: 1rem;
font-weight: bold;
cursor: pointer;
transition: background 0.2s;
margin-top: 16px;
width: 100%;

&:hover {
  background: rgb(73, 25, 95);
}
`;

export const CloseButton = styled.button`
position: absolute;
top: 10px; right: 14px;
background: transparent;
border: none;
font-size: 2rem;
color: #666;
cursor: pointer;
line-height: 1;
`;