using api.Entidades;
using api.Repositorios.Interfaces;
using api.Servicos.Interfaces;

namespace api.Repositorios
{
    public class PagamentoRepositorio(ContextoBanco context) : IPagamentoRepositorio
    {
        private readonly ContextoBanco _context = context;

        public async Task RegistrarPagamento(Pagamento pagamento)
        {
            await _context.Pagamentos.AddAsync(pagamento);
            await _context.SaveChangesAsync();
        }
    }
}
