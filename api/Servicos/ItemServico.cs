using api.DTOs;
using api.Repositorios.Interfaces;
using api.Servicos.Interfaces;

namespace api.Servicos
{
    public class ItemServico(IItemRepositorio itemRepositorio) : IItemServico
    {
        private readonly IItemRepositorio _itemRepositorio = itemRepositorio;

        public async Task<List<ItemDto>> ObterItensCardapio()
        {
            var itens = await _itemRepositorio.ObterTodosItems();
            var retorno = new List<ItemDto>();

            foreach (var item in itens)
            {
                retorno.Add(new ItemDto
                {
                    ItemCardapioId = item.ItemId,
                    NomeItem = item.Nome,
                    PrecoItem = item.ValorPorUnidade,
                });
            }
            
            return retorno;
        }
    }
}
