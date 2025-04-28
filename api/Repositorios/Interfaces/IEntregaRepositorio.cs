using api.Entidades;

namespace api.Repositorios.Interfaces
{
    public interface IEntregaRepositorio
    {
        public Task<Entrega> ObterEntregaPorPedido(int pedidoId);
        public Task RegistrarEntrega(Entrega entrega);
        public Task<Entrega> AtualizarStatusEntrega(int entregaId);
        public Task<Entregador> ObterEntregadorPorId(int entregadorId);
        public Task<int> ObterEntregadorDisponivelParaEntrega();
    }
}
