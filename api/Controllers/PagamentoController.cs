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
        //FEATURES: Cadastro formas de pagamento e GateWays de Pagamento.

        private readonly IPagamentoServico _pagamentoServico = pagamentoServico;

        [HttpGet]
        [Route("{usuarioId}")]
        public async Task<IActionResult> ObterFormasPagamentoUsuario([FromRoute] int usuarioId)
        {
            return Ok(await _pagamentoServico.ObterFormasPagamentoPorUsuario(usuarioId));
        }

        [HttpPost]
        [Route("novo-pagamento")]
        public async Task<IActionResult> CadastrarNovaFormaPagamento(DadosCadastroFormaPagamentoDto dados)
        {
            await _pagamentoServico.CadastrarNovaFormaPagamento(dados);
            return Ok();
        }

        [HttpPatch]
        [Route("excluir/{formaPagamentoId}")]
        public async Task<IActionResult> ExcluirFormaPagamento([FromRoute]int formaPagamentoId)
        {
            await _pagamentoServico.InativarFormaPagamentoPorId(formaPagamentoId);
            return Ok();
        }

        //ENDPOINT PAGAMENTO
        [HttpPost("criar-intencao")]
        public ActionResult CriarIntencaoPagamento([FromBody] decimal valor)
        {
            var options = new PaymentIntentCreateOptions
            {
                Amount = (long)(valor * 100),
                Currency = "brl",
                PaymentMethodTypes = new List<string> { "card" },
            };
            var service = new PaymentIntentService();
            var paymentIntent = service.Create(options);

            return Ok(new { clientSecret = paymentIntent.ClientSecret });
        }

    }
}
