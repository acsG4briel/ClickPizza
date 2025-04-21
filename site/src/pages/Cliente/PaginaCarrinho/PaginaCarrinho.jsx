import React from "react";
import PaginaBase from "../Components/PaginaBase/PaginaBase";
import { useAtom } from "jotai";
import { pedidoEmCursoAtom } from "../../../atoms/Cliente/pedidoEmCurso";
import {
    CarrinhoLista,
    ItemLinha,
    TotalBox,
    FinalizarButton,
    MensagemVazio,
    QuantidadeInput,
    RemoverButton
} from "./PaginaCarrinho.styled";

const PaginaCarrinho = () => {
    const [pedido, setPedido] = useAtom(pedidoEmCursoAtom);

    const handleQuantidadeChange = (idx, novaQtd) => {
        if (novaQtd < 1) return;
        setPedido((prev) => ({
            ...prev,
            itens: prev.itens.map((item, i) =>
                i === idx ? { ...item, quantidade: novaQtd } : item
            )
        }));
    };

    const handleRemover = (idx) => {
        setPedido((prev) => ({
            ...prev,
            itens: prev.itens.filter((_, i) => i !== idx)
        }));
    };

    //TODO: Endpoint post pedido
    const handleFinalizarPedido = () => {
        setPedido({ itens: [] });

    };

    const total = pedido.itens.reduce((acc, item) => {
        let valorNum = typeof item.valor === "string"
            ? Number(item.valor.replace("R$", "").replace(",", ".").trim())
            : item.valor;
        return acc + (valorNum || 0) * (item.quantidade || 1);
    }, 0);

    return (
        <PaginaBase>
            <h2 style={{ textAlign: "center", color: "#49195f" }}>Meu Carrinho</h2>
            {pedido.itens.length > 0 ? (
                <>
                    <CarrinhoLista>
                        {pedido.itens.map((item, idx) => (
                            <ItemLinha key={idx}>
                                <span>{item.nome}</span>
                                <span>
                                    <QuantidadeInput
                                        type="number"
                                        min={1}
                                        value={item.quantidade || 1}
                                        onChange={e => handleQuantidadeChange(idx, Number(e.target.value))}
                                    />
                                    {typeof item.valor === "number"
                                        ? `R$ ${item.valor.toFixed(2)}`
                                        : item.valor}
                                    <RemoverButton onClick={() => handleRemover(idx)}>
                                        Remover
                                    </RemoverButton>
                                </span>
                            </ItemLinha>
                        ))}
                    </CarrinhoLista>
                    <TotalBox>
                        Total: R$ {total.toFixed(2)}
                    </TotalBox>
                    <FinalizarButton onClick={handleFinalizarPedido}>
                        FINALIZAR PEDIDO
                    </FinalizarButton>
                </>
            ) : (
                <MensagemVazio>Seu carrinho está vazio.</MensagemVazio>
            )}
        </PaginaBase>
    );
};

export default PaginaCarrinho;