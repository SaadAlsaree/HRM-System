using HRM.Hub.Domain.Common.Enums;

namespace HRM.Hub.Domain.Entities;
[Index("JobCode", Name = "Employees_JobCode_key", IsUnique = true)]
[Index("LotNumber", Name = "Employees_LotNumber_key", IsUnique = true)]
[Index("StatisticalIndex", Name = "Employees_StatisticalIndex_key", IsUnique = true)]
public class Employees : BaseEntity<Guid>
{
    public string StatisticalIndex { get; set; }

    public string JobCode { get; set; }

    public string LotNumber { get; set; }

    public string FirstName { get; set; }

    public string SecondName { get; set; }
    public string ThirdName { get; set; }
    public string FourthName { get; set; }
    public string SurName { get; set; }
    public string FullName { get; set; }
    public string MotherFirstName { get; set; }
    public string MotherSecondName { get; set; }
    public string MotherThirdName { get; set; }
    public string MotherSurName { get; set; }
    public string MotherFullName { get; set; }
    public string WifeName { get; set; }
    public int ChildrenCount { get; set; }
    public GenderEnum Gender { get; set; }
    public string BirthPlace { get; set; }
    public DateOnly? BirthDate { get; set; }
    public SocialStatusEnum? SocialStatus { get; set; }
    public string Notes { get; set; }
    public WorkingStatusEnum StatusWorkingId { get; set; }
    public string Nationalism { get; set; }
    public string Religion { get; set; }
    public int? CountryId { get; set; }
    public bool IsPinned { get; set; } = false;
    public Country Country { get; set; }
    public virtual ICollection<Absence> Absence { get; set; } = new List<Absence>();
    public virtual ICollection<AddressInformation> AddressInformation { get; set; } = new List<AddressInformation>();
    public virtual ICollection<AdministrativeOrder> AdministrativeOrder { get; set; } = new List<AdministrativeOrder>();
    public virtual ICollection<Assignments> Assignments { get; set; } = new List<Assignments>();
    // public virtual StatusWorking StatusWorking { get; set; }

    public virtual ICollection<Attributes> Attributes { get; set; } = new List<Attributes>();

    public virtual ICollection<ChangeDegrees> ChangeDegree { get; set; } = new List<ChangeDegrees>();
    public virtual ICollection<ChangeJobTitle> ChangeJobTitle { get; set; } = new List<ChangeJobTitle>();

    public virtual ICollection<ChangeDueDates> ChangeDueDate { get; set; } = new List<ChangeDueDates>();

    public virtual ICollection<ContactInformation> ContactInformation { get; set; } = new List<ContactInformation>();

    public virtual ICollection<EducationInformation> EducationInformation { get; set; } = new List<EducationInformation>();

    public virtual ICollection<EmployeeApplicableLaws> EmployeeApplicableLaws { get; set; } = new List<EmployeeApplicableLaws>();

    public virtual ICollection<EmployeeDisciplinary> EmployeeDisciplinary { get; set; } = new List<EmployeeDisciplinary>();

    public virtual ICollection<EmployeeDocuments> EmployeeDocuments { get; set; } = new List<EmployeeDocuments>();

    public virtual EmployeeService EmployeeService { get; set; }

    public virtual JobInformation JobInformation { get; set; }

    public virtual ICollection<Leaves> Leaves { get; set; } = new List<Leaves>();

    public virtual ICollection<LogLeavesBalance> LogLeavesBalance { get; set; } = new List<LogLeavesBalance>();

    public virtual ManagementInformation ManagementInformation { get; set; }

    public virtual ICollection<MarriageInformation> MarriageInformation { get; set; } = new List<MarriageInformation>();

    public virtual ICollection<Movements> Movements { get; set; } = new List<Movements>();

    public virtual Promotion Promotion { get; set; } = new Promotion();

    public virtual ICollection<ServiceCalculation> ServiceCalculation { get; set; } = new List<ServiceCalculation>();
    public virtual ICollection<EmployeePosition> EmployeePositions { get; set; } = new List<EmployeePosition>();
    public virtual ICollection<StudyFile> StudyFile { get; set; } = new List<StudyFile>();

    public virtual ICollection<StudyLeave> StudyLeave { get; set; } = new List<StudyLeave>();

    public virtual ICollection<TeamNotifications> TeamNotifications { get; set; } = new List<TeamNotifications>();
    public virtual ICollection<StudyLeaveExtension> StudyLeaveExtension { get; set; } = new List<StudyLeaveExtension>();

    public virtual ICollection<ServiceCalculation> ServiceCalculations { get; set; } = new List<ServiceCalculation>();
    public virtual ICollection<ThanksAndSeniority> ThanksAndSeniority { get; set; } = new List<ThanksAndSeniority>();
    public virtual LeavesBalance LeavesBalances { get; set; } = new LeavesBalance();
    public virtual LeavesMedicalBalance LeavesMedicalBalances { get; set; } = new LeavesMedicalBalance();
    public virtual ICollection<Interruption> Interruptions { get; set; } = new List<Interruption>();
    public virtual ICollection<HandPull> HandPulls { get; set; } = new List<HandPull>();
    public virtual ICollection<EmployeeCourse> EmployeeCourses { get; set; } = new List<EmployeeCourse>();
    public virtual ICollection<Valuation> Valuation { get; set; } = new List<Valuation>();
    public virtual ICollection<Resignation> Resignations { get; set; } = new List<Resignation>();
    public virtual ICollection<DocVerifications> DocVerification { get; set; } = new List<DocVerifications>();
    public virtual ICollection<CorrectingAcademicAchievements> CorrectingAcademicAchievements { get; set; } = new List<CorrectingAcademicAchievements>();
    public virtual ICollection<LogPromotionWithholding> LogPromotionWithholdings { get; set; } = new List<LogPromotionWithholding>();
    public virtual ICollection<MartyrsAndWounded> MartyrsAndWoundeds { get; set; } = new List<MartyrsAndWounded>();

}
