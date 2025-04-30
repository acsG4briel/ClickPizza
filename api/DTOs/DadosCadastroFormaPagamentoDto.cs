namespace api.DTOs
{
    public class DadosCadastroFormaPagamentoDto
    {
        public int UsuarioId { get; set; }
        public string Descricao { get; set; } = string.Empty;
        public long? NumeroCartao { get; set; }
        public string? Validade { get; set; }
        public int? CodigoValidadeCartao { get; set; }
    }
}
