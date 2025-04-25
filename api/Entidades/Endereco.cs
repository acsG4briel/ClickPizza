using System.ComponentModel.DataAnnotations;

namespace api.Entidades
{
    public class Endereco
    {
        [Key]
        public int EnderecoId { get; set; }
        public int CEP { get; set; }
        public string Estado { get; set; } = string.Empty;
        public string Cidade { get; set; } = string.Empty;
        public string Bairro { get; set; } = string.Empty;
        public string Rua { get; set; } = string.Empty;
        public int Numero { get; set; }
        public string? Complemento { get; set; }
    }
}
