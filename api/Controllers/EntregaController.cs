using api.Servicos.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class EntregaController(IEntregaServico entregaServico) : ControllerBase
    {
        private readonly IEntregaServico _entregaServico = entregaServico;

        //FEATURE: Gerar entrega pela tela de admin ao liberar o pedido

        [HttpGet]
        [Route("entrega-em-andamento")]
        public async Task<IActionResult> ObterDadosEntregaEmAndamento(int usuarioId)
        {
            return Ok(await _entregaServico.ObterUltimaEntrega(usuarioId));
        }
    }
}
