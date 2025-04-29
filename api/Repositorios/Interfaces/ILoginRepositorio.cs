using api.DTOs;
using api.Entidades;

namespace api.Repositorios.Interfaces
{
    public interface ILoginRepositorio
    {
        public Task AdicionarLogin(Login novoLogin);
        public Task<Login> EfetuarLogin(DadosLoginDto dados);
    }
}
