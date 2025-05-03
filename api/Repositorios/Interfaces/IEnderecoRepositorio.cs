using api.Entidades;

namespace api.Repositorios.Interfaces
{
    public interface IEnderecoRepositorio
    {
        public Task<Endereco> ObterEnderecoPorUsuarioId(int usuarioId);
        public Task CadastrarNovoEndereco(Endereco endereco);
    }
}
