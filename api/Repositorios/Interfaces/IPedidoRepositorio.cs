using api.Entidades;

namespace api.Repositorios.Interfaces
{
    public interface IPedidoRepositorio
    {
        public Task RegistrarPedido(Pedido pedido);
    }
}
