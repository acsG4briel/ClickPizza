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
        public async Task RegistrarEntrega(Entrega entrega)
        {
            await _context.Entregas.AddAsync(entrega);
            await _context.SaveChangesAsync();
        }

        public async Task<Entrega> AtualizarStatusEntrega(int entregaId)
        {
            var entrega = await _context.Entregas.FirstAsync(e => e.EntregaId == entregaId);

            entrega.EntregaFinalizada = true;
            entrega.DataHoraUtcEntregaFim = DateTime.UtcNow;

            await _context.SaveChangesAsync();

            return entrega;
        }

        //TODO: Mover para repositorio próprio em feature entregadores
        public async Task<Entregador> ObterEntregadorPorId(int entregadorId)
        {
            return await _context.Entregadores.FirstAsync(e => e.EntregadorId == entregadorId);
        }

        public async Task<int> ObterEntregadorDisponivelParaEntrega()
        {
            var entregador = await _context.Entregadores.FirstAsync(e => e.EmEntrega == false);
            return entregador.EntregadorId;
        }
    }
}
