using api.Entidades;
using api.Repositorios.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace api.Repositorios
{
    public class ItemPedidoRepositorio(ContextoBanco context) : IItemPedidoRepositorio
    {
        private readonly ContextoBanco _context = context;

        public async Task RegistrarListaItensPedidos(List<ItemPedido> itensPedidos)
        {
            await _context.ItensPedido.AddRangeAsync(itensPedidos);
            await _context.SaveChangesAsync();
        }
    }
}
