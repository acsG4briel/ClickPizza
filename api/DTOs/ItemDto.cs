using api.Enums;

namespace api.DTOs
{
    public class ItemDto
    {
        public int ItemCardapioId { get; set; }
        public string NomeItem { get; set; } = string.Empty;
        public decimal PrecoItem { get; set; } 
        public TipoItem TipoItem { get; set; }
    }
}
