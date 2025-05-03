using api.DTOs;
using api.Servicos.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class EnderecoController(IEnderecoServico enderecoServico) : ControllerBase
    {
        private readonly IEnderecoServico _enderecoServico = enderecoServico;

        [HttpGet]
        [Route("obter-por-cep")]
        public async Task<IActionResult> ObterEnderecoPorCep(string cep)
        {
            return Ok(await _enderecoServico.ObterEnderecoPorCep(cep));
        }

        [HttpPost]
        [Route("cadastrar")]
        public async Task<IActionResult> CadastrarNovoEndereco(DadosCadastroEnderecoDto dados)
        {
            await _enderecoServico.CadastrarNovoEndereco(dados);
            return Ok();
        }
    }
}
