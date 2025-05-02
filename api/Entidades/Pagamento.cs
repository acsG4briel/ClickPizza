using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Entidades
{
    public class Pagamento
    {
        [Key]
        public int PagamentoId { get; set; }
        [ForeignKey("Usuario")]
        public int UsuarioId { get; set; }
        [ForeignKey("Pedido")]
        public int PedidoId { get; set; }
        public DateTime DataHoraUtcPagamento { get; set; }
    }
}
