using api.DTOs;

namespace api.Servicos.Interfaces
{
    public interface IItemServico
    {
        public Task<List<ItemDto>> ObterItensCardapio();
    }
}
