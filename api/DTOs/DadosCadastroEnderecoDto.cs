namespace api.DTOs
{
    public class DadosCadastroEnderecoDto
    {
        public int UsuarioId { get; set; }
        public string CEP { get; set; } = string.Empty;
        public string Estado { get; set; } = string.Empty;
        public string Cidade { get; set; } = string.Empty;
        public string Bairro { get; set; } = string.Empty;
        public string Rua { get; set; } = string.Empty;
        public int? Numero { get; set; }
        public string? Complemento { get; set; }
    }
}
