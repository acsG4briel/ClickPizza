using api.Entidades;

namespace api.Repositorios.Interfaces
{
    public interface IItemRepositorio
    {
        public Task<List<Item>> ObterTodosItems();
    }
}
