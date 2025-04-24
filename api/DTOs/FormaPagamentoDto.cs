using System.Numerics;

namespace api.DTOs
{
    public class FormaPagamentoDto
    {
        public int FormaPagamentoId { get; set; }
        public string ApelidoCartao { get; set; } = string.Empty;
        public long? NumeroCartao { get; set; }
        public string? Validade { get; set; }
        public int? CodigoValidadeCartao { get; set; }
    }
}
