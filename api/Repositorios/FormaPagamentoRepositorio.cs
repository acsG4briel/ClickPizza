using api.Entidades;
using api.Repositorios.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace api.Repositorios
{
    public class FormaPagamentoRepositorio(ContextoBanco context) : IFormaPagamentoRepositorio
    {
        private readonly ContextoBanco _context = context;
        public async Task<List<FormaPagamento>> ObterFormasPagamentoPorUsuarioId(int usuarioId)
        {
            return await _context.FormasPagamento
                .Where(fp => fp.UsuarioId == usuarioId && fp.FormatoAtivo == true)
                .ToListAsync();
        }
    }
}
