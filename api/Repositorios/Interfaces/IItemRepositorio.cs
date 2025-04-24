using api.Entidades;

namespace api.Repositorios.Interfaces
{
    public interface IItemRepositorio
    {
        public Task<List<Item>> ObterTodosItems();
        public Task<List<Item>> ObterItemsPorIds(List<int> itemIds);
        public Task AtualizarQuantidadeItemPorIds(List<Item> itemAtualizado);
    }
}
