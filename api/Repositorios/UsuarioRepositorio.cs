using api.Entidades;
using api.Repositorios.Interfaces;
using api.Servicos.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace api.Repositorios
{
    public class UsuarioRepositorio(ContextoBanco context) : IUsuarioRepositorio
    {
        private readonly ContextoBanco _context = context;

        public async Task<Usuario> ObterUsuarioPorId(int usuarioId)
        {
            return await _context.Usuarios.FirstAsync(u => u.UsuarioId == usuarioId 
                                                            && u.Administrador == false 
                                                            && u.Ativo == true);
        }
    }
}
