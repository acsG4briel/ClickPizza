using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class UpdateEntidades : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ValorPagamento",
                table: "Pagamentos");

            migrationBuilder.AddColumn<int>(
                name: "FormaPagamentoId",
                table: "Pedidos",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "PedidoId",
                table: "Pagamentos",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FormaPagamentoId",
                table: "Pedidos");

            migrationBuilder.DropColumn(
                name: "PedidoId",
                table: "Pagamentos");

            migrationBuilder.AddColumn<decimal>(
                name: "ValorPagamento",
                table: "Pagamentos",
                type: "numeric",
                nullable: false,
                defaultValue: 0m);
        }
    }
}
