namespace HRM.Hub.Application.Features.MartyrsAndWoundedHandler.Queries.GetMartyrsAndWounded;

public class GetMartyrsAndWoundedViewModel: BaseViewModel<Guid>
{
    public int? DirectorateId { get; set; }
    public int? SubDirectorateId { get; set; }
    public DateOnly StartDate { get; set; }
    public int? JobDegreeId { get; set; }
    public int? JobCategoryId { get; set; }
    public int? JobTitleId { get; set; }
    public int EmployeePositionId { get; set; }
    public DateTime? EndDateOfService { get; set; }
    public DateOnly? Birthdate { get; set; }
    public DateTime? RetirementDate { get; set; }
    public string AdministrativeOrderNo { get; set; }
    public DateTime AdministrativeOrderDate { get; set; }
    public bool IsPoliticallyDismissed { get; set; }
    public DateTime? DateOfMartyrdom { get; set; }
    public string Note { get; set; }
    public string HealthStatus { get; set; }
    public string MotherFullName { get;  set; }
    public string GenderName { get;  set; }
    public DateOnly HireDate { get;  set; }
    public DateOnly? DateOfDeath { get;  set; }
    public string EmployeePositionName { get; set; }
    public string JobTitleName { get; set; }
    public string DirectorateName { get; set; }
    public string SubDirectorateName { get;  set; }
    public string AcademicAchievementName { get;  set; }
    public string JobDegreeName { get;  set; }
    public string JobCategoryName { get;  set; }
}