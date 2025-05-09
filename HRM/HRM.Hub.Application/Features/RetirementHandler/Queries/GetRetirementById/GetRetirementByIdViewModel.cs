namespace HRM.Hub.Application.Features.RetirementHandler.Queries.GetRetirementById;

public class GetRetirementByIdViewModel:BaseViewModel<Guid>
{
  
    public int? DirectorateId { get; set; }
    public string StatisticalIndex { get; set; }
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
    public bool IsPoliticallyDismissed { get; set; }
    public string Note { get; set; }
}