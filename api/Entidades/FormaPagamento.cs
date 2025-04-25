using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Numerics;

namespace api.Entidades
{
    public class FormaPagamento
    {
        [Key]
        public int FormaPagamentoId { get; set; }
        [ForeignKey("Usuario")]
        public int UsuarioId { get; set; }
        public string Descricao { get; set; } = string.Empty;
        public long? NumeroCartao { get; set; }
        public string? Validade { get; set; }
        public int? CodigoValidadeCartao { get; set; }
        public bool FormatoAtivo { get; set; }
    }
}
