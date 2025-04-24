namespace api.DTOs
{
    public class InformacoesCriacaoPedidoDto
    {
        public int UsuarioId { get; set; }
        public int FormaPagamentoId { get; set; }
        public decimal ValorTotal { get; set; }
        public List<int> ListaPedidos { get; set; } = [];
    }
}
