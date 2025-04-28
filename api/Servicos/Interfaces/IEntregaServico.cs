using api.DTOs;
using api.Entidades;

namespace api.Servicos.Interfaces
{
    public interface IEntregaServico
    {
        public Task<DadosEntregaDto> ObterUltimaEntrega(int usuarioId);
        public Task GerarEntrega(Pedido pedido);
        public Task FinalizarEntrega(int entregaId);
    }
}
