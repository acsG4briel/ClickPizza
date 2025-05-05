import styled from "styled-components";

export const PerfilContainer = styled.div`
max-width: 400px;
margin: 40px auto;
background: #fff;
border-radius: 12px;
box-shadow: 0 2px 8px rgba(0,0,0,0.08);
padding: 32px 28px;
`;

export const Titulo = styled.h2`
color: #003366;
margin-bottom: 22px;
text-align: center;
`;

export const Campo = styled.div`
margin-bottom: 18px;
display: flex;
flex-direction: column;
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

export const ImgPreview = styled.img`
width: 90px;
height: 90px;
object-fit: cover;
border-radius: 50%;
margin: 0 auto 18px auto;
display: block;
border: 2px solid #003366;
`;

export const SaveButton = styled.button`

background: rgb(110, 50, 102);
color: rgb(255, 255, 255);
border: none;
border-radius: 20px;
padding: 8px 22px;
font-size: 1rem;
font-weight: bold;
cursor: pointer;
transition: background 0.2s;

&:hover {
  background: rgb(73, 25, 95);
color: rgb(255, 255, 255);
}
`;

export const EnderecoButton = styled.button`
display: block;
margin:  0 auto;
background: rgb(110, 50, 102);
color: #fff;
border: none;
border-radius: 50%;
width: 40px;
height: 40px;
font-size: 2rem;
font-weight: bold;
cursor: pointer;
transition: background 0.2s;

&:hover {
  background: rgb(73, 25, 95);
}
`;

// Adicione esta exportação no seu arquivo de estilos
export const LogoutButton = styled.button`
background-color: #e74c3c;
color: white;
border: none;
border-radius: 4px;
padding: 10px 20px;
margin-top: 15px;
cursor: pointer;
font-weight: bold;
width: 100%;
transition: background-color 0.3s;

&:hover {
  background-color: #c0392b;
}
`;