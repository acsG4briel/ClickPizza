using api.DTOs;
using api.Entidades;
using api.Repositorios.Interfaces;
using api.Servicos.Interfaces;
using System.Formats.Asn1;

namespace api.Servicos
{
    public class UsuarioServico(IUsuarioRepositorio usuarioRepositorio, 
        IEnderecoRepositorio enderecoRepositorio,
        ILoginRepositorio loginRepositorio) : IUsuarioServico
    {
        private readonly IUsuarioRepositorio _usuarioRepositorio = usuarioRepositorio;
        private readonly IEnderecoRepositorio _enderecoRepositorio = enderecoRepositorio;
        private readonly ILoginRepositorio _loginRepositorio = loginRepositorio;

        public async Task CadastrarUsuario(DadosCadastroUsuarioDto dados)
        {
            //Buscar se ja existe cadastro com email/cpf
            var cpfCadastrado = await _usuarioRepositorio.VerificarCpfExistente(dados.Cpf);
            if(cpfCadastrado)
            {
                throw new Exception("Cpf ja cadastrado.");
            }

            //Montar Usuario e cadastrar em banco
            var usuario = new Usuario
            {
                EnderecoId = 0,
                Nome = dados.Nome,
                Cpf = dados.Cpf,
                Celular = dados.Celular,
                Ativo = true,
            };

            await _usuarioRepositorio.CadastrarUsuario(usuario);

            //Montar Login e cadastrar em banco
            var login = new Login
            {
                UsuarioId = usuario.UsuarioId,
                NomeLogin = dados.NomeLogin,
                SenhaLogin = dados.SenhaLogin,
                EmailLogin = dados.EmailLogin,
                DataHoraUtcCadastro = DateTime.UtcNow,
            };

            await _loginRepositorio.AdicionarLogin(login);
        }

        public async Task<DadosUsuarioDto> RealizarLoginUsuario(DadosLoginDto dados)
        {
            var login = await _loginRepositorio.EfetuarLogin(dados);

            if(login == null)
            {
                throw new Exception("Login ou Senha incorretos.");
            }

            return await ObterUsuarioPorId(login.UsuarioId);
        }

        private async Task<DadosUsuarioDto> ObterUsuarioPorId(int usuarioId)
        {
            var usuario = await _usuarioRepositorio.ObterUsuarioPorId(usuarioId);
            var endereco = await _enderecoRepositorio.ObterEnderecoPorUsuarioId(usuarioId);

            var enderecoFormatado = string.Empty;
            if(endereco != null)
            {
                enderecoFormatado = $"{endereco.Rua}, {endereco.Numero}";

                if (!string.IsNullOrWhiteSpace(endereco.Complemento))
                {
                    enderecoFormatado += $" - {endereco.Complemento}";
                }
            }
            

            return new DadosUsuarioDto
            {
                UsuarioId = usuarioId,
                Nome = usuario.Nome,
                Cpf = usuario.Cpf,
                Endereco = enderecoFormatado,
            };
        }
    }
}
