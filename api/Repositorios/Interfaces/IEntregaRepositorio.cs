using api.Entidades;

namespace api.Repositorios.Interfaces
{
    public interface IEntregaRepositorio
    {
        public Task<Entrega> ObterEntregaPorPedido(int pedidoId);
        public Task<Entregador> ObterEntregadorPorId(int entregadorId);
    }
}
