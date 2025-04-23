using api.Servicos.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController(IItemServico itemServico) : ControllerBase
    {
        private readonly IItemServico _itemServico = itemServico;

        [HttpGet("/todos")]
        public async Task<IActionResult> ObterItemsCardapio()
        {
            return Ok(await _itemServico.ObterItensCardapio());
        }
    }
}
