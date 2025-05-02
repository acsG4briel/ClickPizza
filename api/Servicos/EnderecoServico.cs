using api.DTOs;
using api.Entidades;
using api.Repositorios.Interfaces;
using api.Servicos.Interfaces;
using System.Text.Json;

namespace api.Servicos
{
    public class EnderecoServico(IEnderecoRepositorio enderecoRepositorio,
        HttpClient httpClient,
        IUsuarioRepositorio usuarioRepositorio
        ) : IEnderecoServico
    {
        private readonly HttpClient _httpClient = httpClient;
        private readonly IEnderecoRepositorio _enderecoRepositorio = enderecoRepositorio;
        private readonly IUsuarioRepositorio _usuarioRepositorio = usuarioRepositorio;

        public async Task CadastrarNovoEndereco(DadosCadastroEnderecoDto dto)
        {
            var endereco = new Endereco
            {
                CEP = dto.CEP,
                Estado = dto.Estado,
                Cidade = dto.Cidade,
                Bairro = dto.Bairro,
                Rua = dto.Rua,
                Numero = dto.Numero,
                Complemento = dto.Complemento,
            };

            await _enderecoRepositorio.CadastrarNovoEndereco(endereco);
            await _usuarioRepositorio.AtualizarEnderecoUsuario(dto.UsuarioId, endereco.EnderecoId);
        }

        public async Task<DadosEnderecoDto?> ObterEnderecoPorCep(string cep)
        {
            cep = new string(cep.Where(char.IsDigit).ToArray());

            var response = await _httpClient.GetAsync($"https://viacep.com.br/ws/{cep}/json/");
            if (!response.IsSuccessStatusCode)
                return null;

            var json = await response.Content.ReadAsStringAsync();

            if (json.Contains("\"erro\": true"))
                return null;

            var endereco = JsonSerializer.Deserialize<DadosEnderecoDto>(json, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

            return endereco;
        }
    }
}
