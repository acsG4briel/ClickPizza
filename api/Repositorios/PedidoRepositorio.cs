using api.Entidades;
using api.Repositorios.Interfaces;

namespace api.Repositorios
{
    public class PedidoRepositorio(ContextoBanco context) : IPedidoRepositorio
    {
        private readonly ContextoBanco _context = context;

        public async Task RegistrarPedido(Pedido pedido)
        {
            await _context.Pedidos.AddAsync(pedido);
            await _context.SaveChangesAsync();
        }
    }
}
