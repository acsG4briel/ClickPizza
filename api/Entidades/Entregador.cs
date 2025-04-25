using System.ComponentModel.DataAnnotations;

namespace api.Entidades
{
    public class Entregador
    {
        [Key]
        public int EntregadorId { get; set; }
        public string Nome { get; set; } = string.Empty;
        public string Cpf { get; set; } = string.Empty;
        public long? Celular { get; set; }
        public string Veiculo { get; set; } = string.Empty;
        public string PlacaVeiculo { get; set; } = string.Empty;
        public bool EmEntrega { get; set; } = false;
        public bool Ativo { get; set; } = true;
    }
}
