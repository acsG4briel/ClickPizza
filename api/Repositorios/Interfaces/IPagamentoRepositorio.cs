using api.Entidades;

namespace api.Repositorios.Interfaces
{
    public interface IPagamentoRepositorio
    {
        public Task RegistrarPagamento(Pagamento pagamento);
    }
}
