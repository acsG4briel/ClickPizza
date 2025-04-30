using api.DTOs;
using api.Entidades;
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

        public async Task CadastrarNovaFormaPagamento(DadosCadastroFormaPagamentoDto dados)
        {
            var formaPagamento = new FormaPagamento
            {
                UsuarioId = dados.UsuarioId,
                Descricao = dados.Descricao,
                NumeroCartao = dados.NumeroCartao,
                Validade = dados.Validade,
                CodigoValidadeCartao = dados.CodigoValidadeCartao,
                FormatoAtivo = true,
            };

            await _formaPagamentoRepositorio.CadastrarNovaFormaPagamento(formaPagamento);
        }

        public async Task InativarFormaPagamentoPorId(int formaPagamentoId)
        {
            await _formaPagamentoRepositorio.InativarFormaPagamento(formaPagamentoId);
        }
    }
}
