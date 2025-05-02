import { React, useEffect } from "react";
import PaginaBase from "../Components/PaginaBase/PaginaBase";
import { useAtom, useAtomValue } from "jotai";
import { PagamentoAutorizado, pedidoEmCursoAtom, Usuario } from "../../../atoms/Cliente/atomosCliente";
import {
    CarrinhoLista,
    ItemLinha,
    TotalBox,
    FinalizarButton,
    MensagemVazio,
    QuantidadeInput,
    RemoverButton
} from "./PaginaCarrinho.styled";
import { postPedido } from "../../../services/pedido";
import BoxPagamentoStripe from "../Components/PagamentoStripeForm/BoxPagamentoStripe";

const PaginaCarrinho = () => {
    const usuario = useAtomValue(Usuario);
    const [pedido, setPedido] = useAtom(pedidoEmCursoAtom);
    const [pagamentoAutorizado, setPagamentoAutorizado] = useAtom(PagamentoAutorizado);

    useEffect(() => {
        setPagamentoAutorizado(false);
    }, [pedido, setPagamentoAutorizado]);

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

    const handleFinalizarPedido = async () => {

        if (!pedido.itens.length) {
            alert("Carrinho vazio!");
            return;
        }

        const listaPedidos = pedido.itens.flatMap(item =>
            Array(item.quantidade || 1).fill(item.itemCardapioId)
        );

        const informacoesPedido = {
            usuarioId: usuario.usuarioId,
            valorTotal: total,
            listaPedidos: listaPedidos
        };

        try {
            await postPedido(informacoesPedido);
            setPedido({ itens: [] });
            alert("Pedido enviado com sucesso!");
        } catch (error) {
            alert("Erro ao enviar pedido. Tente novamente.");
            setPedido({ itens: [] });
        }

    };

    const total = pedido.itens.reduce((acc, item) => {
        let valorNum = typeof item.precoItem === "string"
            ? Number(item.precoItem.replace("R$", "").replace(",", ".").trim())
            : item.precoItem;
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
                                <span>{item.nomeItem}</span>
                                <span>
                                    <QuantidadeInput
                                        type="number"
                                        min={1}
                                        value={item.quantidade || 1}
                                        onChange={e => handleQuantidadeChange(idx, Number(e.target.value))}
                                    />
                                    {typeof item.precoItem === "number"
                                        ? `R$ ${item.precoItem.toFixed(2)}`
                                        : item.precoItem}
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

                    {!pagamentoAutorizado && (
                            <BoxPagamentoStripe valor={total} />
                    )}

                    {pagamentoAutorizado && (
                        <FinalizarButton onClick={handleFinalizarPedido}>
                            FINALIZAR PEDIDO
                        </FinalizarButton>
                    )}
                </>
            ) : (
                <MensagemVazio>Seu carrinho está vazio.</MensagemVazio>
            )}
        </PaginaBase>
    );
};

export default PaginaCarrinho;