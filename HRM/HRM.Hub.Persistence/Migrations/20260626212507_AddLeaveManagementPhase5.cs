using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace HRM.Hub.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class AddLeaveManagementPhase5 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "AffectsBonus",
                table: "TypeOfLeave",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "AffectsPromotion",
                table: "TypeOfLeave",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "AffectsRetirement",
                table: "TypeOfLeave",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "AffectsSalary",
                table: "TypeOfLeave",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "AffectsService",
                table: "TypeOfLeave",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "AllowsCarryover",
                table: "TypeOfLeave",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "AllowsExtension",
                table: "TypeOfLeave",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "AllowsTermination",
                table: "TypeOfLeave",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "CountsTowardsAnnualBalance",
                table: "TypeOfLeave",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "DefaultSalaryStatusId",
                table: "TypeOfLeave",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "TypeOfLeave",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsBalanceBased",
                table: "TypeOfLeave",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "MaxCarryoverDays",
                table: "TypeOfLeave",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "MaxDurationDays",
                table: "TypeOfLeave",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "RequiresAdministrativeOrder",
                table: "TypeOfLeave",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "RequiresApprovals",
                table: "TypeOfLeave",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "AnnualBalance",
                table: "LeavesBalance",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "CarriedOverBalance",
                table: "LeavesBalance",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "EarnedBalance",
                table: "LeavesBalance",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "UsedBalance",
                table: "LeavesBalance",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTime>(
                name: "ActivatedAt",
                table: "Leaves",
                type: "timestamp without time zone",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ApprovalNote",
                table: "Leaves",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ApprovedAt",
                table: "Leaves",
                type: "timestamp without time zone",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "ApproverId",
                table: "Leaves",
                type: "uuid",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CancelledAt",
                table: "Leaves",
                type: "timestamp without time zone",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ExpiredAt",
                table: "Leaves",
                type: "timestamp without time zone",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "LeaveStatusId",
                table: "Leaves",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "LegacyTypeOfLeaveId",
                table: "Leaves",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Reason",
                table: "Leaves",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "RejectedAt",
                table: "Leaves",
                type: "timestamp without time zone",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "SubmittedAt",
                table: "Leaves",
                type: "timestamp without time zone",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "LeaveApprovals",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    LeaveId = table.Column<Guid>(type: "uuid", nullable: false),
                    ApproverId = table.Column<Guid>(type: "uuid", nullable: false),
                    Decision = table.Column<int>(type: "integer", nullable: false),
                    DecidedAt = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
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
                    table.PrimaryKey("PK_LeaveApprovals", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LeaveApprovals_Leaves_LeaveId",
                        column: x => x.LeaveId,
                        principalTable: "Leaves",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "LeaveExtensions",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    LeaveId = table.Column<Guid>(type: "uuid", nullable: false),
                    ExtensionDays = table.Column<int>(type: "integer", nullable: false),
                    NewEndDate = table.Column<DateOnly>(type: "date", nullable: false),
                    OrderNo = table.Column<string>(type: "text", nullable: true),
                    OrderDate = table.Column<DateOnly>(type: "date", nullable: true),
                    Reason = table.Column<string>(type: "text", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
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
                    table.PrimaryKey("PK_LeaveExtensions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LeaveExtensions_Leaves_LeaveId",
                        column: x => x.LeaveId,
                        principalTable: "Leaves",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "LeaveTransitionLogs",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    LeaveId = table.Column<Guid>(type: "uuid", nullable: false),
                    FromStatus = table.Column<int>(type: "integer", nullable: false),
                    ToStatus = table.Column<int>(type: "integer", nullable: false),
                    TransitionedAt = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    TransitionedBy = table.Column<Guid>(type: "uuid", nullable: true),
                    Note = table.Column<string>(type: "text", nullable: true),
                    BeforeSnapshot = table.Column<string>(type: "text", nullable: true),
                    AfterSnapshot = table.Column<string>(type: "text", nullable: true),
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
                    table.PrimaryKey("PK_LeaveTransitionLogs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LeaveTransitionLogs_Leaves_LeaveId",
                        column: x => x.LeaveId,
                        principalTable: "Leaves",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Leaves_TypeOfLeaveId",
                table: "Leaves",
                column: "TypeOfLeaveId");

            migrationBuilder.CreateIndex(
                name: "IX_LeaveApproval_LeaveId",
                table: "LeaveApprovals",
                column: "LeaveId");

            migrationBuilder.CreateIndex(
                name: "IX_LeaveExtension_LeaveId",
                table: "LeaveExtensions",
                column: "LeaveId");

            migrationBuilder.CreateIndex(
                name: "IX_LeaveTransitionLog_LeaveId",
                table: "LeaveTransitionLogs",
                column: "LeaveId");

            migrationBuilder.AddForeignKey(
                name: "FK_Leaves_TypeOfLeave_TypeOfLeaveId",
                table: "Leaves",
                column: "TypeOfLeaveId",
                principalTable: "TypeOfLeave",
                principalColumn: "Id");

            migrationBuilder.Sql(@"
                INSERT INTO ""TypeOfLeave"" (""Id"", ""Name"", ""Description"", ""MaxDurationDays"", ""RequiresAdministrativeOrder"", ""RequiresApprovals"", ""AffectsService"", ""AffectsPromotion"", ""AffectsBonus"", ""AffectsSalary"", ""AffectsRetirement"", ""AllowsExtension"", ""AllowsTermination"", ""AllowsCarryover"", ""CountsTowardsAnnualBalance"", ""IsBalanceBased"", ""MaxCarryoverDays"", ""DefaultSalaryStatusId"", ""CreateAt"", ""StatusId"", ""IsDeleted"")
                VALUES
                    (0, 'غير معرف', NULL, NULL, false, false, false, false, false, false, false, false, false, false, false, false, NULL, 0, CURRENT_TIMESTAMP, 1, false),
                    (1, 'اجازة اعتيادية', 'Annual leave', 30, true, true, false, false, false, false, false, true, true, true, true, true, 15, 1, CURRENT_TIMESTAMP, 1, false),
                    (2, 'زمنية', 'Partial leave', 1, false, false, false, false, false, false, false, false, true, false, false, true, NULL, 1, CURRENT_TIMESTAMP, 1, false),
                    (3, 'اجازة مرضية', 'Sick leave', 180, true, false, false, true, false, false, false, true, true, false, false, true, NULL, 1, CURRENT_TIMESTAMP, 1, false),
                    (4, 'الامومة والوضع', 'Maternity leave', 120, true, false, false, true, false, false, false, false, false, false, false, true, NULL, 1, CURRENT_TIMESTAMP, 1, false),
                    (5, 'اجازة طويلة', 'Long leave', 365, true, true, true, true, true, true, true, true, true, false, false, false, NULL, 2, CURRENT_TIMESTAMP, 1, false),
                    (6, 'اجازة سفر', 'Travel leave', 30, true, true, false, false, false, false, false, false, true, false, false, true, NULL, 1, CURRENT_TIMESTAMP, 1, false),
                    (7, 'اجازة مرضية خاصة', 'Special sick leave', 365, true, true, false, true, false, false, false, true, true, false, false, true, NULL, 2, CURRENT_TIMESTAMP, 1, false),
                    (8, 'اجازة المعين', 'Appointee leave', NULL, true, false, false, false, false, false, false, false, true, false, false, false, NULL, 0, CURRENT_TIMESTAMP, 1, false),
                    (9, 'اجازة العدة', 'Mourning leave', 7, true, false, false, false, false, false, false, false, false, false, false, false, NULL, 1, CURRENT_TIMESTAMP, 1, false)
                ON CONFLICT (""Id"") DO UPDATE SET
                    ""Name"" = EXCLUDED.""Name"",
                    ""Description"" = EXCLUDED.""Description"",
                    ""MaxDurationDays"" = EXCLUDED.""MaxDurationDays"",
                    ""RequiresAdministrativeOrder"" = EXCLUDED.""RequiresAdministrativeOrder"",
                    ""RequiresApprovals"" = EXCLUDED.""RequiresApprovals"",
                    ""AffectsService"" = EXCLUDED.""AffectsService"",
                    ""AffectsPromotion"" = EXCLUDED.""AffectsPromotion"",
                    ""AffectsBonus"" = EXCLUDED.""AffectsBonus"",
                    ""AffectsSalary"" = EXCLUDED.""AffectsSalary"",
                    ""AffectsRetirement"" = EXCLUDED.""AffectsRetirement"",
                    ""AllowsExtension"" = EXCLUDED.""AllowsExtension"",
                    ""AllowsTermination"" = EXCLUDED.""AllowsTermination"",
                    ""AllowsCarryover"" = EXCLUDED.""AllowsCarryover"",
                    ""CountsTowardsAnnualBalance"" = EXCLUDED.""CountsTowardsAnnualBalance"",
                    ""IsBalanceBased"" = EXCLUDED.""IsBalanceBased"",
                    ""MaxCarryoverDays"" = EXCLUDED.""MaxCarryoverDays"",
                    ""DefaultSalaryStatusId"" = EXCLUDED.""DefaultSalaryStatusId"";
            ");

            migrationBuilder.Sql(@"UPDATE ""Leaves"" SET ""LegacyTypeOfLeaveId"" = ""TypeOfLeaveId"";");

            migrationBuilder.Sql(@"UPDATE ""Leaves"" SET ""LeaveStatusId"" = 4 WHERE ""LeaveStatusId"" = 0 AND ""IsDeleted"" = false;");

            migrationBuilder.Sql(@"UPDATE ""LeavesBalance"" SET ""AnnualBalance"" = COALESCE(""Balance"", 0) WHERE ""AnnualBalance"" = 0;");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Leaves_TypeOfLeave_TypeOfLeaveId",
                table: "Leaves");

            migrationBuilder.DropTable(
                name: "LeaveApprovals");

            migrationBuilder.DropTable(
                name: "LeaveExtensions");

            migrationBuilder.DropTable(
                name: "LeaveTransitionLogs");

            migrationBuilder.DropIndex(
                name: "IX_Leaves_TypeOfLeaveId",
                table: "Leaves");

            migrationBuilder.DropColumn(
                name: "AffectsBonus",
                table: "TypeOfLeave");

            migrationBuilder.DropColumn(
                name: "AffectsPromotion",
                table: "TypeOfLeave");

            migrationBuilder.DropColumn(
                name: "AffectsRetirement",
                table: "TypeOfLeave");

            migrationBuilder.DropColumn(
                name: "AffectsSalary",
                table: "TypeOfLeave");

            migrationBuilder.DropColumn(
                name: "AffectsService",
                table: "TypeOfLeave");

            migrationBuilder.DropColumn(
                name: "AllowsCarryover",
                table: "TypeOfLeave");

            migrationBuilder.DropColumn(
                name: "AllowsExtension",
                table: "TypeOfLeave");

            migrationBuilder.DropColumn(
                name: "AllowsTermination",
                table: "TypeOfLeave");

            migrationBuilder.DropColumn(
                name: "CountsTowardsAnnualBalance",
                table: "TypeOfLeave");

            migrationBuilder.DropColumn(
                name: "DefaultSalaryStatusId",
                table: "TypeOfLeave");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "TypeOfLeave");

            migrationBuilder.DropColumn(
                name: "IsBalanceBased",
                table: "TypeOfLeave");

            migrationBuilder.DropColumn(
                name: "MaxCarryoverDays",
                table: "TypeOfLeave");

            migrationBuilder.DropColumn(
                name: "MaxDurationDays",
                table: "TypeOfLeave");

            migrationBuilder.DropColumn(
                name: "RequiresAdministrativeOrder",
                table: "TypeOfLeave");

            migrationBuilder.DropColumn(
                name: "RequiresApprovals",
                table: "TypeOfLeave");

            migrationBuilder.DropColumn(
                name: "AnnualBalance",
                table: "LeavesBalance");

            migrationBuilder.DropColumn(
                name: "CarriedOverBalance",
                table: "LeavesBalance");

            migrationBuilder.DropColumn(
                name: "EarnedBalance",
                table: "LeavesBalance");

            migrationBuilder.DropColumn(
                name: "UsedBalance",
                table: "LeavesBalance");

            migrationBuilder.DropColumn(
                name: "ActivatedAt",
                table: "Leaves");

            migrationBuilder.DropColumn(
                name: "ApprovalNote",
                table: "Leaves");

            migrationBuilder.DropColumn(
                name: "ApprovedAt",
                table: "Leaves");

            migrationBuilder.DropColumn(
                name: "ApproverId",
                table: "Leaves");

            migrationBuilder.DropColumn(
                name: "CancelledAt",
                table: "Leaves");

            migrationBuilder.DropColumn(
                name: "ExpiredAt",
                table: "Leaves");

            migrationBuilder.DropColumn(
                name: "LeaveStatusId",
                table: "Leaves");

            migrationBuilder.DropColumn(
                name: "LegacyTypeOfLeaveId",
                table: "Leaves");

            migrationBuilder.DropColumn(
                name: "Reason",
                table: "Leaves");

            migrationBuilder.DropColumn(
                name: "RejectedAt",
                table: "Leaves");

            migrationBuilder.DropColumn(
                name: "SubmittedAt",
                table: "Leaves");
        }
    }
}
