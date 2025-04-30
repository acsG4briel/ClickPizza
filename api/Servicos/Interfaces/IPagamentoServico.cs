using api.DTOs;
using api.Entidades;

namespace api.Servicos.Interfaces
{
    public interface IPagamentoServico
    {
        public Task<List<FormaPagamentoDto>> ObterFormasPagamentoPorUsuario(int usuarioId);
        public Task CadastrarNovaFormaPagamento(DadosCadastroFormaPagamentoDto dados);
        public Task InativarFormaPagamentoPorId(int formaPagamentoId);
    }
}
