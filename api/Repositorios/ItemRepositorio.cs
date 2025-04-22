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
            return await _context.Itens.ToListAsync();
        }
    }
}
