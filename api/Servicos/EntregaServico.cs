using api.DTOs;
using api.Entidades;
using api.Repositorios;
using api.Repositorios.Interfaces;
using api.Servicos.Interfaces;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace api.Servicos
{
    public class EntregaServico(IEntregaRepositorio entregaRepositorio,
        IPedidoRepositorio pedidoRepositorio,
        IEnderecoRepositorio enderecoRepositorio,
        IItemPedidoRepositorio itemPedidoRepositorio,
        IItemRepositorio itemRepositorio,
        IEnderecoServico enderecoServico,
        ContextoBanco context) : IEntregaServico
    {
        private int USUARIO_ID_ADMIN = 1;

        private readonly IEntregaRepositorio _entregaRepositorio = entregaRepositorio;
        private readonly IPedidoRepositorio _pedidoRepositorio = pedidoRepositorio;
        private readonly IEnderecoRepositorio _enderecoRepositorio = enderecoRepositorio;
        private readonly IItemPedidoRepositorio _itemPedidoRepositorio = itemPedidoRepositorio;
        private readonly IItemRepositorio _itemRepositorio = itemRepositorio;
        private readonly IEnderecoServico _enderecoServico = enderecoServico;
        private readonly ContextoBanco _context = context;

        //TODO: Na feature de liberar pedidos, selecionar entregador.
        //GERAR ENTREGA: Adicionar no fluxo do pedido (temporariamente)
        public async Task GerarEntrega(Pedido pedido)
        {
            //OBTER DADOS PARA GERAR ENTREGA
            var entregadorId = await _entregaRepositorio.ObterEntregadorDisponivelParaEntrega();

            var enderecoOrigem = await _enderecoRepositorio.ObterEnderecoPorUsuarioId(USUARIO_ID_ADMIN);
            var origem = FormatarEnderecoParaGeocoding(enderecoOrigem);

            var enderecoDestino = await _enderecoRepositorio.ObterEnderecoPorUsuarioId(pedido.UsuarioId);
            var destino = FormatarEnderecoParaGeocoding(enderecoDestino);

            var entrega = new Entrega
            {
                PedidoId = pedido.PedidoId,
                EntregadorId = entregadorId,
                EnderecoId = enderecoDestino.EnderecoId,
                DataHoraUtcEntregaIncio = DateTime.UtcNow,
                DataHoraUtcEntregaFim = DateTime.UtcNow.AddMinutes(await _enderecoServico.CalcularTempoEntrega(origem, destino)),
            };

            await _entregaRepositorio.RegistrarEntrega(entrega);

        }

        public async Task<DadosEntregaDto> ObterUltimaEntrega(int usuarioId)
        {
            var pedido = await _pedidoRepositorio.ObterPedidoAtivoPorUsuario(usuarioId) ?? throw new Exception("Erro ao obter Entrega");
            var entrega = await _entregaRepositorio.ObterEntregaPorPedido(pedido.PedidoId);
            var endereco = await _enderecoRepositorio.ObterEnderecoPorUsuarioId(usuarioId);
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
                EntregaId = entrega.EntregaId,
                PedidoId = pedido.PedidoId,
                Endereco = enderecoFormatado,
                ItensPedidos = ObterItensPedido(items, itensPedidosIds),
                ValorTotal = pedido.ValorTotal,
                TempoRestante = (entrega.DataHoraUtcEntregaFim - DateTime.UtcNow).Minutes,
                NomeMotorista = motorista.Nome,
                PlacaVeiculo = motorista.PlacaVeiculo,
            };
        }

        public async Task FinalizarEntrega(int entregaId)
        {
            using var transaction = await _context.Database.BeginTransactionAsync();

            try
            {
                var pedido = await _entregaRepositorio.AtualizarStatusEntrega(entregaId);
                await _pedidoRepositorio.AtualizarStatusPedido(pedido.PedidoId);

                await transaction.CommitAsync();
            }
            catch
            {
                await transaction.RollbackAsync();
                throw;
            }
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

        public static string FormatarEnderecoParaGeocoding(Endereco endereco)
        {
            string ruaNumero = endereco.Rua;
            if (endereco.Numero.HasValue)
                ruaNumero += $" {endereco.Numero.Value}";

            var partes = new List<string>
             {
                 ruaNumero,
                 endereco.Bairro,
                 endereco.Cidade,
                 endereco.Estado,
                 endereco.CEP
             };

            partes = partes.Where(p => !string.IsNullOrWhiteSpace(p)).ToList();

            return string.Join(", ", partes);
        }
    }
}
