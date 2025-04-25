using api.DTOs;

namespace api.Servicos.Interfaces
{
    public interface IEntregaServico
    {
        public Task<DadosEntregaDto> ObterUltimaEntrega(int usuarioId);
    }
}
