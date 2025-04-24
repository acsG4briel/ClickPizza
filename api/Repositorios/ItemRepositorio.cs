using api.Entidades;
using api.Repositorios.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace api.Repositorios
{
    public class ItemRepositorio(ContextoBanco context) : IItemRepositorio
    {
        private readonly ContextoBanco _context = context;

        public async Task<List<Item>> ObterTodosItems()
        {
            return await _context.Itens
                .Where(item => item.QuantidadeDisponivel > 0)
                .ToListAsync();
        }

        public async Task<List<Item>> ObterItemsPorIds(List<int> itemIds)
        {
            return await _context.Itens
                .Where(item => itemIds.Contains(item.ItemId))
                .ToListAsync();
        }

        public async Task AtualizarQuantidadeItemPorIds(List<Item> itemAtualizado)
        {
            _context.Itens.UpdateRange(itemAtualizado);
            await _context.SaveChangesAsync();
        }
    }
}
