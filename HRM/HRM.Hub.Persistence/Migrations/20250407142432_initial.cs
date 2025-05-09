using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace HRM.Hub.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AcademicCertificateType",
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
                    table.PrimaryKey("PK_AcademicCertificateType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AcademicField",
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
                    table.PrimaryKey("PK_AcademicField", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AppSettings",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CountOfDegreeJob = table.Column<int>(type: "integer", nullable: false),
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
                    table.PrimaryKey("PK_AppSettings", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Attachments",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    PrimaryTableId = table.Column<Guid>(type: "uuid", nullable: true),
                    Tags = table.Column<string>(type: "text", nullable: true),
                    TableName = table.Column<string>(type: "text", nullable: true),
                    Notes = table.Column<string>(type: "text", nullable: true),
                    ExtinctionFile = table.Column<string>(type: "text", nullable: true),
                    Secret = table.Column<string>(type: "text", nullable: true),
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
                    table.PrimaryKey("PK_Attachments", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CompletedOrders",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    TeamId = table.Column<Guid>(type: "uuid", nullable: false),
                    TeamName = table.Column<string>(type: "text", nullable: true),
                    OnDate = table.Column<DateOnly>(type: "date", nullable: false),
                    CountOfOrders = table.Column<int>(type: "integer", nullable: false),
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
                    table.PrimaryKey("PK_CompletedOrders", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Country",
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
                    table.PrimaryKey("PK_Country", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Directorates",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: true),
                    ShortKey = table.Column<string>(type: "text", nullable: true),
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
                    table.PrimaryKey("PK_Directorates", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "EmployeeDocumentsType",
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
                    table.PrimaryKey("PK_EmployeeDocumentsType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Governorate",
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
                    table.PrimaryKey("PK_Governorate", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "JobDegree",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: true),
                    Index = table.Column<int>(type: "integer", nullable: false),
                    IncreaseAmount = table.Column<decimal>(type: "numeric", nullable: false),
                    NextPromotion = table.Column<int>(type: "integer", nullable: false),
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
                    table.PrimaryKey("PK_JobDegree", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "JobDescription",
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
                    table.PrimaryKey("PK_JobDescription", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Laws",
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
                    table.PrimaryKey("PK_Laws", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "LevelOfRelationship",
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
                    table.PrimaryKey("PK_LevelOfRelationship", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "LongLeaveType",
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
                    table.PrimaryKey("PK_LongLeaveType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "NormalLeaveType",
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
                    table.PrimaryKey("PK_NormalLeaveType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Position",
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
                    table.PrimaryKey("PK_Position", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PreciseAcademicField",
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
                    table.PrimaryKey("PK_PreciseAcademicField", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PromotionGroup",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    GroupName = table.Column<string>(type: "text", nullable: true),
                    GroupSendDate = table.Column<DateOnly>(type: "date", nullable: true),
                    GroupDoneDate = table.Column<DateOnly>(type: "date", nullable: true),
                    CountEmployee = table.Column<int>(type: "integer", nullable: true),
                    Notes = table.Column<string>(type: "text", nullable: true),
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
                    table.PrimaryKey("PK_PromotionGroup", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Province",
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
                    table.PrimaryKey("PK_Province", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SicknessType",
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
                    table.PrimaryKey("PK_SicknessType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "StudyExtensionOrderType",
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
                    table.PrimaryKey("PK_StudyExtensionOrderType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "StudyResult",
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
                    table.PrimaryKey("PK_StudyResult", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "StudyStatus",
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
                    table.PrimaryKey("PK_StudyStatus", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "StudyType",
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
                    table.PrimaryKey("PK_StudyType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Territory",
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
                    table.PrimaryKey("PK_Territory", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ThanksAndSeniorityCalculation",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    CountOfMonths = table.Column<int>(type: "integer", nullable: false),
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
                    table.PrimaryKey("PK_ThanksAndSeniorityCalculation", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TypeOfAssignment",
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
                    table.PrimaryKey("PK_TypeOfAssignment", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TypeOfBook",
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
                    table.PrimaryKey("PK_TypeOfBook", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TypeOfDisciplinary",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: true),
                    CountOfDayDelay = table.Column<int>(type: "integer", nullable: false),
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
                    table.PrimaryKey("PK_TypeOfDisciplinary", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TypeOfJob",
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
                    table.PrimaryKey("PK_TypeOfJob", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TypeOfLeave",
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
                    table.PrimaryKey("PK_TypeOfLeave", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TypeOfSeniority",
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
                    table.PrimaryKey("PK_TypeOfSeniority", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TypeOfService",
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
                    table.PrimaryKey("PK_TypeOfService", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Employees",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    StatisticalIndex = table.Column<string>(type: "text", nullable: true),
                    JobCode = table.Column<string>(type: "text", nullable: true),
                    LotNumber = table.Column<string>(type: "text", nullable: true),
                    FirstName = table.Column<string>(type: "text", nullable: true),
                    SecondName = table.Column<string>(type: "text", nullable: true),
                    ThirdName = table.Column<string>(type: "text", nullable: true),
                    FourthName = table.Column<string>(type: "text", nullable: true),
                    SurName = table.Column<string>(type: "text", nullable: true),
                    FullName = table.Column<string>(type: "text", nullable: true),
                    MotherFirstName = table.Column<string>(type: "text", nullable: true),
                    MotherSecondName = table.Column<string>(type: "text", nullable: true),
                    MotherThirdName = table.Column<string>(type: "text", nullable: true),
                    MotherSurName = table.Column<string>(type: "text", nullable: true),
                    MotherFullName = table.Column<string>(type: "text", nullable: true),
                    WifeName = table.Column<string>(type: "text", nullable: true),
                    ChildrenCount = table.Column<int>(type: "integer", nullable: false),
                    Gender = table.Column<int>(type: "integer", nullable: false),
                    BirthPlace = table.Column<string>(type: "text", nullable: true),
                    BirthDate = table.Column<DateOnly>(type: "date", nullable: true),
                    SocialStatus = table.Column<int>(type: "integer", nullable: true),
                    Notes = table.Column<string>(type: "text", nullable: true),
                    StatusWorkingId = table.Column<int>(type: "integer", nullable: false),
                    Nationalism = table.Column<string>(type: "text", nullable: true),
                    Religion = table.Column<string>(type: "text", nullable: true),
                    CountryId = table.Column<int>(type: "integer", nullable: true),
                    IsPinned = table.Column<bool>(type: "boolean", nullable: false),
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
                    table.PrimaryKey("PK_Employees", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Employees_Country_CountryId",
                        column: x => x.CountryId,
                        principalTable: "Country",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "SubDirectorates",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    DirectorateId = table.Column<int>(type: "integer", nullable: true),
                    Name = table.Column<string>(type: "text", nullable: true),
                    ShortKey = table.Column<string>(type: "text", nullable: true),
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
                    table.PrimaryKey("PK_SubDirectorates", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SubDirectorates_Directorates_DirectorateId",
                        column: x => x.DirectorateId,
                        principalTable: "Directorates",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "AcademicAchievement",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: true),
                    JobDegreeId = table.Column<int>(type: "integer", nullable: true),
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
                    table.PrimaryKey("PK_AcademicAchievement", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AcademicAchievement_JobDegree_JobDegreeId",
                        column: x => x.JobDegreeId,
                        principalTable: "JobDegree",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "JobCategory",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    DegreeId = table.Column<int>(type: "integer", nullable: false),
                    IncreaseAmount = table.Column<decimal>(type: "numeric", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: true),
                    Index = table.Column<int>(type: "integer", nullable: false),
                    NextPromotion = table.Column<int>(type: "integer", nullable: false),
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
                    table.PrimaryKey("PK_JobCategory", x => x.Id);
                    table.ForeignKey(
                        name: "FK_JobCategory_JobDegree_DegreeId",
                        column: x => x.DegreeId,
                        principalTable: "JobDegree",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "JobTitle",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    DegreeId = table.Column<int>(type: "integer", nullable: false),
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
                    table.PrimaryKey("PK_JobTitle", x => x.Id);
                    table.ForeignKey(
                        name: "FK_JobTitle_JobDegree_DegreeId",
                        column: x => x.DegreeId,
                        principalTable: "JobDegree",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Absence",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    AbsenceDate = table.Column<DateOnly>(type: "date", nullable: true),
                    BookNo = table.Column<string>(type: "text", nullable: true),
                    CountOfDays = table.Column<int>(type: "integer", nullable: false),
                    AbsenceOrderNo = table.Column<string>(type: "text", nullable: true),
                    AbsenceOrderDate = table.Column<DateOnly>(type: "date", nullable: true),
                    ReturnOrderNo = table.Column<string>(type: "text", nullable: true),
                    ReturnOrderDate = table.Column<DateOnly>(type: "date", nullable: true),
                    BookDate = table.Column<DateOnly>(type: "date", nullable: true),
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
                    table.PrimaryKey("PK_Absence", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Absence_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "AddressInformation",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    GovernorateId = table.Column<int>(type: "integer", nullable: false),
                    ProvinceId = table.Column<int>(type: "integer", nullable: false),
                    IsCurrent = table.Column<bool>(type: "boolean", nullable: false),
                    TerritoryId = table.Column<int>(type: "integer", nullable: false),
                    Area = table.Column<string>(type: "text", nullable: true),
                    District = table.Column<string>(type: "text", nullable: true),
                    StreetNo = table.Column<string>(type: "text", nullable: true),
                    HouseNo = table.Column<string>(type: "text", nullable: true),
                    NearestPoint = table.Column<string>(type: "text", nullable: true),
                    Notes = table.Column<string>(type: "text", nullable: true),
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
                    table.PrimaryKey("PK_AddressInformation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AddressInformation_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AddressInformation_Governorate_GovernorateId",
                        column: x => x.GovernorateId,
                        principalTable: "Governorate",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AddressInformation_Province_ProvinceId",
                        column: x => x.ProvinceId,
                        principalTable: "Province",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AddressInformation_Territory_TerritoryId",
                        column: x => x.TerritoryId,
                        principalTable: "Territory",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "AdministrativeOrder",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    OrderNo = table.Column<string>(type: "text", nullable: true),
                    OrderDate = table.Column<DateOnly>(type: "date", nullable: false),
                    BookTitle = table.Column<string>(type: "text", nullable: true),
                    AdministrativeOrderType = table.Column<int>(type: "integer", nullable: false),
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
                    table.PrimaryKey("PK_AdministrativeOrder", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AdministrativeOrder_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Assignments",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    TypeOfAssignmentId = table.Column<int>(type: "integer", nullable: true),
                    OrderNo = table.Column<string>(type: "text", nullable: true),
                    OrderDate = table.Column<DateOnly>(type: "date", nullable: true),
                    AssignmentSite = table.Column<int>(type: "integer", nullable: false),
                    AssignedFromOrganization = table.Column<string>(type: "text", nullable: true),
                    AssignedToOrganization = table.Column<string>(type: "text", nullable: true),
                    DurationOfAssignment = table.Column<int>(type: "integer", nullable: true),
                    ReleaseOrderDate = table.Column<DateOnly>(type: "date", nullable: true),
                    ReleaseOrderNo = table.Column<string>(type: "text", nullable: true),
                    AssignmentOrderDate = table.Column<DateOnly>(type: "date", nullable: true),
                    AssignmentOrderNo = table.Column<string>(type: "text", nullable: true),
                    ReleaseDate = table.Column<DateOnly>(type: "date", nullable: true),
                    HireDate = table.Column<DateOnly>(type: "date", nullable: true),
                    HireOrderNo = table.Column<string>(type: "text", nullable: true),
                    HireOrderDate = table.Column<DateOnly>(type: "date", nullable: true),
                    EndOrderNo = table.Column<string>(type: "text", nullable: true),
                    EndOrderDate = table.Column<DateOnly>(type: "date", nullable: true),
                    EndReleaseOrderDate = table.Column<DateOnly>(type: "date", nullable: true),
                    EndReleaseOrderNo = table.Column<string>(type: "text", nullable: true),
                    EndHireNo = table.Column<string>(type: "text", nullable: true),
                    EndHireDate = table.Column<DateOnly>(type: "date", nullable: true),
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
                    table.PrimaryKey("PK_Assignments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Assignments_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Assignments_TypeOfAssignment_TypeOfAssignmentId",
                        column: x => x.TypeOfAssignmentId,
                        principalTable: "TypeOfAssignment",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Attributes",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    AttributeKey = table.Column<string>(type: "text", nullable: true),
                    AttributeValue = table.Column<string>(type: "text", nullable: true),
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
                    table.PrimaryKey("PK_Attributes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Attributes_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ChangeDueDate",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    CurrentDegreeDueDate = table.Column<DateOnly>(type: "date", nullable: false),
                    NewDegreeDueDate = table.Column<DateOnly>(type: "date", nullable: false),
                    CurrentCategoryDueDate = table.Column<DateOnly>(type: "date", nullable: false),
                    NewCategoryDueDate = table.Column<DateOnly>(type: "date", nullable: false),
                    OrderNo = table.Column<string>(type: "text", nullable: true),
                    OrderDate = table.Column<DateOnly>(type: "date", nullable: false),
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
                    table.PrimaryKey("PK_ChangeDueDate", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ChangeDueDate_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "ContactInformation",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    LevelOfRelationshipId = table.Column<int>(type: "integer", nullable: true),
                    PhoneNumber = table.Column<string>(type: "text", nullable: true),
                    ContactName = table.Column<string>(type: "text", nullable: true),
                    Notes = table.Column<string>(type: "text", nullable: true),
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
                    table.PrimaryKey("PK_ContactInformation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ContactInformation_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ContactInformation_LevelOfRelationship_LevelOfRelationshipId",
                        column: x => x.LevelOfRelationshipId,
                        principalTable: "LevelOfRelationship",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "DocVerifications",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    DocumentNumber = table.Column<string>(type: "text", nullable: true),
                    DocumentDate = table.Column<DateOnly>(type: "date", nullable: false),
                    Recipient = table.Column<string>(type: "text", nullable: true),
                    Answered = table.Column<bool>(type: "boolean", nullable: false),
                    SendingDate = table.Column<DateOnly>(type: "date", nullable: false),
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
                    table.PrimaryKey("PK_DocVerifications", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DocVerifications_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "EmployeeApplicableLaws",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    LawId = table.Column<int>(type: "integer", nullable: true),
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
                    table.PrimaryKey("PK_EmployeeApplicableLaws", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EmployeeApplicableLaws_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_EmployeeApplicableLaws_Laws_LawId",
                        column: x => x.LawId,
                        principalTable: "Laws",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "EmployeeCourses",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    Title = table.Column<string>(type: "text", nullable: true),
                    Place = table.Column<string>(type: "text", nullable: true),
                    StartDate = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    EndDate = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    Evaluation = table.Column<string>(type: "text", nullable: true),
                    ResidentEntity = table.Column<string>(type: "text", nullable: true),
                    CourseOrderNo = table.Column<string>(type: "text", nullable: true),
                    CourseOrderDate = table.Column<DateOnly>(type: "date", nullable: true),
                    CourseDurationInDays = table.Column<int>(type: "integer", nullable: false),
                    NominationOrderNo = table.Column<string>(type: "text", nullable: true),
                    NominationOrderDate = table.Column<DateOnly>(type: "date", nullable: true),
                    ReleaseOrderDate = table.Column<DateOnly>(type: "date", nullable: true),
                    ReleaseOrderNo = table.Column<string>(type: "text", nullable: true),
                    ReleaseDate = table.Column<DateOnly>(type: "date", nullable: true),
                    HireOrderNo = table.Column<string>(type: "text", nullable: true),
                    HireOrderDate = table.Column<DateOnly>(type: "date", nullable: true),
                    HireDate = table.Column<DateOnly>(type: "date", nullable: true),
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
                    table.PrimaryKey("PK_EmployeeCourses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EmployeeCourses_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "EmployeeDisciplinary",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    TitleOfBook = table.Column<string>(type: "text", nullable: true),
                    TypeOfDisciplinaryId = table.Column<int>(type: "integer", nullable: false),
                    BookNo = table.Column<string>(type: "text", nullable: true),
                    BookDate = table.Column<DateOnly>(type: "date", nullable: true),
                    StopPromotion = table.Column<bool>(type: "boolean", nullable: true),
                    CountOfDayDelay = table.Column<int>(type: "integer", nullable: true),
                    DisciplinaryLaw = table.Column<string>(type: "text", nullable: true),
                    Note = table.Column<string>(type: "text", nullable: true),
                    Reason = table.Column<string>(type: "text", nullable: true),
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
                    table.PrimaryKey("PK_EmployeeDisciplinary", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EmployeeDisciplinary_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_EmployeeDisciplinary_TypeOfDisciplinary_TypeOfDisciplinaryId",
                        column: x => x.TypeOfDisciplinaryId,
                        principalTable: "TypeOfDisciplinary",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "EmployeeDocuments",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeDocumentTypeId = table.Column<int>(type: "integer", nullable: true),
                    DocumentAttribute = table.Column<string>(type: "text", nullable: true),
                    Notes = table.Column<string>(type: "text", nullable: true),
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
                    table.PrimaryKey("PK_EmployeeDocuments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EmployeeDocuments_EmployeeDocumentsType_EmployeeDocumentTyp~",
                        column: x => x.EmployeeDocumentTypeId,
                        principalTable: "EmployeeDocumentsType",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_EmployeeDocuments_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "EmployeeService",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    RetirementCalculation = table.Column<string>(type: "text", nullable: true),
                    PromotionCalculation = table.Column<string>(type: "text", nullable: true),
                    Notes = table.Column<string>(type: "text", nullable: true),
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
                    table.PrimaryKey("PK_EmployeeService", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EmployeeService_Employees_Id",
                        column: x => x.Id,
                        principalTable: "Employees",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "HandPull",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    WithdrawHandPullOrderNo = table.Column<string>(type: "text", nullable: true),
                    WithdrawHandPullOrderDate = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    RaiseHandPullOrderNo = table.Column<string>(type: "text", nullable: true),
                    RaiseHandPullOrderDate = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
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
                    table.PrimaryKey("PK_HandPull", x => x.Id);
                    table.ForeignKey(
                        name: "FK_HandPull_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Interruption",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    NotificationDate = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    Reason = table.Column<string>(type: "text", nullable: true),
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
                    table.PrimaryKey("PK_Interruption", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Interruption_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "JobInformation",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    HireDate = table.Column<DateOnly>(type: "date", nullable: false),
                    EndOfServiceDate = table.Column<DateOnly>(type: "date", nullable: true),
                    TypeOfJobId = table.Column<int>(type: "integer", nullable: true),
                    AssignedId = table.Column<Guid>(type: "uuid", nullable: true),
                    MedicalTest = table.Column<bool>(type: "boolean", nullable: true),
                    IsReEmployed = table.Column<bool>(type: "boolean", nullable: true),
                    IsMovedFromOutside = table.Column<bool>(type: "boolean", nullable: true),
                    IsStillWorking = table.Column<int>(type: "integer", nullable: true),
                    IsBehaviorCode = table.Column<bool>(type: "boolean", nullable: true),
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
                    table.PrimaryKey("PK_JobInformation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_JobInformation_Employees_Id",
                        column: x => x.Id,
                        principalTable: "Employees",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_JobInformation_TypeOfJob_TypeOfJobId",
                        column: x => x.TypeOfJobId,
                        principalTable: "TypeOfJob",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Leaves",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    NormalLeaveTypeId = table.Column<int>(type: "integer", nullable: true),
                    TypeOfLeaveId = table.Column<int>(type: "integer", nullable: false),
                    SicknessTypeId = table.Column<int>(type: "integer", nullable: true),
                    LongLeaveTypeId = table.Column<int>(type: "integer", nullable: true),
                    OrderNo = table.Column<string>(type: "text", nullable: true),
                    OrderDate = table.Column<DateOnly>(type: "date", nullable: true),
                    FromDate = table.Column<DateOnly>(type: "date", nullable: true),
                    ToDate = table.Column<DateOnly>(type: "date", nullable: true),
                    CountOfDays = table.Column<int>(type: "integer", nullable: true),
                    CountOfMinutes = table.Column<int>(type: "integer", nullable: true),
                    SalaryStatusId = table.Column<int>(type: "integer", nullable: false),
                    IsInside = table.Column<bool>(type: "boolean", nullable: true),
                    Note = table.Column<string>(type: "text", nullable: true),
                    CountryId = table.Column<int>(type: "integer", nullable: true),
                    DateOfAssignment = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    NoOfAssignment = table.Column<string>(type: "text", nullable: true),
                    HireOrderDate = table.Column<DateOnly>(type: "date", nullable: true),
                    HireDate = table.Column<DateOnly>(type: "date", nullable: true),
                    HireOrderNo = table.Column<string>(type: "text", nullable: true),
                    DateOfBirthCertificate = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    NoOfBirthCertificate = table.Column<string>(type: "text", nullable: true),
                    DateOfRelease = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    ReleaseDate = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    NoOfRelease = table.Column<string>(type: "text", nullable: true),
                    DateOfStart = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    NoOfStart = table.Column<string>(type: "text", nullable: true),
                    DateOfPermission = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    NoOfPermission = table.Column<string>(type: "text", nullable: true),
                    CutReason = table.Column<string>(type: "text", nullable: true),
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
                    table.PrimaryKey("PK_Leaves", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Leaves_Country_CountryId",
                        column: x => x.CountryId,
                        principalTable: "Country",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Leaves_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Leaves_LongLeaveType_LongLeaveTypeId",
                        column: x => x.LongLeaveTypeId,
                        principalTable: "LongLeaveType",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Leaves_NormalLeaveType_NormalLeaveTypeId",
                        column: x => x.NormalLeaveTypeId,
                        principalTable: "NormalLeaveType",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Leaves_SicknessType_SicknessTypeId",
                        column: x => x.SicknessTypeId,
                        principalTable: "SicknessType",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "LeavesBalance",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Balance = table.Column<int>(type: "integer", nullable: true),
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
                    table.PrimaryKey("PK_LeavesBalance", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LeavesBalance_Employees_Id",
                        column: x => x.Id,
                        principalTable: "Employees",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "LeavesMedicalBalance",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Balance = table.Column<double>(type: "double precision", nullable: true),
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
                    table.PrimaryKey("PK_LeavesMedicalBalance", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LeavesMedicalBalance_Employees_Id",
                        column: x => x.Id,
                        principalTable: "Employees",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "LogLeavesBalance",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    CountOfDay = table.Column<int>(type: "integer", nullable: true),
                    NameOfIssuing = table.Column<string>(type: "text", nullable: true),
                    BookNo = table.Column<string>(type: "text", nullable: true),
                    TypeOfLeaveId = table.Column<int>(type: "integer", nullable: false),
                    BookDate = table.Column<DateOnly>(type: "date", nullable: true),
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
                    table.PrimaryKey("PK_LogLeavesBalance", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LogLeavesBalance_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "LogPromotionWithholdings",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    ScheduledPromotionDate = table.Column<DateOnly>(type: "date", nullable: true),
                    WithholdingDate = table.Column<DateOnly>(type: "date", nullable: true),
                    ReasonForWithholding = table.Column<string>(type: "text", nullable: true),
                    Notes = table.Column<string>(type: "text", nullable: true),
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
                    table.PrimaryKey("PK_LogPromotionWithholdings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LogPromotionWithholdings_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "MarriageInformation",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: true),
                    FirstName = table.Column<string>(type: "text", nullable: true),
                    SecondName = table.Column<string>(type: "text", nullable: true),
                    ThirdName = table.Column<string>(type: "text", nullable: true),
                    SurName = table.Column<string>(type: "text", nullable: true),
                    FullName = table.Column<string>(type: "text", nullable: true),
                    MarriageDate = table.Column<DateOnly>(type: "date", nullable: true),
                    ChildrenCount = table.Column<int>(type: "integer", nullable: true),
                    Notes = table.Column<string>(type: "text", nullable: true),
                    IsCurrent = table.Column<bool>(type: "boolean", nullable: false),
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
                    table.PrimaryKey("PK_MarriageInformation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MarriageInformation_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "MartyrsAndWounded",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    DateOfDeath = table.Column<DateOnly>(type: "date", nullable: true),
                    EndDateOfService = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    RetirementDate = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    AdministrativeOrderNo = table.Column<string>(type: "text", nullable: true),
                    AdministrativeOrderDate = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    IsPoliticallyDismissed = table.Column<bool>(type: "boolean", nullable: false),
                    Status = table.Column<int>(type: "integer", nullable: true),
                    Note = table.Column<string>(type: "text", nullable: true),
                    DateOfMartyrdom = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    HealthStatus = table.Column<int>(type: "integer", nullable: false),
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
                    table.PrimaryKey("PK_MartyrsAndWounded", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MartyrsAndWounded_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Resignations",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    Reason = table.Column<string>(type: "text", nullable: true),
                    RequestDate = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    RequestNo = table.Column<string>(type: "text", nullable: true),
                    ResignationOrderNo = table.Column<string>(type: "text", nullable: true),
                    ResignationOrderDate = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    SeparationOrderNo = table.Column<string>(type: "text", nullable: true),
                    SeparationOrderDate = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
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
                    table.PrimaryKey("PK_Resignations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Resignations_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ServiceCalculation",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    TypeOfServiceId = table.Column<int>(type: "integer", nullable: false),
                    CountOfMonth = table.Column<int>(type: "integer", nullable: true),
                    OrderNo = table.Column<string>(type: "text", nullable: true),
                    OrderDate = table.Column<DateOnly>(type: "date", nullable: true),
                    IsPoliticalTermination = table.Column<bool>(type: "boolean", nullable: true),
                    Notes = table.Column<string>(type: "text", nullable: true),
                    EmployeesId = table.Column<Guid>(type: "uuid", nullable: true),
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
                    table.PrimaryKey("PK_ServiceCalculation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ServiceCalculation_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ServiceCalculation_Employees_EmployeesId",
                        column: x => x.EmployeesId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ServiceCalculation_TypeOfService_TypeOfServiceId",
                        column: x => x.TypeOfServiceId,
                        principalTable: "TypeOfService",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "StudyFile",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    DocumentNo = table.Column<string>(type: "text", nullable: true),
                    DocumentDate = table.Column<DateOnly>(type: "date", nullable: true),
                    Notes = table.Column<string>(type: "text", nullable: true),
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
                    table.PrimaryKey("PK_StudyFile", x => x.Id);
                    table.ForeignKey(
                        name: "FK_StudyFile_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "TeamNotifications",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    TeamId = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    Body = table.Column<string>(type: "text", nullable: true),
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
                    table.PrimaryKey("PK_TeamNotifications", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TeamNotifications_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "ThanksAndSeniority",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    TypeOfBookId = table.Column<int>(type: "integer", nullable: false),
                    TypeOfSeniorityId = table.Column<int>(type: "integer", nullable: false),
                    BookNo = table.Column<string>(type: "text", nullable: true),
                    DateOfBook = table.Column<DateOnly>(type: "date", nullable: false),
                    BookIssueName = table.Column<string>(type: "text", nullable: true),
                    Reason = table.Column<string>(type: "text", nullable: true),
                    CountOfMonths = table.Column<int>(type: "integer", nullable: false),
                    IsDocumentVerify = table.Column<bool>(type: "boolean", nullable: true),
                    CalculationDate = table.Column<DateOnly>(type: "date", nullable: true),
                    IsCalculation = table.Column<bool>(type: "boolean", nullable: true),
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
                    table.PrimaryKey("PK_ThanksAndSeniority", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ThanksAndSeniority_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ThanksAndSeniority_TypeOfBook_TypeOfBookId",
                        column: x => x.TypeOfBookId,
                        principalTable: "TypeOfBook",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ThanksAndSeniority_TypeOfSeniority_TypeOfSeniorityId",
                        column: x => x.TypeOfSeniorityId,
                        principalTable: "TypeOfSeniority",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Valuation",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    SecondaryId = table.Column<Guid>(type: "uuid", nullable: false),
                    ValuationDate = table.Column<DateOnly>(type: "date", nullable: true),
                    ValuationKey = table.Column<string>(type: "text", nullable: true),
                    BookNo = table.Column<string>(type: "text", nullable: true),
                    BookDate = table.Column<DateOnly>(type: "date", nullable: false),
                    ValuationPoints = table.Column<int>(type: "integer", nullable: true),
                    Recommendation = table.Column<string>(type: "text", nullable: true),
                    ValuationType = table.Column<string>(type: "text", nullable: true),
                    Notes = table.Column<string>(type: "text", nullable: true),
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
                    table.PrimaryKey("PK_Valuation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Valuation_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Departments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    DirectorateId = table.Column<int>(type: "integer", nullable: true),
                    SubDirectorateId = table.Column<int>(type: "integer", nullable: true),
                    Name = table.Column<string>(type: "text", nullable: true),
                    ShortKey = table.Column<string>(type: "text", nullable: true),
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
                    table.PrimaryKey("PK_Departments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Departments_Directorates_DirectorateId",
                        column: x => x.DirectorateId,
                        principalTable: "Directorates",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Departments_SubDirectorates_SubDirectorateId",
                        column: x => x.SubDirectorateId,
                        principalTable: "SubDirectorates",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "EducationInformation",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    OriginalDocument = table.Column<string>(type: "text", nullable: true),
                    DocumentNo = table.Column<string>(type: "text", nullable: true),
                    DocumentDate = table.Column<DateOnly>(type: "date", nullable: true),
                    DocumentSender = table.Column<string>(type: "text", nullable: true),
                    DocumentSendDate = table.Column<DateOnly>(type: "date", nullable: true),
                    AcademicAchievementId = table.Column<int>(type: "integer", nullable: false),
                    AcademicFieldId = table.Column<int>(type: "integer", nullable: false),
                    PreciseAcademicFieldId = table.Column<int>(type: "integer", nullable: false),
                    NameOfIssuingCertificate = table.Column<string>(type: "text", nullable: true),
                    StartDate = table.Column<DateOnly>(type: "date", nullable: false),
                    EndDate = table.Column<DateOnly>(type: "date", nullable: false),
                    Average = table.Column<decimal>(type: "numeric", nullable: false),
                    GraduationYear = table.Column<string>(type: "text", nullable: true),
                    IsDuringRecruitment = table.Column<bool>(type: "boolean", nullable: false),
                    IsDocumentVerify = table.Column<bool>(type: "boolean", nullable: false),
                    IsInHiring = table.Column<bool>(type: "boolean", nullable: false),
                    IsCurrent = table.Column<bool>(type: "boolean", nullable: false),
                    CountryId = table.Column<int>(type: "integer", nullable: false),
                    StudyTypeId = table.Column<int>(type: "integer", nullable: false),
                    Notes = table.Column<string>(type: "text", nullable: true),
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
                    table.PrimaryKey("PK_EducationInformation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EducationInformation_AcademicAchievement_AcademicAchievemen~",
                        column: x => x.AcademicAchievementId,
                        principalTable: "AcademicAchievement",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_EducationInformation_AcademicField_AcademicFieldId",
                        column: x => x.AcademicFieldId,
                        principalTable: "AcademicField",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_EducationInformation_Country_CountryId",
                        column: x => x.CountryId,
                        principalTable: "Country",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_EducationInformation_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_EducationInformation_PreciseAcademicField_PreciseAcademicFi~",
                        column: x => x.PreciseAcademicFieldId,
                        principalTable: "PreciseAcademicField",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_EducationInformation_StudyType_StudyTypeId",
                        column: x => x.StudyTypeId,
                        principalTable: "StudyType",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Promotion",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    SentPromotionGroupId = table.Column<long>(type: "bigint", nullable: true),
                    JobDegreeId = table.Column<int>(type: "integer", nullable: false),
                    JobCategoryId = table.Column<int>(type: "integer", nullable: false),
                    DueDateDegree = table.Column<DateOnly>(type: "date", nullable: true),
                    DueDateCategory = table.Column<DateOnly>(type: "date", nullable: true),
                    StopPromotion = table.Column<bool>(type: "boolean", nullable: false),
                    ServiceRecycle = table.Column<int>(type: "integer", nullable: true),
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
                    table.PrimaryKey("PK_Promotion", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Promotion_Employees_Id",
                        column: x => x.Id,
                        principalTable: "Employees",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Promotion_JobCategory_JobCategoryId",
                        column: x => x.JobCategoryId,
                        principalTable: "JobCategory",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Promotion_JobDegree_JobDegreeId",
                        column: x => x.JobDegreeId,
                        principalTable: "JobDegree",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Promotion_PromotionGroup_SentPromotionGroupId",
                        column: x => x.SentPromotionGroupId,
                        principalTable: "PromotionGroup",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "ChangeDegree",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    JobDegreeFromId = table.Column<int>(type: "integer", nullable: false),
                    JobDegreeToId = table.Column<int>(type: "integer", nullable: false),
                    JobCategoryFromId = table.Column<int>(type: "integer", nullable: false),
                    JobCategoryToId = table.Column<int>(type: "integer", nullable: false),
                    JobTitleFromId = table.Column<int>(type: "integer", nullable: false),
                    JobDescriptionFromId = table.Column<int>(type: "integer", nullable: false),
                    JobTitleToId = table.Column<int>(type: "integer", nullable: false),
                    JobDescriptionToId = table.Column<int>(type: "integer", nullable: false),
                    OldDegreeDueDate = table.Column<DateOnly>(type: "date", nullable: false),
                    NewDegreeDueDate = table.Column<DateOnly>(type: "date", nullable: false),
                    OldCategoryDueDate = table.Column<DateOnly>(type: "date", nullable: false),
                    NewCategoryDueDate = table.Column<DateOnly>(type: "date", nullable: false),
                    OrderNo = table.Column<string>(type: "text", nullable: true),
                    OrderDate = table.Column<DateOnly>(type: "date", nullable: true),
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
                    table.PrimaryKey("PK_ChangeDegree", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ChangeDegree_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ChangeDegree_JobCategory_JobCategoryFromId",
                        column: x => x.JobCategoryFromId,
                        principalTable: "JobCategory",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ChangeDegree_JobCategory_JobCategoryToId",
                        column: x => x.JobCategoryToId,
                        principalTable: "JobCategory",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ChangeDegree_JobDegree_JobDegreeFromId",
                        column: x => x.JobDegreeFromId,
                        principalTable: "JobDegree",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ChangeDegree_JobDegree_JobDegreeToId",
                        column: x => x.JobDegreeToId,
                        principalTable: "JobDegree",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ChangeDegree_JobDescription_JobDescriptionFromId",
                        column: x => x.JobDescriptionFromId,
                        principalTable: "JobDescription",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ChangeDegree_JobDescription_JobDescriptionToId",
                        column: x => x.JobDescriptionToId,
                        principalTable: "JobDescription",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ChangeDegree_JobTitle_JobTitleFromId",
                        column: x => x.JobTitleFromId,
                        principalTable: "JobTitle",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ChangeDegree_JobTitle_JobTitleToId",
                        column: x => x.JobTitleToId,
                        principalTable: "JobTitle",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "ChangeJobTitle",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    NewJobTitleId = table.Column<int>(type: "integer", nullable: true),
                    NewJobDescriptionId = table.Column<int>(type: "integer", nullable: true),
                    OldJobTitleId = table.Column<int>(type: "integer", nullable: true),
                    OldJobDescriptionId = table.Column<int>(type: "integer", nullable: true),
                    OrderNo = table.Column<string>(type: "text", nullable: true),
                    OrderDate = table.Column<DateOnly>(type: "date", nullable: true),
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
                    table.PrimaryKey("PK_ChangeJobTitle", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ChangeJobTitle_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ChangeJobTitle_JobDescription_NewJobDescriptionId",
                        column: x => x.NewJobDescriptionId,
                        principalTable: "JobDescription",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ChangeJobTitle_JobDescription_OldJobDescriptionId",
                        column: x => x.OldJobDescriptionId,
                        principalTable: "JobDescription",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ChangeJobTitle_JobTitle_NewJobTitleId",
                        column: x => x.NewJobTitleId,
                        principalTable: "JobTitle",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ChangeJobTitle_JobTitle_OldJobTitleId",
                        column: x => x.OldJobTitleId,
                        principalTable: "JobTitle",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "CorrectingAcademicAchievements",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    DegreeFromId = table.Column<int>(type: "integer", nullable: true),
                    DegreeToId = table.Column<int>(type: "integer", nullable: true),
                    JobCategoryFromId = table.Column<int>(type: "integer", nullable: true),
                    JobCategoryToId = table.Column<int>(type: "integer", nullable: true),
                    JobTitleFromId = table.Column<int>(type: "integer", nullable: false),
                    JobDescriptionFromId = table.Column<int>(type: "integer", nullable: false),
                    JobTitleToId = table.Column<int>(type: "integer", nullable: false),
                    JobDescriptionToId = table.Column<int>(type: "integer", nullable: false),
                    DueDateDegree = table.Column<DateOnly>(type: "date", nullable: true),
                    DueDateCategory = table.Column<DateOnly>(type: "date", nullable: true),
                    BookNo = table.Column<string>(type: "text", nullable: true),
                    BookDate = table.Column<DateOnly>(type: "date", nullable: true),
                    IsCertificateCalculation = table.Column<bool>(type: "boolean", nullable: true),
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
                    table.PrimaryKey("PK_CorrectingAcademicAchievements", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CorrectingAcademicAchievements_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_CorrectingAcademicAchievements_JobCategory_JobCategoryFromId",
                        column: x => x.JobCategoryFromId,
                        principalTable: "JobCategory",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_CorrectingAcademicAchievements_JobCategory_JobCategoryToId",
                        column: x => x.JobCategoryToId,
                        principalTable: "JobCategory",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_CorrectingAcademicAchievements_JobDegree_DegreeFromId",
                        column: x => x.DegreeFromId,
                        principalTable: "JobDegree",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_CorrectingAcademicAchievements_JobDegree_DegreeToId",
                        column: x => x.DegreeToId,
                        principalTable: "JobDegree",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_CorrectingAcademicAchievements_JobDescription_JobDescriptio~",
                        column: x => x.JobDescriptionFromId,
                        principalTable: "JobDescription",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_CorrectingAcademicAchievements_JobDescription_JobDescripti~1",
                        column: x => x.JobDescriptionToId,
                        principalTable: "JobDescription",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_CorrectingAcademicAchievements_JobTitle_JobTitleFromId",
                        column: x => x.JobTitleFromId,
                        principalTable: "JobTitle",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_CorrectingAcademicAchievements_JobTitle_JobTitleToId",
                        column: x => x.JobTitleToId,
                        principalTable: "JobTitle",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "StudyLeave",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    StudyFileId = table.Column<Guid>(type: "uuid", nullable: true),
                    AcademicCertificateTypeId = table.Column<int>(type: "integer", nullable: true),
                    AcademicAchievementId = table.Column<int>(type: "integer", nullable: true),
                    AcademicFieldId = table.Column<int>(type: "integer", nullable: true),
                    StudyPeriodTime = table.Column<int>(type: "integer", nullable: true),
                    AcceptanceYear = table.Column<string>(type: "text", nullable: true),
                    NameOfIssuingCertificate = table.Column<string>(type: "text", nullable: true),
                    FinancialInsuranceNo = table.Column<string>(type: "text", nullable: true),
                    FinancialInsuranceDate = table.Column<DateOnly>(type: "date", nullable: true),
                    ReleaseOrderDate = table.Column<DateOnly>(type: "date", nullable: true),
                    ReleaseOrderNo = table.Column<string>(type: "text", nullable: true),
                    ReleaseDate = table.Column<DateOnly>(type: "date", nullable: true),
                    HireOrderNo = table.Column<string>(type: "text", nullable: true),
                    HireOrderDate = table.Column<DateOnly>(type: "date", nullable: true),
                    HireDate = table.Column<DateOnly>(type: "date", nullable: true),
                    CountryId = table.Column<int>(type: "integer", nullable: true),
                    StudyStatusId = table.Column<int>(type: "integer", nullable: true),
                    StudyResultId = table.Column<int>(type: "integer", nullable: true),
                    Notes = table.Column<string>(type: "text", nullable: true),
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
                    table.PrimaryKey("PK_StudyLeave", x => x.Id);
                    table.ForeignKey(
                        name: "FK_StudyLeave_AcademicAchievement_AcademicAchievementId",
                        column: x => x.AcademicAchievementId,
                        principalTable: "AcademicAchievement",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_StudyLeave_AcademicCertificateType_AcademicCertificateTypeId",
                        column: x => x.AcademicCertificateTypeId,
                        principalTable: "AcademicCertificateType",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_StudyLeave_AcademicField_AcademicFieldId",
                        column: x => x.AcademicFieldId,
                        principalTable: "AcademicField",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_StudyLeave_Country_CountryId",
                        column: x => x.CountryId,
                        principalTable: "Country",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_StudyLeave_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_StudyLeave_StudyFile_StudyFileId",
                        column: x => x.StudyFileId,
                        principalTable: "StudyFile",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_StudyLeave_StudyResult_StudyResultId",
                        column: x => x.StudyResultId,
                        principalTable: "StudyResult",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_StudyLeave_StudyStatus_StudyStatusId",
                        column: x => x.StudyStatusId,
                        principalTable: "StudyStatus",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "StudyLeaveExtension",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    StudyFileId = table.Column<Guid>(type: "uuid", nullable: true),
                    StudyExtensionOrderTypeId = table.Column<int>(type: "integer", nullable: true),
                    OrderNo = table.Column<string>(type: "text", nullable: true),
                    OrderDate = table.Column<DateOnly>(type: "date", nullable: true),
                    FromDate = table.Column<DateOnly>(type: "date", nullable: true),
                    CountOfDay = table.Column<int>(type: "integer", nullable: false),
                    ToDate = table.Column<DateOnly>(type: "date", nullable: true),
                    Notes = table.Column<string>(type: "text", nullable: true),
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
                    table.PrimaryKey("PK_StudyLeaveExtension", x => x.Id);
                    table.ForeignKey(
                        name: "FK_StudyLeaveExtension_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_StudyLeaveExtension_StudyExtensionOrderType_StudyExtensionO~",
                        column: x => x.StudyExtensionOrderTypeId,
                        principalTable: "StudyExtensionOrderType",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_StudyLeaveExtension_StudyFile_StudyFileId",
                        column: x => x.StudyFileId,
                        principalTable: "StudyFile",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Sections",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    DirectorateId = table.Column<int>(type: "integer", nullable: false),
                    SubDirectorateId = table.Column<int>(type: "integer", nullable: false),
                    DepartmentId = table.Column<int>(type: "integer", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: true),
                    ShortKey = table.Column<string>(type: "text", nullable: true),
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
                    table.PrimaryKey("PK_Sections", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Sections_Departments_DepartmentId",
                        column: x => x.DepartmentId,
                        principalTable: "Departments",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Sections_Directorates_DirectorateId",
                        column: x => x.DirectorateId,
                        principalTable: "Directorates",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Sections_SubDirectorates_SubDirectorateId",
                        column: x => x.SubDirectorateId,
                        principalTable: "SubDirectorates",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Units",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    DirectorateId = table.Column<int>(type: "integer", nullable: false),
                    SubDirectorateId = table.Column<int>(type: "integer", nullable: false),
                    DepartmentId = table.Column<int>(type: "integer", nullable: false),
                    SectionId = table.Column<int>(type: "integer", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: true),
                    ShortKey = table.Column<string>(type: "text", nullable: true),
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
                    table.PrimaryKey("PK_Units", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Units_Departments_DepartmentId",
                        column: x => x.DepartmentId,
                        principalTable: "Departments",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Units_Directorates_DirectorateId",
                        column: x => x.DirectorateId,
                        principalTable: "Directorates",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Units_Sections_SectionId",
                        column: x => x.SectionId,
                        principalTable: "Sections",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Units_SubDirectorates_SubDirectorateId",
                        column: x => x.SubDirectorateId,
                        principalTable: "SubDirectorates",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "EmployeePositions",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeePositionType = table.Column<int>(type: "integer", nullable: false),
                    EndAssignedOrderNo = table.Column<string>(type: "text", nullable: true),
                    EndAssignedOrderDate = table.Column<DateOnly>(type: "date", nullable: true),
                    AssignedOrderDate = table.Column<DateOnly>(type: "date", nullable: true),
                    AssignedDate = table.Column<DateOnly>(type: "date", nullable: true),
                    AssignedOrderNo = table.Column<string>(type: "text", nullable: true),
                    AdministrativeOrderDate = table.Column<DateOnly>(type: "date", nullable: true),
                    AdministrativeOrderNo = table.Column<string>(type: "text", nullable: true),
                    DirectorateId = table.Column<int>(type: "integer", nullable: true),
                    SubDirectorateId = table.Column<int>(type: "integer", nullable: true),
                    DepartmentId = table.Column<int>(type: "integer", nullable: true),
                    SectionId = table.Column<int>(type: "integer", nullable: true),
                    UnitId = table.Column<int>(type: "integer", nullable: true),
                    PositionId = table.Column<int>(type: "integer", nullable: true),
                    Status = table.Column<int>(type: "integer", nullable: true),
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
                    table.PrimaryKey("PK_EmployeePositions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EmployeePositions_Departments_DepartmentId",
                        column: x => x.DepartmentId,
                        principalTable: "Departments",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_EmployeePositions_Directorates_DirectorateId",
                        column: x => x.DirectorateId,
                        principalTable: "Directorates",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_EmployeePositions_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_EmployeePositions_Position_PositionId",
                        column: x => x.PositionId,
                        principalTable: "Position",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_EmployeePositions_Sections_SectionId",
                        column: x => x.SectionId,
                        principalTable: "Sections",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_EmployeePositions_SubDirectorates_SubDirectorateId",
                        column: x => x.SubDirectorateId,
                        principalTable: "SubDirectorates",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_EmployeePositions_Units_UnitId",
                        column: x => x.UnitId,
                        principalTable: "Units",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "ManagementInformation",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    DirectorateId = table.Column<int>(type: "integer", nullable: false),
                    SubDirectorateId = table.Column<int>(type: "integer", nullable: true),
                    DepartmentId = table.Column<int>(type: "integer", nullable: true),
                    SectionId = table.Column<int>(type: "integer", nullable: true),
                    UnitId = table.Column<int>(type: "integer", nullable: true),
                    PositionId = table.Column<int>(type: "integer", nullable: false),
                    EmploymentDegreeId = table.Column<int>(type: "integer", nullable: false),
                    JobTitleId = table.Column<int>(type: "integer", nullable: false),
                    JobDescriptionId = table.Column<int>(type: "integer", nullable: false),
                    StopJobDegreeId = table.Column<int>(type: "integer", nullable: true),
                    Notes = table.Column<string>(type: "text", nullable: true),
                    IsCurrent = table.Column<bool>(type: "boolean", nullable: false),
                    IsInHiring = table.Column<bool>(type: "boolean", nullable: false),
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
                    table.PrimaryKey("PK_ManagementInformation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ManagementInformation_Departments_DepartmentId",
                        column: x => x.DepartmentId,
                        principalTable: "Departments",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ManagementInformation_Directorates_DirectorateId",
                        column: x => x.DirectorateId,
                        principalTable: "Directorates",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ManagementInformation_Employees_Id",
                        column: x => x.Id,
                        principalTable: "Employees",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ManagementInformation_JobDegree_EmploymentDegreeId",
                        column: x => x.EmploymentDegreeId,
                        principalTable: "JobDegree",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ManagementInformation_JobDegree_StopJobDegreeId",
                        column: x => x.StopJobDegreeId,
                        principalTable: "JobDegree",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ManagementInformation_JobDescription_JobDescriptionId",
                        column: x => x.JobDescriptionId,
                        principalTable: "JobDescription",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ManagementInformation_JobTitle_JobTitleId",
                        column: x => x.JobTitleId,
                        principalTable: "JobTitle",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ManagementInformation_Position_PositionId",
                        column: x => x.PositionId,
                        principalTable: "Position",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ManagementInformation_Sections_SectionId",
                        column: x => x.SectionId,
                        principalTable: "Sections",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ManagementInformation_SubDirectorates_SubDirectorateId",
                        column: x => x.SubDirectorateId,
                        principalTable: "SubDirectorates",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ManagementInformation_Units_UnitId",
                        column: x => x.UnitId,
                        principalTable: "Units",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Movements",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    OrderNo = table.Column<string>(type: "text", nullable: true),
                    OrderDate = table.Column<DateOnly>(type: "date", nullable: true),
                    FromDirectorateId = table.Column<int>(type: "integer", nullable: true),
                    FromSubDirectorateId = table.Column<int>(type: "integer", nullable: true),
                    FromDepartmentId = table.Column<int>(type: "integer", nullable: true),
                    FromSectionId = table.Column<int>(type: "integer", nullable: true),
                    FromUniteId = table.Column<int>(type: "integer", nullable: true),
                    ToDirectorateId = table.Column<int>(type: "integer", nullable: true),
                    ToSubDirectorateId = table.Column<int>(type: "integer", nullable: true),
                    ToDepartmentId = table.Column<int>(type: "integer", nullable: true),
                    ToSectionId = table.Column<int>(type: "integer", nullable: true),
                    ToUnitId = table.Column<int>(type: "integer", nullable: true),
                    ReleaseOrderDate = table.Column<DateOnly>(type: "date", nullable: true),
                    ReleaseOrderNo = table.Column<string>(type: "text", nullable: true),
                    ReleaseDate = table.Column<DateOnly>(type: "date", nullable: true),
                    HireOrderDate = table.Column<DateOnly>(type: "date", nullable: true),
                    HireDate = table.Column<DateOnly>(type: "date", nullable: true),
                    HireOrderNo = table.Column<string>(type: "text", nullable: true),
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
                    table.PrimaryKey("PK_Movements", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Movements_Departments_FromDepartmentId",
                        column: x => x.FromDepartmentId,
                        principalTable: "Departments",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Movements_Departments_ToDepartmentId",
                        column: x => x.ToDepartmentId,
                        principalTable: "Departments",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Movements_Directorates_FromDirectorateId",
                        column: x => x.FromDirectorateId,
                        principalTable: "Directorates",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Movements_Directorates_ToDirectorateId",
                        column: x => x.ToDirectorateId,
                        principalTable: "Directorates",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Movements_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Movements_Sections_FromSectionId",
                        column: x => x.FromSectionId,
                        principalTable: "Sections",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Movements_Sections_ToSectionId",
                        column: x => x.ToSectionId,
                        principalTable: "Sections",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Movements_SubDirectorates_FromSubDirectorateId",
                        column: x => x.FromSubDirectorateId,
                        principalTable: "SubDirectorates",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Movements_SubDirectorates_ToSubDirectorateId",
                        column: x => x.ToSubDirectorateId,
                        principalTable: "SubDirectorates",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Movements_Units_FromUniteId",
                        column: x => x.FromUniteId,
                        principalTable: "Units",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Movements_Units_ToUnitId",
                        column: x => x.ToUnitId,
                        principalTable: "Units",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Retirements",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    DirectorateId = table.Column<int>(type: "integer", nullable: true),
                    SubDirectorateId = table.Column<int>(type: "integer", nullable: true),
                    StartDate = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    AcademicAchievementId = table.Column<int>(type: "integer", nullable: true),
                    JobDegreeId = table.Column<int>(type: "integer", nullable: true),
                    JobCategoryId = table.Column<int>(type: "integer", nullable: true),
                    JobTitleId = table.Column<int>(type: "integer", nullable: true),
                    DecisionToFixAge = table.Column<string>(type: "text", nullable: true),
                    EmployeePositionId = table.Column<Guid>(type: "uuid", nullable: true),
                    EndDateOfService = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    Birthdate = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    RetirementDate = table.Column<int>(type: "integer", nullable: false),
                    AdministrativeOrderNo = table.Column<string>(type: "text", nullable: true),
                    AdministrativeOrderDate = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    IsPoliticallyDismissed = table.Column<bool>(type: "boolean", nullable: false),
                    Status = table.Column<int>(type: "integer", nullable: true),
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
                    table.PrimaryKey("PK_Retirements", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Retirements_AcademicAchievement_AcademicAchievementId",
                        column: x => x.AcademicAchievementId,
                        principalTable: "AcademicAchievement",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Retirements_Directorates_DirectorateId",
                        column: x => x.DirectorateId,
                        principalTable: "Directorates",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Retirements_EmployeePositions_EmployeePositionId",
                        column: x => x.EmployeePositionId,
                        principalTable: "EmployeePositions",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Retirements_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Retirements_JobCategory_JobCategoryId",
                        column: x => x.JobCategoryId,
                        principalTable: "JobCategory",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Retirements_JobDegree_JobDegreeId",
                        column: x => x.JobDegreeId,
                        principalTable: "JobDegree",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Retirements_JobTitle_JobTitleId",
                        column: x => x.JobTitleId,
                        principalTable: "JobTitle",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Retirements_SubDirectorates_SubDirectorateId",
                        column: x => x.SubDirectorateId,
                        principalTable: "SubDirectorates",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Absence_EmployeeId",
                table: "Absence",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_AcademicAchievement_JobDegreeId",
                table: "AcademicAchievement",
                column: "JobDegreeId");

            migrationBuilder.CreateIndex(
                name: "IX_AddressInformation_EmployeeId",
                table: "AddressInformation",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_AddressInformation_GovernorateId",
                table: "AddressInformation",
                column: "GovernorateId");

            migrationBuilder.CreateIndex(
                name: "IX_AddressInformation_ProvinceId",
                table: "AddressInformation",
                column: "ProvinceId");

            migrationBuilder.CreateIndex(
                name: "IX_AddressInformation_TerritoryId",
                table: "AddressInformation",
                column: "TerritoryId");

            migrationBuilder.CreateIndex(
                name: "IX_AdministrativeOrder_EmployeeId",
                table: "AdministrativeOrder",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_Assignments_EmployeeId",
                table: "Assignments",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_Assignments_TypeOfAssignmentId",
                table: "Assignments",
                column: "TypeOfAssignmentId");

            migrationBuilder.CreateIndex(
                name: "IX_Attributes_EmployeeId",
                table: "Attributes",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_ChangeDegree_EmployeeId",
                table: "ChangeDegree",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_ChangeDegree_JobCategoryFromId",
                table: "ChangeDegree",
                column: "JobCategoryFromId");

            migrationBuilder.CreateIndex(
                name: "IX_ChangeDegree_JobCategoryToId",
                table: "ChangeDegree",
                column: "JobCategoryToId");

            migrationBuilder.CreateIndex(
                name: "IX_ChangeDegree_JobDegreeFromId",
                table: "ChangeDegree",
                column: "JobDegreeFromId");

            migrationBuilder.CreateIndex(
                name: "IX_ChangeDegree_JobDegreeToId",
                table: "ChangeDegree",
                column: "JobDegreeToId");

            migrationBuilder.CreateIndex(
                name: "IX_ChangeDegree_JobDescriptionFromId",
                table: "ChangeDegree",
                column: "JobDescriptionFromId");

            migrationBuilder.CreateIndex(
                name: "IX_ChangeDegree_JobDescriptionToId",
                table: "ChangeDegree",
                column: "JobDescriptionToId");

            migrationBuilder.CreateIndex(
                name: "IX_ChangeDegree_JobTitleFromId",
                table: "ChangeDegree",
                column: "JobTitleFromId");

            migrationBuilder.CreateIndex(
                name: "IX_ChangeDegree_JobTitleToId",
                table: "ChangeDegree",
                column: "JobTitleToId");

            migrationBuilder.CreateIndex(
                name: "IX_ChangeDueDate_EmployeeId",
                table: "ChangeDueDate",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_ChangeJobTitle_EmployeeId",
                table: "ChangeJobTitle",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_ChangeJobTitle_NewJobDescriptionId",
                table: "ChangeJobTitle",
                column: "NewJobDescriptionId");

            migrationBuilder.CreateIndex(
                name: "IX_ChangeJobTitle_NewJobTitleId",
                table: "ChangeJobTitle",
                column: "NewJobTitleId");

            migrationBuilder.CreateIndex(
                name: "IX_ChangeJobTitle_OldJobDescriptionId",
                table: "ChangeJobTitle",
                column: "OldJobDescriptionId");

            migrationBuilder.CreateIndex(
                name: "IX_ChangeJobTitle_OldJobTitleId",
                table: "ChangeJobTitle",
                column: "OldJobTitleId");

            migrationBuilder.CreateIndex(
                name: "IX_ContactInformation_EmployeeId",
                table: "ContactInformation",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_ContactInformation_LevelOfRelationshipId",
                table: "ContactInformation",
                column: "LevelOfRelationshipId");

            migrationBuilder.CreateIndex(
                name: "IX_CorrectingAcademicAchievements_DegreeFromId",
                table: "CorrectingAcademicAchievements",
                column: "DegreeFromId");

            migrationBuilder.CreateIndex(
                name: "IX_CorrectingAcademicAchievements_DegreeToId",
                table: "CorrectingAcademicAchievements",
                column: "DegreeToId");

            migrationBuilder.CreateIndex(
                name: "IX_CorrectingAcademicAchievements_EmployeeId",
                table: "CorrectingAcademicAchievements",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_CorrectingAcademicAchievements_JobCategoryFromId",
                table: "CorrectingAcademicAchievements",
                column: "JobCategoryFromId");

            migrationBuilder.CreateIndex(
                name: "IX_CorrectingAcademicAchievements_JobCategoryToId",
                table: "CorrectingAcademicAchievements",
                column: "JobCategoryToId");

            migrationBuilder.CreateIndex(
                name: "IX_CorrectingAcademicAchievements_JobDescriptionFromId",
                table: "CorrectingAcademicAchievements",
                column: "JobDescriptionFromId");

            migrationBuilder.CreateIndex(
                name: "IX_CorrectingAcademicAchievements_JobDescriptionToId",
                table: "CorrectingAcademicAchievements",
                column: "JobDescriptionToId");

            migrationBuilder.CreateIndex(
                name: "IX_CorrectingAcademicAchievements_JobTitleFromId",
                table: "CorrectingAcademicAchievements",
                column: "JobTitleFromId");

            migrationBuilder.CreateIndex(
                name: "IX_CorrectingAcademicAchievements_JobTitleToId",
                table: "CorrectingAcademicAchievements",
                column: "JobTitleToId");

            migrationBuilder.CreateIndex(
                name: "IX_Departments_DirectorateId",
                table: "Departments",
                column: "DirectorateId");

            migrationBuilder.CreateIndex(
                name: "IX_Departments_SubDirectorateId",
                table: "Departments",
                column: "SubDirectorateId");

            migrationBuilder.CreateIndex(
                name: "IX_DocVerifications_EmployeeId",
                table: "DocVerifications",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_EducationInformation_AcademicAchievementId",
                table: "EducationInformation",
                column: "AcademicAchievementId");

            migrationBuilder.CreateIndex(
                name: "IX_EducationInformation_AcademicFieldId",
                table: "EducationInformation",
                column: "AcademicFieldId");

            migrationBuilder.CreateIndex(
                name: "IX_EducationInformation_CountryId",
                table: "EducationInformation",
                column: "CountryId");

            migrationBuilder.CreateIndex(
                name: "IX_EducationInformation_EmployeeId",
                table: "EducationInformation",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_EducationInformation_PreciseAcademicFieldId",
                table: "EducationInformation",
                column: "PreciseAcademicFieldId");

            migrationBuilder.CreateIndex(
                name: "IX_EducationInformation_StudyTypeId",
                table: "EducationInformation",
                column: "StudyTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_EmployeeApplicableLaws_EmployeeId",
                table: "EmployeeApplicableLaws",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_EmployeeApplicableLaws_LawId",
                table: "EmployeeApplicableLaws",
                column: "LawId");

            migrationBuilder.CreateIndex(
                name: "IX_EmployeeCourses_EmployeeId",
                table: "EmployeeCourses",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_EmployeeDisciplinary_EmployeeId",
                table: "EmployeeDisciplinary",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_EmployeeDisciplinary_TypeOfDisciplinaryId",
                table: "EmployeeDisciplinary",
                column: "TypeOfDisciplinaryId");

            migrationBuilder.CreateIndex(
                name: "IX_EmployeeDocuments_EmployeeDocumentTypeId",
                table: "EmployeeDocuments",
                column: "EmployeeDocumentTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_EmployeeDocuments_EmployeeId",
                table: "EmployeeDocuments",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_EmployeePositions_DepartmentId",
                table: "EmployeePositions",
                column: "DepartmentId");

            migrationBuilder.CreateIndex(
                name: "IX_EmployeePositions_DirectorateId",
                table: "EmployeePositions",
                column: "DirectorateId");

            migrationBuilder.CreateIndex(
                name: "IX_EmployeePositions_EmployeeId",
                table: "EmployeePositions",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_EmployeePositions_PositionId",
                table: "EmployeePositions",
                column: "PositionId");

            migrationBuilder.CreateIndex(
                name: "IX_EmployeePositions_SectionId",
                table: "EmployeePositions",
                column: "SectionId");

            migrationBuilder.CreateIndex(
                name: "IX_EmployeePositions_SubDirectorateId",
                table: "EmployeePositions",
                column: "SubDirectorateId");

            migrationBuilder.CreateIndex(
                name: "IX_EmployeePositions_UnitId",
                table: "EmployeePositions",
                column: "UnitId");

            migrationBuilder.CreateIndex(
                name: "Employees_JobCode_key",
                table: "Employees",
                column: "JobCode",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "Employees_LotNumber_key",
                table: "Employees",
                column: "LotNumber",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "Employees_StatisticalIndex_key",
                table: "Employees",
                column: "StatisticalIndex",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Employees_CountryId",
                table: "Employees",
                column: "CountryId");

            migrationBuilder.CreateIndex(
                name: "IX_HandPull_EmployeeId",
                table: "HandPull",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_Interruption_EmployeeId",
                table: "Interruption",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_JobCategory_DegreeId",
                table: "JobCategory",
                column: "DegreeId");

            migrationBuilder.CreateIndex(
                name: "IX_JobInformation_TypeOfJobId",
                table: "JobInformation",
                column: "TypeOfJobId");

            migrationBuilder.CreateIndex(
                name: "IX_JobTitle_DegreeId",
                table: "JobTitle",
                column: "DegreeId");

            migrationBuilder.CreateIndex(
                name: "IX_Leaves_CountryId",
                table: "Leaves",
                column: "CountryId");

            migrationBuilder.CreateIndex(
                name: "IX_Leaves_EmployeeId",
                table: "Leaves",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_Leaves_LongLeaveTypeId",
                table: "Leaves",
                column: "LongLeaveTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Leaves_NormalLeaveTypeId",
                table: "Leaves",
                column: "NormalLeaveTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Leaves_SicknessTypeId",
                table: "Leaves",
                column: "SicknessTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_LogLeavesBalance_EmployeeId",
                table: "LogLeavesBalance",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_LogPromotionWithholdings_EmployeeId",
                table: "LogPromotionWithholdings",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_ManagementInformation_DepartmentId",
                table: "ManagementInformation",
                column: "DepartmentId");

            migrationBuilder.CreateIndex(
                name: "IX_ManagementInformation_DirectorateId",
                table: "ManagementInformation",
                column: "DirectorateId");

            migrationBuilder.CreateIndex(
                name: "IX_ManagementInformation_EmploymentDegreeId",
                table: "ManagementInformation",
                column: "EmploymentDegreeId");

            migrationBuilder.CreateIndex(
                name: "IX_ManagementInformation_JobDescriptionId",
                table: "ManagementInformation",
                column: "JobDescriptionId");

            migrationBuilder.CreateIndex(
                name: "IX_ManagementInformation_JobTitleId",
                table: "ManagementInformation",
                column: "JobTitleId");

            migrationBuilder.CreateIndex(
                name: "IX_ManagementInformation_PositionId",
                table: "ManagementInformation",
                column: "PositionId");

            migrationBuilder.CreateIndex(
                name: "IX_ManagementInformation_SectionId",
                table: "ManagementInformation",
                column: "SectionId");

            migrationBuilder.CreateIndex(
                name: "IX_ManagementInformation_StopJobDegreeId",
                table: "ManagementInformation",
                column: "StopJobDegreeId");

            migrationBuilder.CreateIndex(
                name: "IX_ManagementInformation_SubDirectorateId",
                table: "ManagementInformation",
                column: "SubDirectorateId");

            migrationBuilder.CreateIndex(
                name: "IX_ManagementInformation_UnitId",
                table: "ManagementInformation",
                column: "UnitId");

            migrationBuilder.CreateIndex(
                name: "IX_MarriageInformation_EmployeeId",
                table: "MarriageInformation",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_MartyrsAndWounded_EmployeeId",
                table: "MartyrsAndWounded",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_Movements_EmployeeId",
                table: "Movements",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_Movements_FromDepartmentId",
                table: "Movements",
                column: "FromDepartmentId");

            migrationBuilder.CreateIndex(
                name: "IX_Movements_FromDirectorateId",
                table: "Movements",
                column: "FromDirectorateId");

            migrationBuilder.CreateIndex(
                name: "IX_Movements_FromSectionId",
                table: "Movements",
                column: "FromSectionId");

            migrationBuilder.CreateIndex(
                name: "IX_Movements_FromSubDirectorateId",
                table: "Movements",
                column: "FromSubDirectorateId");

            migrationBuilder.CreateIndex(
                name: "IX_Movements_FromUniteId",
                table: "Movements",
                column: "FromUniteId");

            migrationBuilder.CreateIndex(
                name: "IX_Movements_ToDepartmentId",
                table: "Movements",
                column: "ToDepartmentId");

            migrationBuilder.CreateIndex(
                name: "IX_Movements_ToDirectorateId",
                table: "Movements",
                column: "ToDirectorateId");

            migrationBuilder.CreateIndex(
                name: "IX_Movements_ToSectionId",
                table: "Movements",
                column: "ToSectionId");

            migrationBuilder.CreateIndex(
                name: "IX_Movements_ToSubDirectorateId",
                table: "Movements",
                column: "ToSubDirectorateId");

            migrationBuilder.CreateIndex(
                name: "IX_Movements_ToUnitId",
                table: "Movements",
                column: "ToUnitId");

            migrationBuilder.CreateIndex(
                name: "IX_Promotion_JobCategoryId",
                table: "Promotion",
                column: "JobCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Promotion_JobDegreeId",
                table: "Promotion",
                column: "JobDegreeId");

            migrationBuilder.CreateIndex(
                name: "IX_Promotion_SentPromotionGroupId",
                table: "Promotion",
                column: "SentPromotionGroupId");

            migrationBuilder.CreateIndex(
                name: "IX_Resignations_EmployeeId",
                table: "Resignations",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_Retirements_AcademicAchievementId",
                table: "Retirements",
                column: "AcademicAchievementId");

            migrationBuilder.CreateIndex(
                name: "IX_Retirements_DirectorateId",
                table: "Retirements",
                column: "DirectorateId");

            migrationBuilder.CreateIndex(
                name: "IX_Retirements_EmployeeId",
                table: "Retirements",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_Retirements_EmployeePositionId",
                table: "Retirements",
                column: "EmployeePositionId");

            migrationBuilder.CreateIndex(
                name: "IX_Retirements_JobCategoryId",
                table: "Retirements",
                column: "JobCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Retirements_JobDegreeId",
                table: "Retirements",
                column: "JobDegreeId");

            migrationBuilder.CreateIndex(
                name: "IX_Retirements_JobTitleId",
                table: "Retirements",
                column: "JobTitleId");

            migrationBuilder.CreateIndex(
                name: "IX_Retirements_SubDirectorateId",
                table: "Retirements",
                column: "SubDirectorateId");

            migrationBuilder.CreateIndex(
                name: "IX_Sections_DepartmentId",
                table: "Sections",
                column: "DepartmentId");

            migrationBuilder.CreateIndex(
                name: "IX_Sections_DirectorateId",
                table: "Sections",
                column: "DirectorateId");

            migrationBuilder.CreateIndex(
                name: "IX_Sections_SubDirectorateId",
                table: "Sections",
                column: "SubDirectorateId");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceCalculation_EmployeeId",
                table: "ServiceCalculation",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceCalculation_EmployeesId",
                table: "ServiceCalculation",
                column: "EmployeesId");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceCalculation_TypeOfServiceId",
                table: "ServiceCalculation",
                column: "TypeOfServiceId");

            migrationBuilder.CreateIndex(
                name: "IX_StudyFile_EmployeeId",
                table: "StudyFile",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_StudyLeave_AcademicAchievementId",
                table: "StudyLeave",
                column: "AcademicAchievementId");

            migrationBuilder.CreateIndex(
                name: "IX_StudyLeave_AcademicCertificateTypeId",
                table: "StudyLeave",
                column: "AcademicCertificateTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_StudyLeave_AcademicFieldId",
                table: "StudyLeave",
                column: "AcademicFieldId");

            migrationBuilder.CreateIndex(
                name: "IX_StudyLeave_CountryId",
                table: "StudyLeave",
                column: "CountryId");

            migrationBuilder.CreateIndex(
                name: "IX_StudyLeave_EmployeeId",
                table: "StudyLeave",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_StudyLeave_StudyFileId",
                table: "StudyLeave",
                column: "StudyFileId");

            migrationBuilder.CreateIndex(
                name: "IX_StudyLeave_StudyResultId",
                table: "StudyLeave",
                column: "StudyResultId");

            migrationBuilder.CreateIndex(
                name: "IX_StudyLeave_StudyStatusId",
                table: "StudyLeave",
                column: "StudyStatusId");

            migrationBuilder.CreateIndex(
                name: "IX_StudyLeaveExtension_EmployeeId",
                table: "StudyLeaveExtension",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_StudyLeaveExtension_StudyExtensionOrderTypeId",
                table: "StudyLeaveExtension",
                column: "StudyExtensionOrderTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_StudyLeaveExtension_StudyFileId",
                table: "StudyLeaveExtension",
                column: "StudyFileId");

            migrationBuilder.CreateIndex(
                name: "IX_SubDirectorates_DirectorateId",
                table: "SubDirectorates",
                column: "DirectorateId");

            migrationBuilder.CreateIndex(
                name: "IX_TeamNotifications_EmployeeId",
                table: "TeamNotifications",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_ThanksAndSeniority_EmployeeId",
                table: "ThanksAndSeniority",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_ThanksAndSeniority_TypeOfBookId",
                table: "ThanksAndSeniority",
                column: "TypeOfBookId");

            migrationBuilder.CreateIndex(
                name: "IX_ThanksAndSeniority_TypeOfSeniorityId",
                table: "ThanksAndSeniority",
                column: "TypeOfSeniorityId");

            migrationBuilder.CreateIndex(
                name: "IX_Units_DepartmentId",
                table: "Units",
                column: "DepartmentId");

            migrationBuilder.CreateIndex(
                name: "IX_Units_DirectorateId",
                table: "Units",
                column: "DirectorateId");

            migrationBuilder.CreateIndex(
                name: "IX_Units_SectionId",
                table: "Units",
                column: "SectionId");

            migrationBuilder.CreateIndex(
                name: "IX_Units_SubDirectorateId",
                table: "Units",
                column: "SubDirectorateId");

            migrationBuilder.CreateIndex(
                name: "IX_Valuation_EmployeeId",
                table: "Valuation",
                column: "EmployeeId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Absence");

            migrationBuilder.DropTable(
                name: "AddressInformation");

            migrationBuilder.DropTable(
                name: "AdministrativeOrder");

            migrationBuilder.DropTable(
                name: "AppSettings");

            migrationBuilder.DropTable(
                name: "Assignments");

            migrationBuilder.DropTable(
                name: "Attachments");

            migrationBuilder.DropTable(
                name: "Attributes");

            migrationBuilder.DropTable(
                name: "ChangeDegree");

            migrationBuilder.DropTable(
                name: "ChangeDueDate");

            migrationBuilder.DropTable(
                name: "ChangeJobTitle");

            migrationBuilder.DropTable(
                name: "CompletedOrders");

            migrationBuilder.DropTable(
                name: "ContactInformation");

            migrationBuilder.DropTable(
                name: "CorrectingAcademicAchievements");

            migrationBuilder.DropTable(
                name: "DocVerifications");

            migrationBuilder.DropTable(
                name: "EducationInformation");

            migrationBuilder.DropTable(
                name: "EmployeeApplicableLaws");

            migrationBuilder.DropTable(
                name: "EmployeeCourses");

            migrationBuilder.DropTable(
                name: "EmployeeDisciplinary");

            migrationBuilder.DropTable(
                name: "EmployeeDocuments");

            migrationBuilder.DropTable(
                name: "EmployeeService");

            migrationBuilder.DropTable(
                name: "HandPull");

            migrationBuilder.DropTable(
                name: "Interruption");

            migrationBuilder.DropTable(
                name: "JobInformation");

            migrationBuilder.DropTable(
                name: "Leaves");

            migrationBuilder.DropTable(
                name: "LeavesBalance");

            migrationBuilder.DropTable(
                name: "LeavesMedicalBalance");

            migrationBuilder.DropTable(
                name: "LogLeavesBalance");

            migrationBuilder.DropTable(
                name: "LogPromotionWithholdings");

            migrationBuilder.DropTable(
                name: "ManagementInformation");

            migrationBuilder.DropTable(
                name: "MarriageInformation");

            migrationBuilder.DropTable(
                name: "MartyrsAndWounded");

            migrationBuilder.DropTable(
                name: "Movements");

            migrationBuilder.DropTable(
                name: "Promotion");

            migrationBuilder.DropTable(
                name: "Resignations");

            migrationBuilder.DropTable(
                name: "Retirements");

            migrationBuilder.DropTable(
                name: "ServiceCalculation");

            migrationBuilder.DropTable(
                name: "StudyLeave");

            migrationBuilder.DropTable(
                name: "StudyLeaveExtension");

            migrationBuilder.DropTable(
                name: "TeamNotifications");

            migrationBuilder.DropTable(
                name: "ThanksAndSeniority");

            migrationBuilder.DropTable(
                name: "ThanksAndSeniorityCalculation");

            migrationBuilder.DropTable(
                name: "TypeOfLeave");

            migrationBuilder.DropTable(
                name: "Valuation");

            migrationBuilder.DropTable(
                name: "Governorate");

            migrationBuilder.DropTable(
                name: "Province");

            migrationBuilder.DropTable(
                name: "Territory");

            migrationBuilder.DropTable(
                name: "TypeOfAssignment");

            migrationBuilder.DropTable(
                name: "LevelOfRelationship");

            migrationBuilder.DropTable(
                name: "PreciseAcademicField");

            migrationBuilder.DropTable(
                name: "StudyType");

            migrationBuilder.DropTable(
                name: "Laws");

            migrationBuilder.DropTable(
                name: "TypeOfDisciplinary");

            migrationBuilder.DropTable(
                name: "EmployeeDocumentsType");

            migrationBuilder.DropTable(
                name: "TypeOfJob");

            migrationBuilder.DropTable(
                name: "LongLeaveType");

            migrationBuilder.DropTable(
                name: "NormalLeaveType");

            migrationBuilder.DropTable(
                name: "SicknessType");

            migrationBuilder.DropTable(
                name: "JobDescription");

            migrationBuilder.DropTable(
                name: "PromotionGroup");

            migrationBuilder.DropTable(
                name: "EmployeePositions");

            migrationBuilder.DropTable(
                name: "JobCategory");

            migrationBuilder.DropTable(
                name: "JobTitle");

            migrationBuilder.DropTable(
                name: "TypeOfService");

            migrationBuilder.DropTable(
                name: "AcademicAchievement");

            migrationBuilder.DropTable(
                name: "AcademicCertificateType");

            migrationBuilder.DropTable(
                name: "AcademicField");

            migrationBuilder.DropTable(
                name: "StudyResult");

            migrationBuilder.DropTable(
                name: "StudyStatus");

            migrationBuilder.DropTable(
                name: "StudyExtensionOrderType");

            migrationBuilder.DropTable(
                name: "StudyFile");

            migrationBuilder.DropTable(
                name: "TypeOfBook");

            migrationBuilder.DropTable(
                name: "TypeOfSeniority");

            migrationBuilder.DropTable(
                name: "Position");

            migrationBuilder.DropTable(
                name: "Units");

            migrationBuilder.DropTable(
                name: "JobDegree");

            migrationBuilder.DropTable(
                name: "Employees");

            migrationBuilder.DropTable(
                name: "Sections");

            migrationBuilder.DropTable(
                name: "Country");

            migrationBuilder.DropTable(
                name: "Departments");

            migrationBuilder.DropTable(
                name: "SubDirectorates");

            migrationBuilder.DropTable(
                name: "Directorates");
        }
    }
}
