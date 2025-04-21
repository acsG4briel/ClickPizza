import styled from "styled-components";

export const SectionHeader = styled.h2`
color: #003366;
margin-top: 36px;
margin-bottom: 18px;
font-size: 1.4rem;
font-weight: bold;
`;

export const ListTable = styled.div`
width: 100%;
max-width: 700px;
margin: 0 auto 32px auto;
border-radius: 8px;
overflow: hidden;
box-shadow: 0 2px 8px rgba(0,0,0,0.06);
background: #fff;
`;

export const ListRow = styled.div`
display: flex;
align-items: center;
padding: 16px 12px;
border-bottom: 1px solid #eee;

&:last-child {
  border-bottom: none;
}
`;

export const ItemImg = styled.img`
width: 54px;
height: 54px;
object-fit: cover;
border-radius: 50%;
margin-right: 18px;
`;

export const ItemName = styled.span`
flex: 2;
font-size: 1.07rem;
color: #222;
font-weight: 500;
`;

export const ItemPrice = styled.span`
flex: 1;
font-size: 1.05rem;
color: #003366;
font-weight: bold;
`;

export const AddButton = styled.button`
background:rgb(73, 25, 95);
  color:rgb(255, 255, 255);
border: none;
border-radius: 20px;
padding: 8px 22px;
font-size: 1rem;
font-weight: bold;
cursor: pointer;
transition: background 0.2s;

&:hover {
  background:rgb(110, 50, 102);
  color:rgb(255, 255, 255);
}
`;