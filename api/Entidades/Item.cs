using System.ComponentModel.DataAnnotations;

namespace api.Entidades
{
    public class Item
    {
        [Key]
        public int ItemId { get; set; }
        public string Nome { get; set; } = string.Empty;
        public string Descricao { get; set; } = string.Empty;
        public decimal ValorPorUnidade { get; set; }
        public int QuantidadeDisponivel { get; set; }
    }
}
