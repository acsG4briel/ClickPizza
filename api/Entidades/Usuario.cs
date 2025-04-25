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
        public string Cpf { get; set; } = string.Empty;
        public long? Celular { get; set; }
        public bool Ativo { get; set; } = true;
        public bool Administrador { get; set; } = false;
    }
}
