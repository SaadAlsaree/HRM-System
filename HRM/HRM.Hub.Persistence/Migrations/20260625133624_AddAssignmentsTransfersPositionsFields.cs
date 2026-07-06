using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace HRM.Hub.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class AddAssignmentsTransfersPositionsFields : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ProvinceId",
                table: "Territory",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsRead",
                table: "TeamNotifications",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "NotificationDate",
                table: "TeamNotifications",
                type: "timestamp without time zone",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Type",
                table: "TeamNotifications",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "GovernorateId",
                table: "Province",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "EndDate",
                table: "Interruption",
                type: "timestamp without time zone",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "StartDate",
                table: "Interruption",
                type: "timestamp without time zone",
                nullable: true);

            migrationBuilder.AddColumn<DateOnly>(
                name: "StartDate",
                table: "EmployeePositions",
                type: "date",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "ExtendedBy",
                table: "Assignments",
                type: "uuid",
                nullable: true);

            migrationBuilder.AddColumn<DateOnly>(
                name: "ExtensionDate",
                table: "Assignments",
                type: "date",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ExtensionReason",
                table: "Assignments",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "IssuingAuthority",
                table: "Assignments",
                type: "text",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Affiliations",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    TypeOfAssignmentId = table.Column<int>(type: "integer", nullable: true),
                    OrderNo = table.Column<string>(type: "text", nullable: true),
                    OrderDate = table.Column<DateOnly>(type: "date", nullable: true),
                    IssuingAuthority = table.Column<string>(type: "text", nullable: true),
                    AssignmentSite = table.Column<int>(type: "integer", nullable: false),
                    OriginalEntity = table.Column<string>(type: "text", nullable: true),
                    Ministry = table.Column<string>(type: "text", nullable: true),
                    ReasonForJoining = table.Column<string>(type: "text", nullable: true),
                    DurationMonths = table.Column<int>(type: "integer", nullable: true),
                    FromDate = table.Column<DateOnly>(type: "date", nullable: true),
                    ToDate = table.Column<DateOnly>(type: "date", nullable: true),
                    RenewalCount = table.Column<int>(type: "integer", nullable: false),
                    MaxRenewals = table.Column<int>(type: "integer", nullable: true),
                    ReleaseOrderDate = table.Column<DateOnly>(type: "date", nullable: true),
                    ReleaseOrderNo = table.Column<string>(type: "text", nullable: true),
                    ReleaseDate = table.Column<DateOnly>(type: "date", nullable: true),
                    EndOrderNo = table.Column<string>(type: "text", nullable: true),
                    EndOrderDate = table.Column<DateOnly>(type: "date", nullable: true),
                    Note = table.Column<string>(type: "text", nullable: true),
                    CreateAt = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    CreateBy = table.Column<Guid>(type: "uuid", nullable: true),
                    LastUpdateAt = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    LastUpdateBy = table.Column<Guid>(type: "uuid", nullable: true),
                    StatusId = table.Column<int>(type: "integer", nullable: false),
                    IsDeleted = table.Column<bool>(type: "boolean", nullable: false),
                    DeletedAt = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    DoneProcdureDate = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    DeletedBy = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Affiliations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Affiliations_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Affiliations_TypeOfAssignment_TypeOfAssignmentId",
                        column: x => x.TypeOfAssignmentId,
                        principalTable: "TypeOfAssignment",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "ContractType",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: true),
                    CreateAt = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    CreateBy = table.Column<Guid>(type: "uuid", nullable: true),
                    LastUpdateAt = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    LastUpdateBy = table.Column<Guid>(type: "uuid", nullable: true),
                    StatusId = table.Column<int>(type: "integer", nullable: false),
                    IsDeleted = table.Column<bool>(type: "boolean", nullable: false),
                    DeletedAt = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    DoneProcdureDate = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    DeletedBy = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContractType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DepartmentOwners",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    DepartmentId = table.Column<int>(type: "integer", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    FromDate = table.Column<DateOnly>(type: "date", nullable: true),
                    ToDate = table.Column<DateOnly>(type: "date", nullable: true),
                    IsActive = table.Column<bool>(type: "boolean", nullable: false),
                    CreateAt = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    CreateBy = table.Column<Guid>(type: "uuid", nullable: true),
                    LastUpdateAt = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    LastUpdateBy = table.Column<Guid>(type: "uuid", nullable: true),
                    StatusId = table.Column<int>(type: "integer", nullable: false),
                    IsDeleted = table.Column<bool>(type: "boolean", nullable: false),
                    DeletedAt = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    DoneProcdureDate = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    DeletedBy = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DepartmentOwners", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DepartmentOwners_Departments_DepartmentId",
                        column: x => x.DepartmentId,
                        principalTable: "Departments",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_DepartmentOwners_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Territory_ProvinceId",
                table: "Territory",
                column: "ProvinceId");

            migrationBuilder.CreateIndex(
                name: "IX_Province_GovernorateId",
                table: "Province",
                column: "GovernorateId");

            migrationBuilder.CreateIndex(
                name: "IX_Affiliations_EmployeeId",
                table: "Affiliations",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_Affiliations_TypeOfAssignmentId",
                table: "Affiliations",
                column: "TypeOfAssignmentId");

            migrationBuilder.CreateIndex(
                name: "IX_DepartmentOwners_DepartmentId",
                table: "DepartmentOwners",
                column: "DepartmentId");

            migrationBuilder.CreateIndex(
                name: "IX_DepartmentOwners_EmployeeId",
                table: "DepartmentOwners",
                column: "EmployeeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Province_Governorate_GovernorateId",
                table: "Province",
                column: "GovernorateId",
                principalTable: "Governorate",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Territory_Province_ProvinceId",
                table: "Territory",
                column: "ProvinceId",
                principalTable: "Province",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Province_Governorate_GovernorateId",
                table: "Province");

            migrationBuilder.DropForeignKey(
                name: "FK_Territory_Province_ProvinceId",
                table: "Territory");

            migrationBuilder.DropTable(
                name: "Affiliations");

            migrationBuilder.DropTable(
                name: "ContractType");

            migrationBuilder.DropTable(
                name: "DepartmentOwners");

            migrationBuilder.DropIndex(
                name: "IX_Territory_ProvinceId",
                table: "Territory");

            migrationBuilder.DropIndex(
                name: "IX_Province_GovernorateId",
                table: "Province");

            migrationBuilder.DropColumn(
                name: "ProvinceId",
                table: "Territory");

            migrationBuilder.DropColumn(
                name: "IsRead",
                table: "TeamNotifications");

            migrationBuilder.DropColumn(
                name: "NotificationDate",
                table: "TeamNotifications");

            migrationBuilder.DropColumn(
                name: "Type",
                table: "TeamNotifications");

            migrationBuilder.DropColumn(
                name: "GovernorateId",
                table: "Province");

            migrationBuilder.DropColumn(
                name: "EndDate",
                table: "Interruption");

            migrationBuilder.DropColumn(
                name: "StartDate",
                table: "Interruption");

            migrationBuilder.DropColumn(
                name: "StartDate",
                table: "EmployeePositions");

            migrationBuilder.DropColumn(
                name: "ExtendedBy",
                table: "Assignments");

            migrationBuilder.DropColumn(
                name: "ExtensionDate",
                table: "Assignments");

            migrationBuilder.DropColumn(
                name: "ExtensionReason",
                table: "Assignments");

            migrationBuilder.DropColumn(
                name: "IssuingAuthority",
                table: "Assignments");
        }
    }
}
