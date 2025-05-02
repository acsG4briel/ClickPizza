namespace api.DTOs
{
    public class DadosUsuarioDto
    {
        public int UsuarioId { get; set; }
        public string Nome { get; set; } = string.Empty;
        public string Cpf { get; set; } = string.Empty;
        public string Endereco { get; set; } = string.Empty;
    }
}
