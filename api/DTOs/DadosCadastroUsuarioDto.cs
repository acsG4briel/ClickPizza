namespace api.DTOs
{
    public class DadosCadastroUsuarioDto
    {
        public string NomeLogin { get; set; } = string.Empty;
        public string SenhaLogin { get; set; } = string.Empty;
        public string EmailLogin { get; set; } = string.Empty;
        public string Nome { get; set; } = string.Empty;
        public string Cpf { get; set; } = string.Empty;
        public long? Celular { get; set; }
    }
}
