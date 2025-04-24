using api.DTOs;
using api.Entidades;
using api.Repositorios;
using api.Repositorios.Interfaces;
using api.Servicos.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace api.Servicos
{
    public class PedidoServico(IPedidoRepositorio pedidoRepositorio,
        IItemPedidoRepositorio itemPedidoRepositorio,
        IItemRepositorio itemRepositorio,
        IPagamentoRepositorio pagamentoRepositorio,
        ContextoBanco context) : IPedidoServico
    {
        private readonly IPedidoRepositorio _pedidoRepositorio = pedidoRepositorio;
        private readonly IItemPedidoRepositorio _itemPedidoRepositorio = itemPedidoRepositorio;
        private readonly IItemRepositorio _itemRepositorio = itemRepositorio;
        private readonly IPagamentoRepositorio _pagamentoRepositorio = pagamentoRepositorio;
        private readonly ContextoBanco _context = context;

        public async Task EnviarPedido(InformacoesCriacaoPedidoDto informacoes)
        {
            var pedido = new Pedido
            {
                UsuarioId = informacoes.UsuarioId,
                FormaPagamentoId = informacoes.FormaPagamentoId,
                ValorTotal = informacoes.ValorTotal,
                LiberadoParaEntrega = true,
            };

            //TODO: Adicionar transações
            using var transaction = await _context.Database.BeginTransactionAsync();

            try
            {
                await _pedidoRepositorio.RegistrarPedido(pedido);
                await InserirListaDeItensPedidos(informacoes, pedido);
                await AtualizarQuantidadeItens(informacoes);
                await InserirInformacoesPagamento(pedido);

                await transaction.CommitAsync();
            }
            catch
            {
                await transaction.RollbackAsync();
                throw;
            }
        }

        private async Task InserirInformacoesPagamento(Pedido pedido)
        {
            var pagamento = new Pagamento
            {
                UsuarioId = pedido.UsuarioId,
                FormaPagamentoId = pedido.FormaPagamentoId,
                PedidoId = pedido.PedidoId,
                DataHoraUtcPagamento = DateTime.UtcNow,
            };

            await _pagamentoRepositorio.RegistrarPagamento(pagamento);
        }

        private async Task AtualizarQuantidadeItens(InformacoesCriacaoPedidoDto informacoes)
        {
            var dictId = informacoes.ListaPedidos
                                .GroupBy(id => id)
                                .ToDictionary(g => g.Key, g => g.Count());

            var itemsParaAtualizar = await _itemRepositorio.ObterItemsPorIds([.. dictId.Keys]);

            foreach (var item in itemsParaAtualizar)
            {
                if (dictId.TryGetValue(item.ItemId, out int quantidadePedida))
                {
                    item.QuantidadeDisponivel -= quantidadePedida;
                    if (item.QuantidadeDisponivel < 0)
                        item.QuantidadeDisponivel = 0;
                }
            }

            await _itemRepositorio.AtualizarQuantidadeItemPorIds(itemsParaAtualizar);
        }

        private async Task InserirListaDeItensPedidos(InformacoesCriacaoPedidoDto informacoes, Pedido pedido)
        {
            var itensPedidos = new List<ItemPedido>();

            foreach (var id in informacoes.ListaPedidos)
            {
                itensPedidos.Add(new ItemPedido
                {
                    PedidoId = pedido.PedidoId,
                    ItemId = id,
                });
            }

            await _itemPedidoRepositorio.RegistrarListaItensPedidos(itensPedidos);
        }
    }
}
