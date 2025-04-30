using api.Entidades;

namespace api.Repositorios.Interfaces
{
    public interface IFormaPagamentoRepositorio
    {
        public Task<List<FormaPagamento>> ObterFormasPagamentoPorUsuarioId(int usuarioId);
        public Task CadastrarNovaFormaPagamento(FormaPagamento formaPagamento);
        public Task InativarFormaPagamento(int formaPagamentoId);
    }
}
