using api.Entidades;

namespace api.Repositorios.Interfaces
{
    public interface IUsuarioRepositorio
    {
        public Task<Usuario> ObterUsuarioPorId(int usuarioId);
    }
}
