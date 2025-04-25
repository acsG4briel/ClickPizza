using api.Entidades;
using api.Repositorios.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace api.Repositorios
{
    public class EntregaRepositorio(ContextoBanco context) : IEntregaRepositorio
    {
        private readonly ContextoBanco _context = context;

        public async Task<Entrega> ObterEntregaPorPedido(int pedidoId)
        {
            return await _context.Entregas
                .FirstAsync(entrega => entrega.PedidoId == pedidoId && entrega.EntregaFinalizada == false);
        }

        //TODO: Mover para repositorio próprio em feature entregadores
        public async Task<Entregador> ObterEntregadorPorId(int entregadorId)
        {
            return await _context.Entregadores.FirstAsync(e => e.EntregadorId == entregadorId);
        }
    }
}
