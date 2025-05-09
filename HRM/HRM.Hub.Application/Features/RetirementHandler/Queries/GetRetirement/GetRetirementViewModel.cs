namespace HRM.Hub.Application.Features.RetirementHandler.Queries.GetRetirement;

public class GetRetirementViewModel:BaseViewModel<Guid>
{
  
    public int? DirectorateId { get; set; }
    public string StatisticalIndex { get; set; }
    public string DirectorateName { get; set; }
    public int? SubDirectorateId { get; set; }
    public string SubDirectorateName { get; set; }
    public DateTime? StartDate { get; set; }
    public int? AcademicAchievementId { get; set; }
    public string AcademicAchievementName { get; set; }
    public int? JobDegreeId { get; set; }
    public string JobDegreeName { get; set; }
    public int? JobCategoryId { get; set; }
    public string JobCategoryName { get; set; }
    public int? JobTitleId { get; set; }
    public string JobTitleName { get; set; }
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