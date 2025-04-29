using api.DTOs;
using api.Entidades;
using api.Repositorios.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace api.Repositorios
{
    public class LoginRepositorio(ContextoBanco context) : ILoginRepositorio
    {
        private readonly ContextoBanco _context = context;

        public async Task AdicionarLogin(Login novoLogin)
        {
            await _context.Logins.AddAsync(novoLogin);
            await _context.SaveChangesAsync();
        }

        public async Task<Login> EfetuarLogin(DadosLoginDto dados)
        {
            return await _context.Logins
                .FirstOrDefaultAsync(lg => lg.NomeLogin.Equals(dados.Login) && lg.SenhaLogin.Equals(dados.Senha)) 
                ?? new Login();
        }
    }
}
