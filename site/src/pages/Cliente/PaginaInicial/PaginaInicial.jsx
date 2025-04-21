import React from "react";
import { useNavigate } from "react-router-dom";
import PaginaBase from "../Components/PaginaBase/PaginaBase";
import {
    SearchBar,
    SectionHeader,
    CardsGrid,
    PizzaCard,
    PizzaImg,
    PizzaName,
    PizzaPrice
} from "./PaginaInicial.styled";
import { escolhasDaCasa, novidades } from "../../../services/items";

const PaginaInicial = () => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate("/menu");
    };

    return (
        <PaginaBase>
            <SearchBar placeholder="Buscar pizza..." />

            <SectionHeader>Escolhas da casa</SectionHeader>
            <CardsGrid>
                {escolhasDaCasa.map((pizza) => (
                    <PizzaCard key={pizza.id} onClick={handleCardClick}>
                        <PizzaImg src={pizza.img} alt={pizza.nome} />
                        <PizzaName>{pizza.nome}</PizzaName>
                        <PizzaPrice>{pizza.valor}</PizzaPrice>
                    </PizzaCard>
                ))}
            </CardsGrid>

            <SectionHeader>Novidades</SectionHeader>
            <CardsGrid>
                {novidades.map((pizza) => (
                    <PizzaCard key={pizza.id} onClick={handleCardClick}>
                        <PizzaImg src={pizza.img} alt={pizza.nome} />
                        <PizzaName>{pizza.nome}</PizzaName>
                        <PizzaPrice>{pizza.valor}</PizzaPrice>
                    </PizzaCard>
                ))}
            </CardsGrid>
        </PaginaBase>
    );
};

export default PaginaInicial;