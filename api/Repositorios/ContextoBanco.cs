using api.Entidades;
using Microsoft.EntityFrameworkCore;

namespace api.Repositorios
{
    public class ContextoBanco : DbContext
    {
        public ContextoBanco(DbContextOptions<ContextoBanco> options) : base(options) { }

        public DbSet<Endereco> Enderecos { get; set; }
        public DbSet<Entrega> Entregas { get; set; }
        public DbSet<Entregador> Entregadores { get; set; }
        public DbSet<FormaPagamento> FormasPagamento { get; set; }
        public DbSet<Item> Itens { get; set; }
        public DbSet<ItemPedido> ItensPedido { get; set; }
        public DbSet<Pedido> Pedidos { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Pagamento> Pagamentos { get; set; }
        public DbSet<Login> Logins { get; set; }
    }
}
