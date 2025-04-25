using api.Entidades;
using api.Repositorios.Interfaces;
using Microsoft.EntityFrameworkCore;

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

        public async Task<Pedido?> ObterPedidoAtivoPorUsuario(int usuarioId)
        {
            return await _context.Pedidos.FirstOrDefaultAsync(pedido => pedido.UsuarioId == usuarioId 
                && pedido.LiberadoParaEntrega == true 
                && pedido.Ativo == true);
        }
    }
}
