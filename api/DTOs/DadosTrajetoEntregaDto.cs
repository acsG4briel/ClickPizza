namespace api.DTOs
{
    public class DadosTrajetoEntregaDto
    {
        public int TempoRestante { get; set; }
        public CoordenadasDto CoordenadasOrigem { get; set; } = new();
        public CoordenadasDto CoordenadasDestino { get; set; } = new();
    }
}
