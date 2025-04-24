import React from "react";
import PaginaBase from "../Components/PaginaBase/PaginaBase";
import {
    SectionHeader,
    ListTable,
    ListRow,
    ItemImg,
    ItemName,
    ItemPrice,
    AddButton
} from "./PaginaMenu.styled";
import { useAtomValue, useSetAtom } from "jotai";
import { pedidoEmCursoAtom, itensDisponiveis } from "../../../atoms/Cliente/atomosCliente";
import { TipoItem } from "../../../enums/tipoItem";

//TODO: EXPANDIR ITENS AO CLICAR NA SUA IMAGEM
const PaginaMenu = () => {
    const setPedido = useSetAtom(pedidoEmCursoAtom);
    const itens = useAtomValue(itensDisponiveis);

    const pizzas = itens.filter(item => item.tipoItem === TipoItem.PIZZA);
    const acompanhamentos = itens.filter(item => item.tipoItem === TipoItem.BEBIDAS || item.tipoItem === TipoItem.OUTROS);

    const handleAdd = (item) => {
        console.log(item);
        setPedido((prev) => ({
            ...prev,
            itens: [...prev.itens, item]
        }));
    };

    return (
        <PaginaBase>
            <SectionHeader>Pizzas</SectionHeader>
            <ListTable>
                {pizzas.map((item) => (
                    <ListRow key={item.itemCardapioId}>
                        <ItemImg src={"https://images.unsplash.com/photo-1513104890138-7c749659a591"} alt={item.nome} />
                        <ItemName>{item.nomeItem}</ItemName>
                        <ItemPrice>{Number(item.precoItem).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</ItemPrice>
                        <AddButton onClick={() => handleAdd(item)}>Adicionar ao pedido</AddButton>
                    </ListRow>
                ))}
            </ListTable>

            <SectionHeader>Acompanhamentos</SectionHeader>
            <ListTable>
                {acompanhamentos.map((item) => (
                    <ListRow key={item.itemCardapioId}>
                        <ItemImg src={"https://images.unsplash.com/photo-1504674900247-0877df9cc836"} alt={item.nome} />
                        <ItemName>{item.nomeItem}</ItemName>
                        <ItemPrice>{Number(item.precoItem).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</ItemPrice>
                        <AddButton onClick={() => handleAdd(item)}>Adicionar ao pedido</AddButton>
                    </ListRow>
                ))}
            </ListTable>
        </PaginaBase>
    );
};

export default PaginaMenu;
