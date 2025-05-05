using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class AlterEntrega1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "CoordenadasDestinoLatitude",
                table: "Entregas",
                type: "double precision",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "CoordenadasDestinoLongitude",
                table: "Entregas",
                type: "double precision",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "CoordenadasOrigemLatitude",
                table: "Entregas",
                type: "double precision",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "CoordenadasOrigemLongitude",
                table: "Entregas",
                type: "double precision",
                nullable: false,
                defaultValue: 0.0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CoordenadasDestinoLatitude",
                table: "Entregas");

            migrationBuilder.DropColumn(
                name: "CoordenadasDestinoLongitude",
                table: "Entregas");

            migrationBuilder.DropColumn(
                name: "CoordenadasOrigemLatitude",
                table: "Entregas");

            migrationBuilder.DropColumn(
                name: "CoordenadasOrigemLongitude",
                table: "Entregas");
        }
    }
}
