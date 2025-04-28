namespace api.DTOs
{
    public class DadosEntregaDto
    {
        public int EntregaId { get; set; }
        public int PedidoId { get; set; }
        public string Endereco { get; set; } = string.Empty;
        public List<ExibicaoItemDto> ItensPedidos { get; set; } = [];
        //FEATURES: Adicionar localização ao sistema
        public int TempoRestante { get; set; }
        public decimal ValorTotal { get; set; }
        public string NomeMotorista { get; set; } = string.Empty;
        public string PlacaVeiculo { get; set; } = string.Empty;
    }


    public class ExibicaoItemDto
    {
        public string Descricao { get; set; } = string.Empty;
        public int Quantidade { get; set; }
    }
}
