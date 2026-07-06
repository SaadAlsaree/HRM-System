using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace HRM.Hub.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class AddPromotionLastAllowanceDate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "EffectAction",
                table: "TypeOfService",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "EffectScope",
                table: "TypeOfService",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "AffectsAllowance",
                table: "TypeOfDisciplinary",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "AffectsPromotion",
                table: "TypeOfDisciplinary",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "DefaultDelayDays",
                table: "TypeOfDisciplinary",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ConsumedAt",
                table: "ThanksAndSeniority",
                type: "timestamp without time zone",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "ConsumedCalculationRunId",
                table: "ThanksAndSeniority",
                type: "uuid",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsConsumed",
                table: "ThanksAndSeniority",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "AffectsAllowance",
                table: "StudyLeave",
                type: "boolean",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "AffectsPromotion",
                table: "StudyLeave",
                type: "boolean",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "DelayMonthsOverride",
                table: "StudyLeave",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<DateOnly>(
                name: "LastAllowanceDate",
                table: "Promotion",
                type: "date",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "AffectsAllowance",
                table: "Leaves",
                type: "boolean",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "AffectsPromotion",
                table: "Leaves",
                type: "boolean",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "DelayDaysOverride",
                table: "Leaves",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "DelayWholeDuration",
                table: "Leaves",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.CreateTable(
                name: "AnnualAllowanceCalculationRuns",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    Trigger = table.Column<string>(type: "text", nullable: true),
                    LastAllowanceDate = table.Column<DateOnly>(type: "date", nullable: false),
                    LegalTermMonths = table.Column<int>(type: "integer", nullable: false),
                    ServiceMonths = table.Column<int>(type: "integer", nullable: false),
                    BaseDate = table.Column<DateOnly>(type: "date", nullable: false),
                    BaseDueDate = table.Column<DateOnly>(type: "date", nullable: false),
                    FinalDueDate = table.Column<DateOnly>(type: "date", nullable: false),
                    Summary = table.Column<string>(type: "text", nullable: true),
                    AnnualAllowanceStatus = table.Column<int>(type: "integer", nullable: false),
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
                    table.PrimaryKey("PK_AnnualAllowanceCalculationRuns", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AnnualAllowanceCalculationRuns_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "AnnualAllowanceRule",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    JobDegreeId = table.Column<int>(type: "integer", nullable: true),
                    JobCategoryId = table.Column<int>(type: "integer", nullable: true),
                    AcademicAchievementId = table.Column<int>(type: "integer", nullable: true),
                    ApplicableLawId = table.Column<int>(type: "integer", nullable: true),
                    BaseMonths = table.Column<int>(type: "integer", nullable: false),
                    Priority = table.Column<int>(type: "integer", nullable: false),
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
                    table.PrimaryKey("PK_AnnualAllowanceRule", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AnnualAllowanceRule_AcademicAchievement_AcademicAchievement~",
                        column: x => x.AcademicAchievementId,
                        principalTable: "AcademicAchievement",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AnnualAllowanceRule_JobCategory_JobCategoryId",
                        column: x => x.JobCategoryId,
                        principalTable: "JobCategory",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AnnualAllowanceRule_JobDegree_JobDegreeId",
                        column: x => x.JobDegreeId,
                        principalTable: "JobDegree",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AnnualAllowanceRule_Laws_ApplicableLawId",
                        column: x => x.ApplicableLawId,
                        principalTable: "Laws",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "PromotionAllowanceCalculationRuns",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    Trigger = table.Column<string>(type: "text", nullable: true),
                    PromotionBaseDate = table.Column<DateOnly>(type: "date", nullable: true),
                    PromotionBaseMonths = table.Column<int>(type: "integer", nullable: true),
                    PromotionDueDate = table.Column<DateOnly>(type: "date", nullable: true),
                    AllowanceBaseDate = table.Column<DateOnly>(type: "date", nullable: true),
                    AllowanceBaseMonths = table.Column<int>(type: "integer", nullable: true),
                    AllowanceDueDate = table.Column<DateOnly>(type: "date", nullable: true),
                    Summary = table.Column<string>(type: "text", nullable: true),
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
                    table.PrimaryKey("PK_PromotionAllowanceCalculationRuns", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PromotionAllowanceCalculationRuns_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "PromotionAllowanceRule",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CalculationKind = table.Column<int>(type: "integer", nullable: false),
                    JobDegreeId = table.Column<int>(type: "integer", nullable: true),
                    JobCategoryId = table.Column<int>(type: "integer", nullable: true),
                    AcademicAchievementId = table.Column<int>(type: "integer", nullable: true),
                    ApplicableLawId = table.Column<int>(type: "integer", nullable: true),
                    BaseMonths = table.Column<int>(type: "integer", nullable: false),
                    Priority = table.Column<int>(type: "integer", nullable: false),
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
                    table.PrimaryKey("PK_PromotionAllowanceRule", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PromotionAllowanceRule_AcademicAchievement_AcademicAchievem~",
                        column: x => x.AcademicAchievementId,
                        principalTable: "AcademicAchievement",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_PromotionAllowanceRule_JobCategory_JobCategoryId",
                        column: x => x.JobCategoryId,
                        principalTable: "JobCategory",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_PromotionAllowanceRule_JobDegree_JobDegreeId",
                        column: x => x.JobDegreeId,
                        principalTable: "JobDegree",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_PromotionAllowanceRule_Laws_ApplicableLawId",
                        column: x => x.ApplicableLawId,
                        principalTable: "Laws",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "AnnualAllowanceCalculationDetails",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    RunId = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    StepCode = table.Column<int>(type: "integer", nullable: false),
                    SourceEntityName = table.Column<string>(type: "text", nullable: true),
                    SourceEntityId = table.Column<string>(type: "text", nullable: true),
                    Reason = table.Column<string>(type: "text", nullable: true),
                    BeforeDate = table.Column<DateOnly>(type: "date", nullable: true),
                    AfterDate = table.Column<DateOnly>(type: "date", nullable: true),
                    DeltaMonths = table.Column<int>(type: "integer", nullable: false),
                    DeltaDays = table.Column<int>(type: "integer", nullable: false),
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
                    table.PrimaryKey("PK_AnnualAllowanceCalculationDetails", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AnnualAllowanceCalculationDetails_AnnualAllowanceCalculatio~",
                        column: x => x.RunId,
                        principalTable: "AnnualAllowanceCalculationRuns",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AnnualAllowanceCalculationDetails_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "AnnualAllowanceRecord",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    DueDate = table.Column<DateOnly>(type: "date", nullable: false),
                    ImplementationDate = table.Column<DateOnly>(type: "date", nullable: true),
                    BonusTypeId = table.Column<int>(type: "integer", nullable: false),
                    ReasonForAmendment = table.Column<string>(type: "text", nullable: true),
                    AdministrativeOrderNo = table.Column<string>(type: "text", nullable: true),
                    AdministrativeOrderDate = table.Column<DateOnly>(type: "date", nullable: false),
                    AnnualAllowanceStatus = table.Column<int>(type: "integer", nullable: false),
                    UserId = table.Column<Guid>(type: "uuid", nullable: false),
                    EnteredDate = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    CalculationRunId = table.Column<Guid>(type: "uuid", nullable: true),
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
                    table.PrimaryKey("PK_AnnualAllowanceRecord", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AnnualAllowanceRecord_AnnualAllowanceCalculationRuns_Calcul~",
                        column: x => x.CalculationRunId,
                        principalTable: "AnnualAllowanceCalculationRuns",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AnnualAllowanceRecord_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "PromotionAllowanceCalculationDetails",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    RunId = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    CalculationKind = table.Column<int>(type: "integer", nullable: false),
                    StepCode = table.Column<string>(type: "text", nullable: true),
                    SourceEntityName = table.Column<string>(type: "text", nullable: true),
                    SourceEntityId = table.Column<string>(type: "text", nullable: true),
                    Reason = table.Column<string>(type: "text", nullable: true),
                    BeforeDate = table.Column<DateOnly>(type: "date", nullable: true),
                    AfterDate = table.Column<DateOnly>(type: "date", nullable: true),
                    DeltaMonths = table.Column<int>(type: "integer", nullable: false),
                    DeltaDays = table.Column<int>(type: "integer", nullable: false),
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
                    table.PrimaryKey("PK_PromotionAllowanceCalculationDetails", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PromotionAllowanceCalculationDetails_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_PromotionAllowanceCalculationDetails_PromotionAllowanceCalc~",
                        column: x => x.RunId,
                        principalTable: "PromotionAllowanceCalculationRuns",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_ThanksAndSeniority_ConsumedCalculationRunId",
                table: "ThanksAndSeniority",
                column: "ConsumedCalculationRunId");

            migrationBuilder.CreateIndex(
                name: "IX_AnnualAllowanceCalculationDetails_EmployeeId",
                table: "AnnualAllowanceCalculationDetails",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_AnnualAllowanceCalculationDetails_RunId",
                table: "AnnualAllowanceCalculationDetails",
                column: "RunId");

            migrationBuilder.CreateIndex(
                name: "IX_AnnualAllowanceCalculationRuns_EmployeeId",
                table: "AnnualAllowanceCalculationRuns",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_AnnualAllowanceRecord_CalculationRunId",
                table: "AnnualAllowanceRecord",
                column: "CalculationRunId");

            migrationBuilder.CreateIndex(
                name: "IX_AnnualAllowanceRecord_EmployeeId",
                table: "AnnualAllowanceRecord",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_AnnualAllowanceRule_AcademicAchievementId",
                table: "AnnualAllowanceRule",
                column: "AcademicAchievementId");

            migrationBuilder.CreateIndex(
                name: "IX_AnnualAllowanceRule_ApplicableLawId",
                table: "AnnualAllowanceRule",
                column: "ApplicableLawId");

            migrationBuilder.CreateIndex(
                name: "IX_AnnualAllowanceRule_JobCategoryId",
                table: "AnnualAllowanceRule",
                column: "JobCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_AnnualAllowanceRule_JobDegreeId",
                table: "AnnualAllowanceRule",
                column: "JobDegreeId");

            migrationBuilder.CreateIndex(
                name: "IX_PromotionAllowanceCalculationDetails_EmployeeId",
                table: "PromotionAllowanceCalculationDetails",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_PromotionAllowanceCalculationDetails_RunId",
                table: "PromotionAllowanceCalculationDetails",
                column: "RunId");

            migrationBuilder.CreateIndex(
                name: "IX_PromotionAllowanceCalculationRuns_EmployeeId",
                table: "PromotionAllowanceCalculationRuns",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_PromotionAllowanceRule_AcademicAchievementId",
                table: "PromotionAllowanceRule",
                column: "AcademicAchievementId");

            migrationBuilder.CreateIndex(
                name: "IX_PromotionAllowanceRule_ApplicableLawId",
                table: "PromotionAllowanceRule",
                column: "ApplicableLawId");

            migrationBuilder.CreateIndex(
                name: "IX_PromotionAllowanceRule_JobCategoryId",
                table: "PromotionAllowanceRule",
                column: "JobCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_PromotionAllowanceRule_JobDegreeId",
                table: "PromotionAllowanceRule",
                column: "JobDegreeId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AnnualAllowanceCalculationDetails");

            migrationBuilder.DropTable(
                name: "AnnualAllowanceRecord");

            migrationBuilder.DropTable(
                name: "AnnualAllowanceRule");

            migrationBuilder.DropTable(
                name: "PromotionAllowanceCalculationDetails");

            migrationBuilder.DropTable(
                name: "PromotionAllowanceRule");

            migrationBuilder.DropTable(
                name: "AnnualAllowanceCalculationRuns");

            migrationBuilder.DropTable(
                name: "PromotionAllowanceCalculationRuns");

            migrationBuilder.DropIndex(
                name: "IX_ThanksAndSeniority_ConsumedCalculationRunId",
                table: "ThanksAndSeniority");

            migrationBuilder.DropColumn(
                name: "EffectAction",
                table: "TypeOfService");

            migrationBuilder.DropColumn(
                name: "EffectScope",
                table: "TypeOfService");

            migrationBuilder.DropColumn(
                name: "AffectsAllowance",
                table: "TypeOfDisciplinary");

            migrationBuilder.DropColumn(
                name: "AffectsPromotion",
                table: "TypeOfDisciplinary");

            migrationBuilder.DropColumn(
                name: "DefaultDelayDays",
                table: "TypeOfDisciplinary");

            migrationBuilder.DropColumn(
                name: "ConsumedAt",
                table: "ThanksAndSeniority");

            migrationBuilder.DropColumn(
                name: "ConsumedCalculationRunId",
                table: "ThanksAndSeniority");

            migrationBuilder.DropColumn(
                name: "IsConsumed",
                table: "ThanksAndSeniority");

            migrationBuilder.DropColumn(
                name: "AffectsAllowance",
                table: "StudyLeave");

            migrationBuilder.DropColumn(
                name: "AffectsPromotion",
                table: "StudyLeave");

            migrationBuilder.DropColumn(
                name: "DelayMonthsOverride",
                table: "StudyLeave");

            migrationBuilder.DropColumn(
                name: "LastAllowanceDate",
                table: "Promotion");

            migrationBuilder.DropColumn(
                name: "AffectsAllowance",
                table: "Leaves");

            migrationBuilder.DropColumn(
                name: "AffectsPromotion",
                table: "Leaves");

            migrationBuilder.DropColumn(
                name: "DelayDaysOverride",
                table: "Leaves");

            migrationBuilder.DropColumn(
                name: "DelayWholeDuration",
                table: "Leaves");
        }
    }
}
