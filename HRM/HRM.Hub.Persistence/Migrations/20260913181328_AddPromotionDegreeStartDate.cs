using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HRM.Hub.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class AddPromotionDegreeStartDate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateOnly>(
                name: "DegreeStartDate",
                table: "Promotion",
                type: "date",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DegreeStartDate",
                table: "Promotion");
        }
    }
}
