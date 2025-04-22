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
        public decimal ValorTotal { get; set; }
    }
}
