using System.ComponentModel.DataAnnotations;

namespace api.Entidades
{
    public class Entregador
    {
        [Key]
        public int EntregadorId { get; set; }
        public string Nome { get; set; } = string.Empty;
        public string Cpf { get; set; } = string.Empty;
        public string Veiculo { get; set; } = string.Empty;
        public bool EmEntrega { get; set; }
    }
}
