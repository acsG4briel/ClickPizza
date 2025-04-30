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

        public async Task CadastrarNovaFormaPagamento(FormaPagamento formaPagamento)
        {
            await _context.FormasPagamento.AddAsync(formaPagamento);
            await _context.SaveChangesAsync();
        }

        public async Task InativarFormaPagamento(int formaPagamentoId)
        {
            var formaPagamento = await _context.FormasPagamento
                .FirstOrDefaultAsync(f => f.FormaPagamentoId == formaPagamentoId);

            if (formaPagamento != null)
            {
                formaPagamento.FormatoAtivo = false;
                await _context.SaveChangesAsync();
            }
        }
    }
}
