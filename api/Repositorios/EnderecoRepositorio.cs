using api.Entidades;
using api.Repositorios.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace api.Repositorios
{
    public class EnderecoRepositorio(ContextoBanco context) : IEnderecoRepositorio
    {
        private readonly ContextoBanco _context = context;
        public async Task<Endereco> ObterEnderecoPorUsuarioId(int usuarioId)
        {
            var enderecoId = await _context.Usuarios
                .Where(u => u.UsuarioId == usuarioId)
                .Select(u => u.EnderecoId)
                .FirstOrDefaultAsync();

            return await _context.Enderecos.FirstAsync(end => end.EnderecoId == enderecoId);
        }
    }
}
