import React from "react";
import PaginaBase from "../Components/PaginaBase/PaginaBase";
import { entrega } from "../../../services/entrega";
import {
  BoxEntrega,
  PedidoNumero,
  ItensLista,
  ItemLinha,
  ValorTotal,
  TempoRestante,
  MapaBox,
  ImgMapa,
  BoxMensagem
} from "./PaginaEntrega.styled";

const PaginaEntrega = () => {
  //TODO: Exibir conteudo se existir entrega em curso
  const entregaEmCurso = entrega; // ou null

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
                  <span>{item.nome}</span>
                  <span>R$ {item.valor.toFixed(2)}</span>
                </ItemLinha>
              ))}
            </ItensLista>
            <ValorTotal>
              Total: R$ {entregaEmCurso.pedido.valorTotal.toFixed(2)}
            </ValorTotal>
            <TempoRestante>
              Tempo estimado para entrega: {entregaEmCurso.tempoRestante}
            </TempoRestante>
          </BoxEntrega>

          <MapaBox>
            <ImgMapa
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
              alt="Mapa ilustrativo"
            />
          </MapaBox>
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