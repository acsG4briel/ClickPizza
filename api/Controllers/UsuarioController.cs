using api.DTOs;
using api.Servicos.Interfaces;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UsuarioController(IUsuarioServico usuarioServico) : ControllerBase
    {
        private readonly IUsuarioServico _usuarioServico = usuarioServico;

        [HttpGet]
        [Route("login")]
        public async Task<IActionResult> EfetuarLogin([FromQuery]DadosLoginDto dados)
        {
            return Ok(await _usuarioServico.RealizarLoginUsuario(dados));
        }

        [HttpPost]
        [Route("cadastro")]
        public async Task<IActionResult> CadastrarUsuario(DadosCadastroUsuarioDto dados)
        {
            await _usuarioServico.CadastrarUsuario(dados);
            return Ok();
        }

        //FEATURE: Editar perfil
    }
}
