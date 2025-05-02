using api.DTOs;
using api.Entidades;
using Stripe;

namespace api.Servicos.Interfaces
{
    public interface IPagamentoServico
    {
        public string GerarIntencaoDePagamento(decimal valor);
    }
}
