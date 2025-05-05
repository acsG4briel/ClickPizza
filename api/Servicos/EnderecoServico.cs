using api.DTOs;
using api.Entidades;
using api.Repositorios.Interfaces;
using api.Servicos.Interfaces;
using Stripe;
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

        public async Task<DadosTrajetoEntregaDto> ObterDadosTrajetoEntrega(string enderecoOrigem, string enderecoDestino)
        {
            var apiKey = "5b3ce3597851110001cf6248c300b0ab269745faaaf7af97e50b4d9d";

            var coordenadasOrigem = await TransformarEnderecoEmCoordenadas(enderecoOrigem, apiKey);
            var coordenadasDestino = await TransformarEnderecoEmCoordenadas(enderecoDestino, apiKey);

            var url = "https://api.openrouteservice.org/v2/directions/driving-car";

            var requestBody = new
            {
                coordinates = new[]
                {
                   new[] { coordenadasOrigem.Longitude, coordenadasOrigem.Latitude },
                   new[] { coordenadasDestino.Longitude, coordenadasDestino.Latitude }
                }
            };

            string body = JsonSerializer.Serialize(requestBody);

            var request = new HttpRequestMessage(HttpMethod.Post, url);
            request.Headers.Add("Authorization", apiKey);
            request.Content = new StringContent(body, System.Text.Encoding.UTF8, "application/json");

            var response = await _httpClient.SendAsync(request);

            if (!response.IsSuccessStatusCode)
            {
                var errorContent = await response.Content.ReadAsStringAsync();
                throw new Exception($"Erro na chamada à API: {response.StatusCode} - {errorContent}");
            }

            var json = await response.Content.ReadAsStringAsync();
            using var doc = JsonDocument.Parse(json);

            var routes = doc.RootElement.GetProperty("routes");
            if (routes.GetArrayLength() == 0)
                throw new Exception("Nenhuma rota encontrada.");

            var summary = routes[0].GetProperty("summary");
            double durationSeconds = summary.GetProperty("duration").GetDouble();
            int duracao = (int)(durationSeconds / 60);

            return new DadosTrajetoEntregaDto
            {
                TempoRestante = duracao,
                CoordenadasOrigem = coordenadasOrigem,
                CoordenadasDestino = coordenadasDestino,
            };
        }



        private async Task<CoordenadasDto> TransformarEnderecoEmCoordenadas(string endereco, string apiKey)
        {
            var url = $"https://api.openrouteservice.org/geocode/search?api_key={apiKey}&text={Uri.EscapeDataString(endereco)}";

            var response = await httpClient.GetAsync(url);
            response.EnsureSuccessStatusCode();

            var json = await response.Content.ReadAsStringAsync();
            using var doc = JsonDocument.Parse(json);


            var features = doc.RootElement.GetProperty("features");
            if (features.GetArrayLength() == 0)
                throw new Exception("Endereço não encontrado");

            var coords = features[0].GetProperty("geometry").GetProperty("coordinates");
            double lon = coords[0].GetDouble();
            double lat = coords[1].GetDouble();

            return new CoordenadasDto
            {
                Latitude = lat,
                Longitude = lon,
            };
        }
    }
}
