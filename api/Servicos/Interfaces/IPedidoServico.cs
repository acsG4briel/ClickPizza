using api.DTOs;

namespace api.Servicos.Interfaces
{
    public interface IPedidoServico
    {
        public Task EnviarPedido(InformacoesCriacaoPedidoDto informacoes);
    }
}
