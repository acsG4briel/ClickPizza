using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Entidades
{
    public class ItemPedido
    {
        [Key]
        public int ItemPedidoId { get; set; }
        [ForeignKey("Pedido")]
        public int PedidoId { get; set; }
        [ForeignKey("Item")]
        public int ItemId { get; set; }
    }
}
