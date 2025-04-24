using api.DTOs;

namespace api.Servicos.Interfaces
{
    public interface IPagamentoServico
    {
        public Task<List<FormaPagamentoDto>> ObterFormasPagamentoPorUsuario(int usuarioId);
    }
}
