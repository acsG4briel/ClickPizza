using api.Entidades;

namespace api.Repositorios.Interfaces
{
    public interface IUsuarioRepositorio
    {
        public Task<Usuario> ObterUsuarioPorId(int usuarioId);
        public Task<bool> VerificarCpfExistente(string Cpf);
        public Task CadastrarUsuario(Usuario usuario);
        public Task AtualizarEnderecoUsuario(int usuarioId, int enderecoId);
    }
}
