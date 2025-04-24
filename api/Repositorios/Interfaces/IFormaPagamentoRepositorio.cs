using api.Entidades;

namespace api.Repositorios.Interfaces
{
    public interface IFormaPagamentoRepositorio
    {
        public Task<List<FormaPagamento>> ObterFormasPagamentoPorUsuarioId(int usuarioId);
    }
}
