using api.DTOs;

namespace api.Servicos.Interfaces
{
    public interface IUsuarioServico
    {
        public Task CadastrarUsuario(DadosCadastroUsuarioDto dados);
        public Task<DadosUsuarioDto> RealizarLoginUsuario(DadosLoginDto dados);
    }
}
