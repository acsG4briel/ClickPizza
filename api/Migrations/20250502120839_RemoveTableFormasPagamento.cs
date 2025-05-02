using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class RemoveTableFormasPagamento : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FormasPagamento");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FormasPagamento",
                columns: table => new
                {
                    FormaPagamentoId = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CodigoValidadeCartao = table.Column<int>(type: "integer", nullable: true),
                    Descricao = table.Column<string>(type: "text", nullable: false),
                    FormatoAtivo = table.Column<bool>(type: "boolean", nullable: false),
                    NumeroCartao = table.Column<long>(type: "bigint", nullable: true),
                    UsuarioId = table.Column<int>(type: "integer", nullable: false),
                    Validade = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FormasPagamento", x => x.FormaPagamentoId);
                });
        }
    }
}
