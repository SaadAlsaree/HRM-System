using HRM.Hub.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace HRM.Hub.Persistence.Entities;

public partial class HumanResourcesDbContext : DbContext
{
    public HumanResourcesDbContext()
    {
    }

    public HumanResourcesDbContext(DbContextOptions<HumanResourcesDbContext> options)
        : base(options)
    {
        AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        AppContext.SetSwitch("Npgsql.DisableDateTimeInfinityConversions", true);
    }

    public virtual DbSet<Absence> Absence { get; set; }

    public virtual DbSet<CompletedOrders> CompletedOrders { get; set; }
    public virtual DbSet<AppSetting> AppSettings { get; set; }

    public virtual DbSet<AcademicAchievement> AcademicAchievement { get; set; }
    public virtual DbSet<LogPromotionWithholding> LogPromotionWithholdings { get; set; }

    public virtual DbSet<AcademicCertificateType> AcademicCertificateType { get; set; }

    public virtual DbSet<AcademicField> AcademicField { get; set; }

    public virtual DbSet<AddressInformation> AddressInformation { get; set; }

    public virtual DbSet<AdministrativeOrder> AdministrativeOrder { get; set; }
    public DbSet<DocVerifications> DocVerifications { get; set; }
    public virtual DbSet<TeamNotifications> TeamNotifications { get; set; }

    public virtual DbSet<Assignments> Assignments { get; set; }

    public virtual DbSet<Attachments> Attachments { get; set; }

    public virtual DbSet<Attributes> Attributes { get; set; }

    public virtual DbSet<ChangeDegrees> ChangeDegree { get; set; }

    public virtual DbSet<ChangeDueDates> ChangeDueDate { get; set; }

    public virtual DbSet<ContactInformation> ContactInformation { get; set; }

    public virtual DbSet<Country> Country { get; set; }

    public virtual DbSet<Departments> Departments { get; set; }

    public virtual DbSet<Directorates> Directorates { get; set; }

    public virtual DbSet<EducationInformation> EducationInformation { get; set; }

    public virtual DbSet<EmployeeApplicableLaws> EmployeeApplicableLaws { get; set; }

    public virtual DbSet<EmployeeDisciplinary> EmployeeDisciplinary { get; set; }

    public virtual DbSet<EmployeeDocuments> EmployeeDocuments { get; set; }

    public virtual DbSet<EmployeeDocumentsType> EmployeeDocumentsType { get; set; }

    public virtual DbSet<EmployeeService> EmployeeService { get; set; }

    public virtual DbSet<Employees> Employees { get; set; }
    public virtual DbSet<Governorate> Governorate { get; set; }

    public virtual DbSet<JobCategory> JobCategory { get; set; }

    public virtual DbSet<JobDegree> JobDegree { get; set; }

    public virtual DbSet<JobDescription> JobDescription { get; set; }

    public virtual DbSet<JobInformation> JobInformation { get; set; }

    public virtual DbSet<JobTitle> JobTitle { get; set; }

    public virtual DbSet<Laws> Laws { get; set; }

    public virtual DbSet<Leaves> Leaves { get; set; }

    public virtual DbSet<LeavesBalance> LeavesBalance { get; set; }

    public virtual DbSet<LeavesMedicalBalance> LeavesMedicalBalance { get; set; }

    public virtual DbSet<LevelOfRelationship> LevelOfRelationship { get; set; }

    public virtual DbSet<LogLeavesBalance> LogLeavesBalance { get; set; }

    public virtual DbSet<ManagementInformation> ManagementInformation { get; set; }

    public virtual DbSet<MarriageInformation> MarriageInformation { get; set; }

    public virtual DbSet<Movements> Movements { get; set; }

    public virtual DbSet<NormalLeaveType> NormalLeaveType { get; set; }

    public virtual DbSet<Position> Position { get; set; }

    public virtual DbSet<PreciseAcademicField> PreciseAcademicField { get; set; }

    public virtual DbSet<Promotion> Promotion { get; set; }

    public virtual DbSet<PromotionGroup> PromotionGroup { get; set; }

    public virtual DbSet<Province> Province { get; set; }

    public virtual DbSet<Sections> Sections { get; set; }

    public virtual DbSet<ServiceCalculation> ServiceCalculation { get; set; }

    public virtual DbSet<SicknessType> SicknessType { get; set; }

    public virtual DbSet<StudyExtensionOrderType> StudyExtensionOrderType { get; set; }

    public virtual DbSet<StudyFile> StudyFile { get; set; }

    public virtual DbSet<StudyLeave> StudyLeave { get; set; }

    public virtual DbSet<StudyLeaveExtension> StudyLeaveExtension { get; set; }

    public virtual DbSet<StudyResult> StudyResult { get; set; }

    public virtual DbSet<StudyStatus> StudyStatus { get; set; }

    public virtual DbSet<StudyType> StudyType { get; set; }

    public virtual DbSet<SubDirectorates> SubDirectorates { get; set; }

    public virtual DbSet<Territory> Territory { get; set; }

    public virtual DbSet<ThanksAndSeniority> ThanksAndSeniority { get; set; }

    public virtual DbSet<ThanksAndSeniorityCalculation> ThanksAndSeniorityCalculation { get; set; }

    public virtual DbSet<TypeOfAssignment> TypeOfAssignment { get; set; }

    public virtual DbSet<TypeOfBook> TypeOfBook { get; set; }

    public virtual DbSet<TypeOfJob> TypeOfJob { get; set; }

    public virtual DbSet<TypeOfLeave> TypeOfLeave { get; set; }

    public virtual DbSet<TypeOfSeniority> TypeOfSeniority { get; set; }

    public virtual DbSet<TypeOfService> TypeOfService { get; set; }

    public virtual DbSet<Units> Units { get; set; }

    public virtual DbSet<Valuation> Valuation { get; set; }
    public virtual DbSet<Resignation> Resignations { get; set; }
    public virtual DbSet<Interruption> Interruption { get; set; }
    public virtual DbSet<EmployeeCourse> EmployeeCourses { get; set; }
    public virtual DbSet<HandPull> HandPull { get; set; }
    public virtual DbSet<EmployeePosition> EmployeePositions { get; set; }
    public virtual DbSet<Retirement> Retirements { get; set; }
    public virtual DbSet<MartyrsAndWounded> MartyrsAndWounded { get; set; }
    public virtual DbSet<ChangeJobTitle> ChangeJobTitle { get; set; }
    public virtual DbSet<CorrectingAcademicAchievements> CorrectingAcademicAchievements { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());


        OnModelCreatingPartial(modelBuilder);
    }

    void OnModelCreatingPartial(ModelBuilder modelBuilder)
    {
        #region Absence
        modelBuilder.Entity<Absence>()
            .HasOne(cd => cd.Employee)
            .WithMany(e => e.Absence)
            .HasForeignKey(cd => cd.EmployeeId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        #endregion
        #region Academic Achievement
        modelBuilder.Entity<AcademicAchievement>()
            .HasOne(cd => cd.JobDegree)
            .WithMany(e => e.AcademicAchievement)
            .HasForeignKey(cd => cd.JobDegreeId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        #endregion

        #region  Address Information

        modelBuilder.Entity<AddressInformation>()
            .HasOne(cd => cd.Employee)
            .WithMany(e => e.AddressInformation)
            .HasForeignKey(cd => cd.EmployeeId)
            .OnDelete(DeleteBehavior.ClientNoAction);


        modelBuilder.Entity<AddressInformation>()
            .HasOne(cd => cd.Governorate)
            .WithMany(e => e.AddressInformation)
            .HasForeignKey(cd => cd.GovernorateId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<AddressInformation>()
            .HasOne(cd => cd.Province)
            .WithMany(e => e.AddressInformation)
            .HasForeignKey(cd => cd.ProvinceId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<AddressInformation>()
            .HasOne(cd => cd.Territory)
            .WithMany(e => e.AddressInformation)
            .HasForeignKey(cd => cd.TerritoryId)
            .OnDelete(DeleteBehavior.ClientNoAction);
        #endregion

        #region Administrative Order

        modelBuilder.Entity<AdministrativeOrder>()
            .HasOne(cd => cd.Employee)
            .WithMany(e => e.AdministrativeOrder)
            .HasForeignKey(cd => cd.EmployeeId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        #endregion

        #region Assignments

        modelBuilder.Entity<Assignments>()
            .HasOne(cd => cd.Employee)
            .WithMany(e => e.Assignments)
            .HasForeignKey(cd => cd.EmployeeId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        #endregion

        #region Change Degree

        modelBuilder.Entity<ChangeDegrees>()
            .HasOne(cd => cd.Employee)
            .WithMany(e => e.ChangeDegree)
            .HasForeignKey(cd => cd.EmployeeId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<ChangeDegrees>()
            .HasOne(cd => cd.JobDegreeFrom)
            .WithMany(e => e.ChangeDegreeFrom)
            .HasForeignKey(cd => cd.JobDegreeFromId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<ChangeDegrees>()
            .HasOne(cd => cd.JobDegreeTo)
            .WithMany(e => e.ChangeDegreeTo)
            .HasForeignKey(cd => cd.JobDegreeToId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<ChangeDegrees>()
            .HasOne(cd => cd.JobCategoryFrom)
            .WithMany(e => e.ChangeDegreeFrom)
            .HasForeignKey(cd => cd.JobCategoryFromId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<ChangeDegrees>()
            .HasOne(cd => cd.JobCategoryTo)
            .WithMany(e => e.ChangeDegreeTo)
            .HasForeignKey(cd => cd.JobCategoryToId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<ChangeDegrees>()
            .HasOne(cd => cd.JobDescriptionFrom)
            .WithMany(e => e.ChangeDegreeJobDescriptionFrom)
            .HasForeignKey(cd => cd.JobDescriptionFromId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<ChangeDegrees>()
            .HasOne(cd => cd.JobDescriptionTo)
            .WithMany(e => e.ChangeDegreeJobDescriptionTo)
            .HasForeignKey(cd => cd.JobDescriptionToId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<ChangeDegrees>()
            .HasOne(cd => cd.JobTitleFrom)
            .WithMany(e => e.ChangeDegreeJobTitleFrom)
            .HasForeignKey(cd => cd.JobTitleFromId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<ChangeDegrees>()
            .HasOne(cd => cd.JobTitleTo)
            .WithMany(e => e.ChangeDegreeJobTitleTo)
            .HasForeignKey(cd => cd.JobTitleToId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        #endregion

        #region Change Due Date
        modelBuilder.Entity<ChangeDueDates>()
            .HasOne(cd => cd.Employee)
            .WithMany(e => e.ChangeDueDate)
            .HasForeignKey(cd => cd.EmployeeId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        #endregion

        #region Change Job Title

        modelBuilder.Entity<ChangeJobTitle>()
        .HasOne<Employees>(c => c.Employee)
        .WithMany(e => e.ChangeJobTitle)
        .HasForeignKey(c => c.EmployeeId)
            .OnDelete(DeleteBehavior.ClientNoAction);


        modelBuilder.Entity<ChangeJobTitle>()
        .HasOne<JobDescription>(c => c.NewJobDescription)
        .WithMany(j => j.ChangeJobTitleNewJobDescription)
        .HasForeignKey(c => c.NewJobDescriptionId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<ChangeJobTitle>()
        .HasOne<JobDescription>(c => c.OldJobDescription)
        .WithMany(j => j.ChangeJobTitleOldJobDescription)
        .HasForeignKey(c => c.OldJobDescriptionId)
            .OnDelete(DeleteBehavior.ClientNoAction);


        modelBuilder.Entity<ChangeJobTitle>()
        .HasOne<JobTitle>(c => c.NewJobTitle)
        .WithMany(j => j.ChangeJobTitleNewJobTitle)
        .HasForeignKey(c => c.NewJobTitleId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<ChangeJobTitle>()
        .HasOne<JobTitle>(c => c.OldJobTitle)
        .WithMany(j => j.ChangeJobTitleOldJobTitle)
        .HasForeignKey(c => c.OldJobTitleId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        #endregion

        #region Contact Information
        modelBuilder.Entity<ContactInformation>()
            .HasOne<Employees>(ci => ci.Employee)
            .WithMany(e => e.ContactInformation)
            .HasForeignKey(ci => ci.EmployeeId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<ContactInformation>()
            .HasOne<LevelOfRelationship>(ci => ci.LevelOfRelationship)
            .WithMany(e => e.ContactInformation)
            .HasForeignKey(ci => ci.LevelOfRelationshipId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        #endregion

        #region Correcting Academic Achievements

        modelBuilder.Entity<CorrectingAcademicAchievements>()
            .HasOne<Employees>(caa => caa.Employee)
            .WithMany(e => e.CorrectingAcademicAchievements)
            .HasForeignKey(caa => caa.EmployeeId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<CorrectingAcademicAchievements>()
            .HasOne<JobDegree>(caa => caa.DegreeFrom)
            .WithMany(e => e.CorrectingAcademicAchievementDegreeFrom)
            .HasForeignKey(caa => caa.DegreeFromId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<CorrectingAcademicAchievements>()
            .HasOne<JobDegree>(caa => caa.DegreeTo)
            .WithMany(e => e.CorrectingAcademicAchievementDegreeTo)
            .HasForeignKey(caa => caa.DegreeToId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<CorrectingAcademicAchievements>()
            .HasOne<JobCategory>(caa => caa.JobCategoryFrom)
            .WithMany(e => e.CorrectingAcademicAchievementDegreeFrom)
            .HasForeignKey(caa => caa.JobCategoryFromId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<CorrectingAcademicAchievements>()
            .HasOne<JobCategory>(caa => caa.JobCategoryTo)
            .WithMany(e => e.CorrectingAcademicAchievementJobCategoryTo)
            .HasForeignKey(caa => caa.JobCategoryToId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<CorrectingAcademicAchievements>()
            .HasOne<JobDescription>(caa => caa.JobDescriptionFrom)
            .WithMany(e => e.CorrectingAcademicAchievementsDescriptionFrom)
            .HasForeignKey(caa => caa.JobDescriptionFromId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<CorrectingAcademicAchievements>()
            .HasOne<JobDescription>(caa => caa.JobDescriptionTo)
            .WithMany(e => e.CorrectingAcademicAchievementsDescriptionTo)
            .HasForeignKey(caa => caa.JobDescriptionToId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<CorrectingAcademicAchievements>()
            .HasOne<JobTitle>(caa => caa.JobTitleFrom)
            .WithMany(e => e.CorrectingAcademicAchievementsJobTitleFrom)
            .HasForeignKey(caa => caa.JobTitleFromId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<CorrectingAcademicAchievements>()
            .HasOne<JobTitle>(caa => caa.JobTitleTo)
            .WithMany(e => e.CorrectingAcademicAchievementsJobTitleTo)
            .HasForeignKey(caa => caa.JobTitleToId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        #endregion

        #region Departments

        modelBuilder.Entity<Departments>()
            .HasOne<Directorates>(d => d.Directorate)
            .WithMany(dr => dr.Departments)
            .HasForeignKey(d => d.DirectorateId)
            .IsRequired(false)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<Departments>()
            .HasOne<SubDirectorates>(d => d.SubDirectorate)
            .WithMany(sd => sd.Departments)
            .HasForeignKey(d => d.SubDirectorateId)
            .IsRequired(false)
            .OnDelete(DeleteBehavior.ClientNoAction);

        #endregion

        #region Doc Verifications
        modelBuilder.Entity<DocVerifications>(entity =>
        {
            entity.HasIndex(e => e.EmployeeId, "IX_DocVerifications_EmployeeId");
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.CreateAt).HasColumnType("timestamp without time zone");
            entity.Property(e => e.DeletedAt).HasColumnType("timestamp without time zone");
            entity.Property(e => e.LastUpdateAt).HasColumnType("timestamp without time zone");

            modelBuilder.Entity<DocVerifications>()

                .HasOne(cd => cd.Employee)
                .WithMany(e => e.DocVerification)
                .HasForeignKey(cd => cd.EmployeeId)
                .OnDelete(DeleteBehavior.ClientNoAction);
        });

        #endregion

        #region Education Information
        modelBuilder.Entity<EducationInformation>()
            .HasOne<Employees>(ei => ei.Employee)
            .WithMany(e => e.EducationInformation)
            .HasForeignKey(ei => ei.EmployeeId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<EducationInformation>()
            .HasOne<AcademicAchievement>(ei => ei.AcademicAchievement)
            .WithMany(aa => aa.EducationInformation)
            .HasForeignKey(ei => ei.AcademicAchievementId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<EducationInformation>()
            .HasOne<AcademicField>(ei => ei.AcademicField)
            .WithMany(af => af.EducationInformation)
            .HasForeignKey(ei => ei.AcademicFieldId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<EducationInformation>()
            .HasOne<PreciseAcademicField>(ei => ei.PreciseAcademicField)
            .WithMany(paf => paf.EducationInformation)
            .HasForeignKey(ei => ei.PreciseAcademicFieldId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<EducationInformation>()
            .HasOne<Country>(ei => ei.Country)
            .WithMany(c => c.EducationInformation)
            .HasForeignKey(ei => ei.CountryId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<EducationInformation>()
            .HasOne<StudyType>(ei => ei.StudyType)
            .WithMany(st => st.EducationInformation)
            .HasForeignKey(ei => ei.StudyTypeId)
            .OnDelete(DeleteBehavior.ClientNoAction);
        #endregion

        #region Employee Applicable Laws
        modelBuilder.Entity<EmployeeApplicableLaws>()
            .HasOne<Employees>(eal => eal.Employee)
            .WithMany(e => e.EmployeeApplicableLaws)
            .HasForeignKey(eal => eal.EmployeeId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<EmployeeApplicableLaws>()
            .HasOne<Laws>(eal => eal.Law)
            .WithMany(l => l.EmployeeApplicableLaws)
            .HasForeignKey(eal => eal.LawId)
            .OnDelete(DeleteBehavior.ClientNoAction);
        #endregion

        #region Employee Course
        modelBuilder.Entity<EmployeeCourse>()
            .HasOne(cd => cd.Employee)
            .WithMany(e => e.EmployeeCourses)
            .HasForeignKey(cd => cd.EmployeeId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        #endregion

        #region Employee Disciplinary
        modelBuilder.Entity<EmployeeDisciplinary>()
            .HasOne(cd => cd.Employee)
            .WithMany(e => e.EmployeeDisciplinary)
            .HasForeignKey(cd => cd.EmployeeId)
            .OnDelete(DeleteBehavior.ClientNoAction);


        modelBuilder.Entity<EmployeeDisciplinary>()
            .HasOne(cd => cd.TypeOfDisciplinary)
            .WithMany(e => e.EmployeeDisciplinary)
            .HasForeignKey(cd => cd.TypeOfDisciplinaryId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        #endregion

        #region Employee Documents
        modelBuilder.Entity<EmployeeDocuments>()
            .HasOne<Employees>(ed => ed.Employee)
            .WithMany(e => e.EmployeeDocuments)
            .HasForeignKey(ed => ed.EmployeeId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<EmployeeDocuments>()
            .HasOne<EmployeeDocumentsType>(ed => ed.EmployeeDocumentType)
            .WithMany(edt => edt.EmployeeDocuments)
            .HasForeignKey(ed => ed.EmployeeDocumentTypeId)
            .OnDelete(DeleteBehavior.ClientNoAction);
        #endregion

        #region Employee Employee Position
        modelBuilder.Entity<EmployeePosition>()
        .HasOne<Employees>(ep => ep.Employee)
        .WithMany(e => e.EmployeePositions)
        .HasForeignKey(ep => ep.EmployeeId);

        modelBuilder.Entity<EmployeePosition>()
            .HasOne<Directorates>(ep => ep.Directorate)
            .WithMany(d => d.EmployeePositions)
            .HasForeignKey(ep => ep.DirectorateId);

        modelBuilder.Entity<EmployeePosition>()
            .HasOne<SubDirectorates>(ep => ep.SubDirectorate)
            .WithMany(sd => sd.EmployeePositions)
            .HasForeignKey(ep => ep.SubDirectorateId);

        modelBuilder.Entity<EmployeePosition>()
            .HasOne<Departments>(ep => ep.Department)
            .WithMany(d => d.EmployeePositions)
            .HasForeignKey(ep => ep.DepartmentId);

        modelBuilder.Entity<EmployeePosition>()
            .HasOne<Sections>(ep => ep.Section)
            .WithMany(s => s.EmployeePositions)
            .HasForeignKey(ep => ep.SectionId);

        modelBuilder.Entity<EmployeePosition>()
            .HasOne<Units>(ep => ep.Unit)
            .WithMany(u => u.EmployeePositions)
            .HasForeignKey(ep => ep.UnitId);

        modelBuilder.Entity<EmployeePosition>()
            .HasOne<Position>(ep => ep.Position)
            .WithMany(p => p.EmployeePositions)
            .HasForeignKey(ep => ep.PositionId);
        #endregion

        #region Employees
        // modelBuilder.Entity<Employees>()
        // .HasOne<StatusWorking>(e => e.StatusWorking)
        // .WithMany(sw => sw.Employees)
        // .HasForeignKey(e => e.StatusWorkingId)
        //     .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<Employees>()
            .HasOne<Country>(e => e.Country)
            .WithMany(c => c.Employees)
            .HasForeignKey(e => e.CountryId)
            .OnDelete(DeleteBehavior.ClientNoAction);



        modelBuilder.Entity<Employees>()
            .HasOne<JobInformation>(e => e.JobInformation)
            .WithOne(ji => ji.Employee)
            .HasForeignKey<JobInformation>(ji => ji.Id)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<Employees>()
            .HasOne<ManagementInformation>(e => e.ManagementInformation)
            .WithOne(mi => mi.Employee)
            .HasForeignKey<ManagementInformation>(mi => mi.Id)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<Employees>()
            .HasOne<EmployeeService>(e => e.EmployeeService)
            .WithOne(es => es.Employee)
            .HasForeignKey<EmployeeService>(es => es.Id)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<Employees>()
            .HasOne<Promotion>(e => e.Promotion)
            .WithOne(p => p.Employee)
            .HasForeignKey<Promotion>(p => p.Id)
            .OnDelete(DeleteBehavior.ClientNoAction);
        #endregion


        #region HandPull
        modelBuilder.Entity<HandPull>()
            .HasOne(cd => cd.Employee)
            .WithMany(e => e.HandPulls)
            .HasForeignKey(cd => cd.EmployeeId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        #endregion

        #region Log Promotion Withholding
        modelBuilder.Entity<LogPromotionWithholding>()
            .HasOne(cd => cd.Employee)
            .WithMany(e => e.LogPromotionWithholdings)
            .HasForeignKey(cd => cd.EmployeeId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        #endregion

        #region Interruption
        modelBuilder.Entity<Interruption>()
            .HasOne(cd => cd.Employee)
            .WithMany(e => e.Interruptions)
            .HasForeignKey(cd => cd.EmployeeId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        #endregion

        #region Job Category
        modelBuilder.Entity<JobCategory>()
       .HasOne<JobDegree>(jc => jc.Degree)
       .WithMany(jd => jd.JobCategory)
       .HasForeignKey(jc => jc.DegreeId);
        #endregion

        #region Job Title
        modelBuilder.Entity<JobTitle>()
       .HasOne<JobDegree>(jc => jc.Degree)
       .WithMany(jd => jd.JobTitle)
       .HasForeignKey(jc => jc.DegreeId);
        #endregion

        #region Job Information
        modelBuilder.Entity<JobInformation>()
        .HasOne<TypeOfJob>(ji => ji.TypeOfJob)
        .WithMany(toj => toj.JobInformation)
        .HasForeignKey(ji => ji.TypeOfJobId);
        #endregion

        #region Leaves Balance
        modelBuilder.Entity<LeavesBalance>()
           .HasOne<Employees>(e => e.Employee)
           .WithOne(p => p.LeavesBalances)
           .HasForeignKey<LeavesBalance>(p => p.Id)
           .OnDelete(DeleteBehavior.ClientNoAction);
        #endregion

        #region Leaves Medical Balance
        modelBuilder.Entity<LeavesMedicalBalance>()
            .HasOne<Employees>(e => e.Employee)
            .WithOne(p => p.LeavesMedicalBalances)
            .HasForeignKey<LeavesMedicalBalance>(p => p.Id)
            .OnDelete(DeleteBehavior.ClientNoAction);
        #endregion

        #region Leaves

        modelBuilder.Entity<Leaves>()
           .HasOne<Employees>(l => l.Employee)
           .WithMany(e => e.Leaves)
           .HasForeignKey(l => l.EmployeeId)
           .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<Leaves>()
            .HasOne<NormalLeaveType>(l => l.NormalLeaveType)
            .WithMany(nlt => nlt.Leaves)
            .HasForeignKey(l => l.NormalLeaveTypeId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<Leaves>()
            .HasOne<SicknessType>(l => l.SicknessType)
            .WithMany(st => st.Leaves)
            .HasForeignKey(l => l.SicknessTypeId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<Leaves>()
            .HasOne<Country>(l => l.Country)
            .WithMany(c => c.Leaves)
            .HasForeignKey(l => l.CountryId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        #endregion

        #region Log Leaves Balance
        modelBuilder.Entity<LogLeavesBalance>()
            .HasOne(cd => cd.Employee)
            .WithMany(e => e.LogLeavesBalance)
            .HasForeignKey(cd => cd.EmployeeId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        #endregion

        #region Management Information

        modelBuilder.Entity<ManagementInformation>()
            .HasOne<Directorates>(mi => mi.Directorate)
            .WithMany(d => d.ManagementInformation)
            .HasForeignKey(mi => mi.DirectorateId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<ManagementInformation>()
            .HasOne<SubDirectorates>(mi => mi.SubDirectorate)
            .WithMany(sd => sd.ManagementInformation)
            .HasForeignKey(mi => mi.SubDirectorateId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<ManagementInformation>()
            .HasOne<Departments>(mi => mi.Department)
            .WithMany(d => d.ManagementInformation)
            .HasForeignKey(mi => mi.DepartmentId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<ManagementInformation>()
            .HasOne<Position>(mi => mi.Position)
            .WithMany(p => p.ManagementInformation)
            .HasForeignKey(mi => mi.PositionId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<ManagementInformation>()
            .HasOne<JobDegree>(mi => mi.EmploymentDegree)
            .WithMany(jd => jd.ManagementInformationEmploymentDegree)
            .HasForeignKey(mi => mi.EmploymentDegreeId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<ManagementInformation>()
            .HasOne<JobTitle>(mi => mi.JobTitle)
            .WithMany(jt => jt.ManagementInformation)
            .HasForeignKey(mi => mi.JobTitleId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<ManagementInformation>()
            .HasOne<JobDescription>(mi => mi.JobDescription)
            .WithMany(jd => jd.ManagementInformation)
            .HasForeignKey(mi => mi.JobDescriptionId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<ManagementInformation>()
            .HasOne<JobDegree>(mi => mi.StopJobDegree)
            .WithMany(jd => jd.ManagementInformationStopJobDegree)
            .HasForeignKey(mi => mi.StopJobDegreeId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        #endregion

        #region Marriage Information
        modelBuilder.Entity<MarriageInformation>()
            .HasOne(cd => cd.Employee)
            .WithMany(e => e.MarriageInformation)
            .HasForeignKey(cd => cd.EmployeeId)
            .OnDelete(DeleteBehavior.ClientNoAction);
        #endregion

        #region Martyrs And Wounded


        modelBuilder.Entity<MartyrsAndWounded>()
            .HasOne<Employees>(maw => maw.Employee)
            .WithMany(jc => jc.MartyrsAndWoundeds)
            .HasForeignKey(maw => maw.EmployeeId)
            .OnDelete(DeleteBehavior.ClientNoAction);
        #endregion

        #region Movements
        modelBuilder.Entity<Movements>()
            .HasOne<Employees>(m => m.Employee)
            .WithMany(e => e.Movements)
            .HasForeignKey(m => m.EmployeeId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<Movements>()
            .HasOne<Departments>(m => m.FromDepartment)
            .WithMany(d => d.MovementsFromDepartment)
            .HasForeignKey(m => m.FromDepartmentId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<Movements>()
            .HasOne<Directorates>(m => m.FromDirectorate)
            .WithMany(d => d.MovementsFromDirectorate)
            .HasForeignKey(m => m.FromDirectorateId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<Movements>()
            .HasOne<Sections>(m => m.FromSection)
            .WithMany(s => s.MovementsFromSection)
            .HasForeignKey(m => m.FromSectionId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<Movements>()
            .HasOne<SubDirectorates>(m => m.FromSubDirectorate)
            .WithMany(sd => sd.MovementsFromSubDirectorate)
            .HasForeignKey(m => m.FromSubDirectorateId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<Movements>()
            .HasOne<Units>(m => m.FromUnite)
            .WithMany(u => u.MovementsFromUnite)
            .HasForeignKey(m => m.FromUniteId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<Movements>()
            .HasOne<Departments>(m => m.ToDepartment)
            .WithMany(d => d.MovementsToDepartment)
            .HasForeignKey(m => m.ToDepartmentId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<Movements>()
            .HasOne<Directorates>(m => m.ToDirectorate)
            .WithMany(d => d.MovementsToDirectorate)
            .HasForeignKey(m => m.ToDirectorateId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<Movements>()
            .HasOne<Sections>(m => m.ToSection)
            .WithMany(s => s.MovementsToSection)
            .HasForeignKey(m => m.ToSectionId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<Movements>()
            .HasOne<SubDirectorates>(m => m.ToSubDirectorate)
            .WithMany(sd => sd.MovementsToSubDirectorate)
            .HasForeignKey(m => m.ToSubDirectorateId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<Movements>()
            .HasOne<Units>(m => m.ToUnit)
            .WithMany(u => u.MovementsToUnit)
            .HasForeignKey(m => m.ToUnitId)
            .OnDelete(DeleteBehavior.ClientNoAction);
        #endregion

        #region Promotion
        modelBuilder.Entity<Promotion>()
            .HasOne<PromotionGroup>(p => p.SentPromotionGroup)
            .WithMany(pg => pg.Promotion)
            .HasForeignKey(p => p.SentPromotionGroupId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<Promotion>()
            .HasOne<JobDegree>(p => p.JobDegree)
            .WithMany(jd => jd.Promotions)
            .HasForeignKey(p => p.JobDegreeId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<Promotion>()
            .HasOne<JobCategory>(p => p.JobCategory)
            .WithMany(jc => jc.Promotions)
            .HasForeignKey(p => p.JobCategoryId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        #endregion

        #region Sections
        modelBuilder.Entity<Sections>()
            .HasOne<Departments>(s => s.Department)
            .WithMany(d => d.Sections)
            .HasForeignKey(s => s.DepartmentId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<Sections>()
            .HasOne<Directorates>(s => s.Directorate)
            .WithMany(d => d.Sections)
            .HasForeignKey(s => s.DirectorateId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<Sections>()
            .HasOne<SubDirectorates>(s => s.SubDirectorate)
            .WithMany(sd => sd.Sections)
            .HasForeignKey(s => s.SubDirectorateId)
            .OnDelete(DeleteBehavior.ClientNoAction);



        modelBuilder.Entity<Sections>()
            .HasMany(s => s.MovementsFromSection)
            .WithOne(m => m.FromSection)
            .HasForeignKey(m => m.FromSectionId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<Sections>()
            .HasMany(s => s.MovementsToSection)
            .WithOne(m => m.ToSection)
            .HasForeignKey(m => m.ToSectionId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<Sections>()
            .HasMany(s => s.Units)
            .WithOne(u => u.Section)
            .HasForeignKey(u => u.SectionId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        #endregion

        #region Service Calculation
        modelBuilder.Entity<ServiceCalculation>()
            .HasOne<Employees>(sc => sc.Employee)
            .WithMany(e => e.ServiceCalculations)
            .HasForeignKey(sc => sc.EmployeeId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<ServiceCalculation>()
            .HasOne<TypeOfService>(sc => sc.TypeOfService)
            .WithMany(tos => tos.ServiceCalculation)
            .HasForeignKey(sc => sc.TypeOfServiceId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        #endregion

        #region Study File
        modelBuilder.Entity<StudyFile>()
            .HasOne(cd => cd.Employee)
            .WithMany(e => e.StudyFile)
            .HasForeignKey(cd => cd.EmployeeId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        #endregion

        #region Study Leave
        modelBuilder.Entity<StudyLeave>()
            .HasOne<Employees>(sl => sl.Employee)
            .WithMany(e => e.StudyLeave)
            .HasForeignKey(sl => sl.EmployeeId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<StudyLeave>()
            .HasOne<AcademicAchievement>(sl => sl.AcademicAchievement)
            .WithMany(aa => aa.StudyLeave)
            .HasForeignKey(sl => sl.AcademicAchievementId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<StudyLeave>()
            .HasOne<AcademicCertificateType>(sl => sl.AcademicCertificateType)
            .WithMany(act => act.StudyLeave)
            .HasForeignKey(sl => sl.AcademicCertificateTypeId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<StudyLeave>()
            .HasOne<AcademicField>(sl => sl.AcademicField)
            .WithMany(af => af.StudyLeave)
            .HasForeignKey(sl => sl.AcademicFieldId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<StudyLeave>()
            .HasOne<StudyFile>(sl => sl.StudyFile)
            .WithMany(sf => sf.StudyLeave)
            .HasForeignKey(sl => sl.StudyFileId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<StudyLeave>()
            .HasOne<StudyResult>(sl => sl.StudyResult)
            .WithMany(sr => sr.StudyLeave)
            .HasForeignKey(sl => sl.StudyResultId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<StudyLeave>()
            .HasOne<StudyStatus>(sl => sl.StudyStatus)
            .WithMany(ss => ss.StudyLeave)
            .HasForeignKey(sl => sl.StudyStatusId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<StudyLeave>()
            .HasOne<Country>(sl => sl.Country)
            .WithMany(c => c.StudyLeave)
            .HasForeignKey(sl => sl.CountryId)
            .OnDelete(DeleteBehavior.ClientNoAction);
        #endregion

        #region Study Leave Extension
        modelBuilder.Entity<StudyLeaveExtension>()
            .HasOne<Employees>(sle => sle.Employee)
            .WithMany(e => e.StudyLeaveExtension)
            .HasForeignKey(sle => sle.EmployeeId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<StudyLeaveExtension>()
            .HasOne<StudyExtensionOrderType>(sle => sle.StudyExtensionOrderType)
            .WithMany(seot => seot.StudyLeaveExtension)
            .HasForeignKey(sle => sle.StudyExtensionOrderTypeId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<StudyLeaveExtension>()
            .HasOne<StudyFile>(sle => sle.StudyFile)
            .WithMany(seot => seot.StudyLeaveExtension)
            .HasForeignKey(sle => sle.StudyFileId)
            .OnDelete(DeleteBehavior.ClientNoAction);
        #endregion

        #region Sub Directorates
        modelBuilder.Entity<SubDirectorates>()
            .HasOne(cd => cd.Directorate)
            .WithMany(e => e.SubDirectorates)
            .HasForeignKey(cd => cd.DirectorateId)
            .IsRequired(false)
            .OnDelete(DeleteBehavior.ClientNoAction);
        #endregion

        #region Team Notifications 
        modelBuilder.Entity<TeamNotifications>()
            .HasOne(cd => cd.Employee)
            .WithMany(e => e.TeamNotifications)
            .HasForeignKey(cd => cd.EmployeeId)
            .OnDelete(DeleteBehavior.ClientNoAction);
        #endregion

        #region Thanks And Seniority
        modelBuilder.Entity<ThanksAndSeniority>()
            .HasOne<Employees>(tas => tas.Employee)
            .WithMany(e => e.ThanksAndSeniority)
            .HasForeignKey(tas => tas.EmployeeId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<ThanksAndSeniority>()
            .HasOne<TypeOfBook>(tas => tas.TypeOfBook)
            .WithMany(tob => tob.ThanksAndSeniority)
            .HasForeignKey(tas => tas.TypeOfBookId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<ThanksAndSeniority>()
            .HasOne<TypeOfSeniority>(tas => tas.TypeOfSeniority)
            .WithMany(tos => tos.ThanksAndSeniority)
            .HasForeignKey(tas => tas.TypeOfSeniorityId)
            .OnDelete(DeleteBehavior.ClientNoAction);
        #endregion

        #region Valuation
        modelBuilder.Entity<Valuation>()
            .HasOne(cd => cd.Employee)
            .WithMany(e => e.Valuation)
            .HasForeignKey(cd => cd.EmployeeId)
            .OnDelete(DeleteBehavior.ClientNoAction);
        #endregion


        #region Units
        modelBuilder.Entity<Units>()
            .HasOne<Sections>(u => u.Section)
            .WithMany(s => s.Units)
            .HasForeignKey(u => u.SectionId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<Units>()
            .HasOne<Departments>(u => u.Department)
            .WithMany(e => e.Units)
            .HasForeignKey(u => u.DepartmentId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<Units>()
            .HasOne<Directorates>(u => u.Directorate)
            .WithMany(e => e.Units)
            .HasForeignKey(u => u.DirectorateId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        modelBuilder.Entity<Units>()
            .HasOne<SubDirectorates>(u => u.SubDirectorate)
            .WithMany(e => e.Units)
            .HasForeignKey(u => u.SubDirectorateId)
            .OnDelete(DeleteBehavior.ClientNoAction);

        #endregion
    }
}
