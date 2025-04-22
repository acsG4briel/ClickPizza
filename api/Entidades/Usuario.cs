using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Entidades
{
    public class Usuario
    {
        [Key]
        public int UsuarioId { get; set; }
        [ForeignKey("Endereco")]
        public int EnderecoId { get; set; }
        public string Nome { get; set; } = string.Empty;
        public int Cpf { get; set; }
    }
}
