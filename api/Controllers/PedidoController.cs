using api.DTOs;
using api.Servicos.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PedidoController(IPedidoServico pedidoServico) : ControllerBase
    {
        //FEATURE: Liberar pedido via tela admin

        private readonly IPedidoServico _pedidoServico = pedidoServico;

        [HttpPost]
        [Route("enviar-pedido")]
        public async Task<IActionResult> EnviarPedido([FromBody] InformacoesCriacaoPedidoDto informacoes)
        {
            await _pedidoServico.EnviarPedido(informacoes);
            return Ok();
        }
    }
}
