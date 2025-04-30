using System.ComponentModel.DataAnnotations.Schema;

namespace api.Entidades
{
    public class Login
    {
        public int LoginId { get; set; }
        [ForeignKey("Usuario")]
        public int UsuarioId { get; set; }
        public string NomeLogin { get; set; } = string.Empty;
        public string SenhaLogin { get; set; } = string.Empty;
        public string EmailLogin { get; set; } = string.Empty;
        public DateTime DataHoraUtcCadastro { get; set; }
    }
}
