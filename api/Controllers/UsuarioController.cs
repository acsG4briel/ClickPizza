using api.Servicos.Interfaces;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController(IUsuarioServico usuarioServico) : ControllerBase
    {
        private readonly IUsuarioServico _usuarioServico = usuarioServico;

        //FEATURE: Editar e Cadastrar Usuarios
        [HttpGet]
        public async Task<IActionResult> ObterUsuarioPorId(int usuarioId)
        {
            return Ok(await _usuarioServico.ObterUsuarioPorId(usuarioId));
        }
    }
}
