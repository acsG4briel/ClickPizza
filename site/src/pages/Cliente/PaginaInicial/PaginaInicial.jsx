import React from "react";
import { useEffect } from "react";
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
import { useAtom } from "jotai";
import { itensDisponiveis } from "../../../atoms/Cliente/atomosCliente";
import { getItems } from "../../../services/items";

import { TipoItem } from "../../../enums/tipoItem";

const PaginaInicial = () => {
    const navigate = useNavigate();

    const [itens, setItensDisponiveis] = useAtom(itensDisponiveis);

    useEffect(() => {
        getItems()
            .then(data => setItensDisponiveis(data))
            .catch(error => {
                //adicionar tratamento de erros
            });
    }, [setItensDisponiveis]);

    const novidades = itens
        .filter(item => item.tipoItem === TipoItem.PIZZA)
        .slice(0, 5);

    const escolhasDaCasa = itens
        .filter(item => item.tipoItem === TipoItem.PIZZA)
        .slice(5, 10);



    const handleCardClick = () => {
        navigate("/menu");
    };

    return (
        <PaginaBase>
            <SearchBar placeholder="Buscar pizza..." />
    
            <SectionHeader>Escolhas da casa</SectionHeader>
            <CardsGrid>
                {novidades.map((pizza) => (
                    <PizzaCard key={pizza.itemCardapioId} onClick={handleCardClick}>
                        <PizzaImg src={pizza.imgUrl} alt={pizza.nomeItem} />
                        <PizzaName>{pizza.nomeItem}</PizzaName>
                        <PizzaPrice>{pizza.precoItem}</PizzaPrice>
                    </PizzaCard>
                ))}
            </CardsGrid>
    
            <SectionHeader>Novidades</SectionHeader>
            <CardsGrid>
                {escolhasDaCasa.map((pizza) => (
                    <PizzaCard key={pizza.itemCardapioId} onClick={handleCardClick}>
                        <PizzaImg src={pizza.imgUrl} alt={pizza.nomeItem} />
                        <PizzaName>{pizza.nomeItem}</PizzaName>
                        <PizzaPrice>{pizza.precoItem}</PizzaPrice>
                    </PizzaCard>
                ))}
            </CardsGrid>
        </PaginaBase>
    );
};

export default PaginaInicial;