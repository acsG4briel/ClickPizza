import styled from "styled-components";

export const SearchBar = styled.input`
width: 100%;
max-width: 400px;
padding: 12px 20px;
border-radius: 25px;
border: 1px solid #ccc;
font-size: 1rem;
margin: 24px auto 32px auto;
display: block;
outline: none;
transition: border 0.2s;

&:focus {
  border-color: #003366;
}
`;

export const SectionHeader = styled.h2`
color: #003366;
margin-top: 36px;
margin-bottom: 18px;
font-size: 1.4rem;
font-weight: bold;
`;

export const CardsGrid = styled.div`
display: flex;
gap: 24px;
flex-wrap: wrap;
justify-content: center;
margin-bottom: 28px;
`;

export const PizzaCard = styled.div`
background: #fff;
border-radius: 16px;
box-shadow: 0 2px 8px rgba(0,0,0,0.07);
width: 240px;
padding: 18px 14px 22px 14px;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
cursor: pointer; /* Adicionado */
transition: box-shadow 0.2s;

&:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.13);
}
`;

export const PizzaImg = styled.img`
width: 120px;
height: 120px;
object-fit: cover;
border-radius: 50%;
margin-bottom: 14px;
`;

export const PizzaName = styled.h3`
font-size: 1.15rem;
color: #222;
margin-bottom: 7px;
`;

export const PizzaDesc = styled.p`
font-size: 0.97rem;
color: #555;
margin-bottom: 10px;
`;

export const PizzaPrice = styled.span`
font-size: 1.05rem;
color: #003366;
font-weight: bold;
`;