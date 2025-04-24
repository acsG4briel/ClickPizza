using api.Servicos.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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
    }
}
