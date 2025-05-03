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

        public async Task<bool> VerificarCpfExistente(string Cpf)
        {
            return (await _context.Usuarios.FirstOrDefaultAsync(us => us.Cpf == Cpf && us.Ativo == true)) != null;
        }

        public async Task CadastrarUsuario(Usuario usuario)
        {
            await _context.Usuarios.AddAsync(usuario);
            await _context.SaveChangesAsync();
        }

        public async Task AtualizarEnderecoUsuario(int usuarioId, int enderecoId)
        {
            var usuario = await _context.Usuarios.FirstOrDefaultAsync(us => us.UsuarioId == usuarioId);
            if (usuario == null)
                throw new Exception("Usuário não encontrado.");

            usuario.EnderecoId = enderecoId;
            await _context.SaveChangesAsync();
        }
    }
}
