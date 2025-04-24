import { React, useState, useEffect } from "react";
import PaginaBase from "../Components/PaginaBase/PaginaBase";
import { useAtom } from "jotai";
import { pedidoEmCursoAtom } from "../../../atoms/Cliente/atomosCliente";
import {
    CarrinhoLista,
    ItemLinha,
    TotalBox,
    FinalizarButton,
    MensagemVazio,
    QuantidadeInput,
    RemoverButton
} from "./PaginaCarrinho.styled";
import BoxFormaPagamento from "../Components/BoxFormaPagamento/BoxFormaPagamento";
import { postPedido } from "../../../services/pedido";

//TODO: NAO DEIXAR ADICIONAR MAIS DO QUE A QUANTIDADE DISPONIVEL
//TODO: CRIAR FEATURE CADASTRO E LOGIN
//TODO: MOVER CHAMADA DO ENDPOINT PARA QUANDO O LOGIN FOR REALIZADO
const PaginaCarrinho = () => {
    const [pedido, setPedido] = useAtom(pedidoEmCursoAtom);
    const [formaSelecionada, setFormaSelecionada] = useState(null);

    useEffect(() => {
        console.log("Pedido atualizado:", pedido);
    }, [pedido]);

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
        const usuarioId = 1;

        if (!formaSelecionada) {
            alert("Selecione uma forma de pagamento!");
            return;
        }

        if (!pedido.itens.length) {
            alert("Carrinho vazio!");
            return;
        }

        const informacoesPedido = {
            usuarioId: usuarioId,
            formaPagamentoId: formaSelecionada,
            valorTotal: total,
            listaPedidos: pedido.itens.map(item => item.itemCardapioId)
        };

        try {
            await postPedido(informacoesPedido);
            setPedido({ itens: [] });
            alert("Pedido enviado com sucesso!");
            //Redirecionar ou atualizar tela, se desejar
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

                    <BoxFormaPagamento
                        formaSelecionada={formaSelecionada}
                        setFormaSelecionada={setFormaSelecionada}
                    />

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