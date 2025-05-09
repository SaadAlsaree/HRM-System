namespace HRM.Hub.Application.Features.DocVerification.Queries.GetEmployeeDocVerification;
public class GetEmployeeDocVerificationViewModel : BaseViewModel<Guid>
{
    public string StatisticalIndex { get; set; }
    public string EmployeeStatusName { get; set; }
    public string CurrentJobDegreeName { get; set; }
    public DateOnly DueDateDegree { get; set; }
    public string CurrentJobCategoryName { get; set; }
    public DateOnly DueDateCategory { get; set; }
    public string DirectorateName { get; set; }
    public string SubDirectorateName { get; set; }
    public string JobAdministrativeOrderNo { get; set; }
    public DateOnly JobAdministrativeOrderDate { get; set; }
    public string HireAdministrativeOrderNo { get; set; }
    public DateOnly HireAdministrativeOrderDate { get; set; }
    public string AcademicAchievementName { get; set; }
    public string AcademicFieldName { get; set; }
    public string GraduationYear { get; set; }
    public string AfterJobAcademicAchievementName { get; set; }
    public string AfterJobAcademicFieldName { get; set; }
    public string AfterJobGraduationYear { get; set; }
}
