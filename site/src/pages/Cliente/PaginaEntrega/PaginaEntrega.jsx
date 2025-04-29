import { React, useState, useEffect } from "react";
import PaginaBase from "../Components/PaginaBase/PaginaBase";
import { getEntregaEmAndamento, patchFinalizarEntrega } from "../../../services/entrega";
import {
  BoxEntrega,
  PedidoNumero,
  ItensLista,
  ItemLinha,
  ValorTotal,
  TempoRestante,
  MapaBox,
  ImgMapa,
  BoxMensagem,
  BotaoFinalizar,
  BotaoWrapper
} from "./PaginaEntrega.styled";
import { useAtomValue } from "jotai";
import { Usuario } from "../../../atoms/Cliente/atomosCliente";

const PaginaEntrega = () => {
  const usuario = useAtomValue(Usuario);

  const [entregaEmCurso, setEntregaEmCurso] = useState(null);

  const getEntrega = async (usuarioId) => {
    try {
      const data = await getEntregaEmAndamento(usuarioId);
      console.log(data);
      if (data) {
        setEntregaEmCurso({
          entregaId: data.entregaId,
          pedido: {
            id: data.pedidoId,
            itens: data.itensPedidos.map(item => ({
              nome: item.descricao,
              quantidade: item.quantidade,
            })),
            valorTotal: data.valorTotal
          },
          endereco: data.endereco,
          tempoRestante: data.tempoRestante,
          nomeMotorista: data.nomeMotorista,
          placaVeiculo: data.placaVeiculo
        });
      }
    } catch (error) {
      setEntregaEmCurso(null);
    }
  };

  useEffect(() => {
    getEntrega(usuario.usuarioId);
  }, [setEntregaEmCurso, usuario.usuarioId]);

  const handleFinalizarEntrega = async () => {
    console.log(entregaEmCurso);
    try {
      await patchFinalizarEntrega(entregaEmCurso.entregaId);
      setEntregaEmCurso(null);
      alert('Entrega finalizada com sucesso!');
    } catch (error) {
      alert('Erro ao finalizar entrega.');
    }
  };

  return (
    <PaginaBase>
      {entregaEmCurso ? (
        <>
          <BoxEntrega>
            <PedidoNumero>Pedido #{entregaEmCurso.pedido.id}</PedidoNumero>
            <div>
              <strong>Endereço:</strong> {entregaEmCurso.endereco}
            </div>
            <ItensLista>
              {entregaEmCurso.pedido.itens.map(item => (
                <ItemLinha key={item.id}>
                  <span>{item.nome} {item.quantidade > 1 ? `x${item.quantidade}` : ''}</span>
                </ItemLinha>
              ))}
            </ItensLista>
            <strong>Motorista:</strong> {entregaEmCurso.nomeMotorista} - {entregaEmCurso.placaVeiculo}
            <ValorTotal>
              Total: R$ {entregaEmCurso.pedido.valorTotal.toFixed(2)}
            </ValorTotal>
            <TempoRestante>
              Tempo estimado para entrega: {entregaEmCurso.tempoRestante} min
            </TempoRestante>
          </BoxEntrega>

          <MapaBox>
            <ImgMapa
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
              alt="Mapa ilustrativo"
            />
          </MapaBox>
          <BotaoWrapper>
            <BotaoFinalizar onClick={handleFinalizarEntrega}>
              Finalizar Entrega
            </BotaoFinalizar>
          </BotaoWrapper>
        </>
      ) : (
        <BoxMensagem>
          Nenhuma entrega encontrada no momento.
        </BoxMensagem>
      )}
    </PaginaBase>
  );
};

export default PaginaEntrega;