using api.Entidades;

namespace api.Repositorios.Interfaces
{
    public interface IPedidoRepositorio
    {
        public Task RegistrarPedido(Pedido pedido);
        public Task<Pedido?> ObterPedidoAtivoPorUsuario(int usuarioId);
        public Task AtualizarStatusPedido(int pedidoId);
    }
}
