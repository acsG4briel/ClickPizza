using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Entidades
{
    public class FormaPagamento
    {
        [Key]
        public int FormaPagamentoId { get; set; }
        [ForeignKey("Usuario")]
        public int UsuarioId { get; set; }
        public int NumeroCartao { get; set; }
        public string Validade { get; set; } = string.Empty;
        public int CodigoValidadeCartao { get; set; }
        public bool FormatoAtivo { get; set; }
    }
}
