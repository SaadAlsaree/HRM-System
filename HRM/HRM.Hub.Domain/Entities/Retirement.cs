using HRM.Hub.Domain.Common.Enums;

namespace HRM.Hub.Domain.Entities;

public class Retirement: BaseEntity<Guid>
{
    public Guid EmployeeId { get; set; }
    public int? DirectorateId { get; set; }
    public int? SubDirectorateId { get; set; }
    public DateTime? StartDate { get; set; }
    public int? AcademicAchievementId { get; set; }
    public int? JobDegreeId { get; set; }
    public int? JobCategoryId { get; set; }
    public int? JobTitleId { get; set; }
    public string DecisionToFixAge { get; set; }
    public Guid? EmployeePositionId { get; set; }
    public DateTime? EndDateOfService { get; set; }
    public DateTime? Birthdate { get; set; }
    public int RetirementDate { get; set; }
    public string AdministrativeOrderNo { get; set; }
    public DateTime AdministrativeOrderDate { get; set; }
    public bool IsPoliticallyDismissed{ get; set; }
    public Status? Status { get; set; }
    public string Note { get; set; }

    public virtual Directorates Directorate { get; set; }
    public virtual Employees Employee { get; set; }
    public virtual SubDirectorates SubDirectorate { get; set; }
    public AcademicAchievement AcademicAchievement { get; set; }
    public JobDegree JobDegree { get; set; }
    public JobCategory JobCategory { get; set; }
    public JobTitle JobTitle { get; set; }
    public EmployeePosition EmployeePosition { get; set; }

    
}