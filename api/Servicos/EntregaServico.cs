using api.DTOs;
using api.Entidades;
using api.Repositorios.Interfaces;
using api.Servicos.Interfaces;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace api.Servicos
{
    public class EntregaServico(IEntregaRepositorio entregaRepositorio,
        IPedidoRepositorio pedidoRepositorio,
        IEnderecoRepositorio enderecoRepositorio,
        IItemPedidoRepositorio itemPedidoRepositorio,
        IItemRepositorio itemRepositorio) : IEntregaServico
    {
        private readonly IEntregaRepositorio _entregaRepositorio = entregaRepositorio;
        private readonly IPedidoRepositorio _pedidoRepositorio = pedidoRepositorio;
        private readonly IEnderecoRepositorio _enderecoRepositorio = enderecoRepositorio;
        private readonly IItemPedidoRepositorio _itemPedidoRepositorio = itemPedidoRepositorio;
        private readonly IItemRepositorio _itemRepositorio = itemRepositorio;

        //GERAR ENTREGA: Adicionar no fluxo do pedido (temporariamente)
        //public Task GerarEntrega(int pedidoId)
        //{

        //}

        public async Task<DadosEntregaDto> ObterUltimaEntrega(int usuarioId)
        {
            var pedido = await _pedidoRepositorio.ObterPedidoAtivoPorUsuario(usuarioId) ?? throw new Exception("Erro ao obter Entrega");
            var entrega = await _entregaRepositorio.ObterEntregaPorPedido(pedido.PedidoId);
            var endereco = await _enderecoRepositorio.ObterEnderecoPorUsuarioId(pedido.PedidoId);
            var itensPedidosIds = await _itemPedidoRepositorio.ObterItensPorPedidoId(pedido.PedidoId);
            var items = await _itemRepositorio.ObterItemsPorIds(itensPedidosIds);

            var motorista = await _entregaRepositorio.ObterEntregadorPorId(entrega.EntregadorId);

            var enderecoFormatado = $"{endereco.Rua}, {endereco.Numero}";

            if (!string.IsNullOrWhiteSpace(endereco.Complemento))
            {
                enderecoFormatado += $" - {endereco.Complemento}";
            }

            return new DadosEntregaDto
            {
                PedidoId = pedido.PedidoId,
                Endereco = enderecoFormatado,
                ItensPedidos = ObterItensPedido(items, itensPedidosIds),
                ValorTotal = pedido.ValorTotal,
                TempoRestante = (entrega.DataHoraUtcEntregaFim - DateTime.UtcNow).Minutes,
                NomeMotorista = motorista.Nome,

            };
        }

        private List<ExibicaoItemDto> ObterItensPedido(List<Item> items, List<int> idItems)
        {
            var retorno = new List<ExibicaoItemDto>();
            foreach (var item in items)
            {
                retorno.Add(new ExibicaoItemDto
                {
                    Descricao = item.Descricao,
                    Quantidade = idItems.Where(id => id == item.ItemId).Count(),
                });
            }

            return retorno;
        }
    }
}
