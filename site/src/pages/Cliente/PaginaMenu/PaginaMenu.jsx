import React from "react";
import PaginaBase from "../Components/PaginaBase/PaginaBase";
import { pizzas, acompanhamentos } from "../../../services/items";
import {
    SectionHeader,
    ListTable,
    ListRow,
    ItemImg,
    ItemName,
    ItemPrice,
    AddButton
} from "./PaginaMenu.styled";
import { useSetAtom } from "jotai";
import { pedidoEmCursoAtom } from "../../../atoms/Cliente/pedidoEmCurso";

//TODO: EXPANDIR ITENS AO CLICAR NA SUA IMAGEM
const PaginaMenu = () => {
    const setPedido = useSetAtom(pedidoEmCursoAtom);

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
                        <ItemName>{item.nome}</ItemName>
                        <ItemPrice>{item.valor}</ItemPrice>
                        <AddButton onClick={() => handleAdd(item)}>Adicionar ao pedido</AddButton>
                    </ListRow>
                ))}
            </ListTable>

            <SectionHeader>Acompanhamentos</SectionHeader>
            <ListTable>
                {acompanhamentos.map((item) => (
                    <ListRow key={item.id}>
                        <ItemImg src={item.img} alt={item.nome} />
                        <ItemName>{item.nome}</ItemName>
                        <ItemPrice>{item.valor}</ItemPrice>
                        <AddButton onClick={() => handleAdd(item)}>Adicionar ao pedido</AddButton>
                    </ListRow>
                ))}
            </ListTable>
        </PaginaBase>
    );
};

export default PaginaMenu;
