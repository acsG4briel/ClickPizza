using api.Entidades;

namespace api.Repositorios.Interfaces
{
    public interface IItemPedidoRepositorio
    {
        public Task RegistrarListaItensPedidos(List<ItemPedido> itensPedidos);
        public Task<List<int>> ObterItensPorPedidoId(int pedidoId);
    }
}
