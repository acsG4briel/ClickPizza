using api.DTOs;
using api.Repositorios.Interfaces;
using api.Servicos.Interfaces;

namespace api.Servicos
{
    public class PagamentoServico(IFormaPagamentoRepositorio formaPagamentoRepositorio) : IPagamentoServico
    {
        private readonly IFormaPagamentoRepositorio _formaPagamentoRepositorio = formaPagamentoRepositorio;
        async Task<List<FormaPagamentoDto>> IPagamentoServico.ObterFormasPagamentoPorUsuario(int usuarioId)
        {
            var formasPagamento = await _formaPagamentoRepositorio.ObterFormasPagamentoPorUsuarioId(usuarioId);
            var retorno = new List<FormaPagamentoDto>();

            foreach(var item in formasPagamento)
            {
                retorno.Add(new FormaPagamentoDto
                {
                    FormaPagamentoId = item.FormaPagamentoId,
                    ApelidoCartao = item.Descricao,
                    NumeroCartao = item.NumeroCartao,
                    Validade = item.Validade,
                    CodigoValidadeCartao = item.CodigoValidadeCartao
                });
            }

            return retorno;
        }
    }
}
