using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Entidades
{
    public class Pedido
    {
        [Key]
        public int PedidoId { get; set; }
        [ForeignKey("Usuario")]
        public int UsuarioId { get; set; }
        [ForeignKey("FormaPagamento")]
        public int FormaPagamentoId { get; set; }
        public decimal ValorTotal { get; set; }
        public DateTime DataHoraUtcPedido { get; set; }
        public bool LiberadoParaEntrega { get; set; } = false;
        public bool Ativo { get; set; } = false;
    }
}
