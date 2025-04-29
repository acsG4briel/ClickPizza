import React, { useState, useEffect } from "react";
import {
  PagamentoBox,
  TituloPagamento,
  OpcaoPagamento,
  RadioInput,
  InfoCartao
} from "./BoxFormaPagamento.styled";
import { getFormasPagamento } from "../../../../services/formaPagamento";
import { useAtomValue } from "jotai";
import { Usuario } from "../../../../atoms/Cliente/atomosCliente";

const BoxFormaPagamento = ({ formaSelecionada, setFormaSelecionada }) => {
  const usuario = useAtomValue(Usuario);
  const [formasPagamento, setFormasPagamento] = useState([]);

  const obterFormasPagamentoApi = (usuarioId) => {
    getFormasPagamento(usuarioId)
      .then(data => setFormasPagamento(data))
      .catch(error => {
        //adicionar tratamento de erros
      });
  }

  useEffect(() => {
    obterFormasPagamentoApi(usuario.usuarioId);
  }, [setFormasPagamento, usuario.usuarioId]);

  return (
    <PagamentoBox>
      <TituloPagamento>OPÇÕES DE PAGAMENTO</TituloPagamento>
      {formasPagamento.length === 0 ? (
        <div>Nenhuma forma de pagamento disponível.</div>
      ) : (
        formasPagamento.map(fp => (
          <OpcaoPagamento
            key={fp.formaPagamentoId}
            selected={formaSelecionada === fp.formaPagamentoId}
          >
            <RadioInput
              type="radio"
              name="pagamento"
              value={fp.formaPagamentoId}
              checked={formaSelecionada === fp.formaPagamentoId}
              onChange={() => setFormaSelecionada(fp.formaPagamentoId)}
            />
            <span>
              {fp.apelidoCartao}
              {fp.numeroCartao && (
                <InfoCartao>
                  •••• {String(fp.numeroCartao).slice(-4)}
                </InfoCartao>
              )}
            </span>
          </OpcaoPagamento>
        ))
      )}
    </PagamentoBox>
  );
};

export default BoxFormaPagamento;