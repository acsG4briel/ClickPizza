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
                    <ListRow key={item.id}>
                        <ItemImg src={item.img} alt={item.nome} />
                        <ItemName>{item.nomeItem}</ItemName>
                        <ItemPrice>{item.precoItem}</ItemPrice>
                        <AddButton onClick={() => handleAdd(item)}>Adicionar ao pedido</AddButton>
                    </ListRow>
                ))}
            </ListTable>

            <SectionHeader>Acompanhamentos</SectionHeader>
            <ListTable>
                {acompanhamentos.map((item) => (
                    <ListRow key={item.id}>
                        <ItemImg src={item.img} alt={item.nome} />
                        <ItemName>{item.nomeItem}</ItemName>
                        <ItemPrice>{item.precoItem}</ItemPrice>
                        <AddButton onClick={() => handleAdd(item)}>Adicionar ao pedido</AddButton>
                    </ListRow>
                ))}
            </ListTable>
        </PaginaBase>
    );
};

export default PaginaMenu;
