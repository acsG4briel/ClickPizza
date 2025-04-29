using api.DTOs;
using api.Repositorios.Interfaces;
using api.Servicos.Interfaces;

namespace api.Servicos
{
    public class UsuarioServico(IUsuarioRepositorio usuarioRepositorio, 
        IEnderecoRepositorio enderecoRepositorio,
        IFormaPagamentoRepositorio formaPagamentoRepositorio) : IUsuarioServico
    {
        private readonly IUsuarioRepositorio _usuarioRepositorio = usuarioRepositorio;
        private readonly IEnderecoRepositorio _enderecoRepositorio = enderecoRepositorio;
        private readonly IFormaPagamentoRepositorio _formaPagamentoRepositorio = formaPagamentoRepositorio;

        public async Task<DadosUsuarioDto> ObterUsuarioPorId(int usuarioId)
        {
            var usuario = await _usuarioRepositorio.ObterUsuarioPorId(usuarioId);
            var formasPagamento = await _formaPagamentoRepositorio.ObterFormasPagamentoPorUsuarioId(usuarioId);
            var endereco = await _enderecoRepositorio.ObterEnderecoPorUsuarioId(usuarioId);

            var enderecoFormatado = $"{endereco.Rua}, {endereco.Numero}";

            if (!string.IsNullOrWhiteSpace(endereco.Complemento))
            {
                enderecoFormatado += $" - {endereco.Complemento}";
            }

            return new DadosUsuarioDto
            {
                UsuarioId = usuarioId,
                Nome = usuario.Nome,
                Cpf = usuario.Cpf,
                Endereco = enderecoFormatado,
                FormasPagamento = [.. formasPagamento.Select(fp => fp.Descricao)],
            };
        }
    }
}
