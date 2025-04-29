using api.DTOs;

namespace api.Servicos.Interfaces
{
    public interface IUsuarioServico
    {
        public Task<DadosUsuarioDto> ObterUsuarioPorId(int usuarioId);
    }
}
