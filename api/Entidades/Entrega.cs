using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Numerics;

namespace api.Entidades
{
    public class Entrega
    {
        [Key]
        public int EntregaId { get; set; }
        [ForeignKey("Pedido")]
        public int PedidoId { get; set; }
        [ForeignKey("Entregador")]
        public int EntregadorId { get; set; }
        [ForeignKey("Endereco")]
        public int EnderecoId { get; set; }
        public DateTime DataHoraUtcEntregaIncio { get; set; }
        public DateTime DataHoraUtcEntregaFim { get; set; }
        public bool EntregaFinalizada { get; set; } = false;
        public double CoordenadasOrigemLatitude { get; set; }
        public double CoordenadasOrigemLongitude { get; set; }
        public double CoordenadasDestinoLatitude { get; set; }
        public double CoordenadasDestinoLongitude { get; set; }
    }
}
