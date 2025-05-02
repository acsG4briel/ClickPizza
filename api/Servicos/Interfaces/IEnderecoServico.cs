using api.DTOs;

namespace api.Servicos.Interfaces
{
    public interface IEnderecoServico
    {
        public Task<DadosEnderecoDto?> ObterEnderecoPorCep(string cep);
        public Task CadastrarNovoEndereco(DadosCadastroEnderecoDto dto);
    }
}
