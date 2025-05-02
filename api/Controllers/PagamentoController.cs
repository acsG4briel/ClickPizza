using api.DTOs;
using api.Servicos.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Stripe;

namespace api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PagamentoController(IPagamentoServico pagamentoServico) : ControllerBase
    {
        private readonly IPagamentoServico _pagamentoServico = pagamentoServico;

        //ENDPOINT PAGAMENTO
        [HttpPost("criar-intencao")]
        public ActionResult CriarIntencaoPagamento([FromBody] decimal valor)
        {
            return Ok(_pagamentoServico.GerarIntencaoDePagamento(valor));
        }

    }
}
