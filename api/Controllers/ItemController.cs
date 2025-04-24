using api.Servicos.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ItemController(IItemServico itemServico) : ControllerBase
    {
        private readonly IItemServico _itemServico = itemServico;

        [HttpGet]
        [Route("todos")]
        public async Task<IActionResult> ObterItemsCardapio()
        {
            return Ok(await _itemServico.ObterItensCardapio());
        }
    }
}
